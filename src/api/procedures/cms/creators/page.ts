import {type Page, type StrapiMenuResponse} from '@trpc-procedures/cms/types.ts';
import type {
    GetPagesParams,
    PageContentItem,
    SharedBanner5050Component,
    SharedBannerCardsComponent,
    SharedBannerFullComponent,
    SharedBannerTilesComponent,
    SharedBannerVideoComponent,
    SharedHeaderComponent,
    SharedTextComponent
} from 'src/types/strapi/generated.schemas.ts';
import {getPages} from 'src/types/strapi/page.ts';
import {
    isSharedBanner5050,
    isSharedBannerCards, isSharedBannerFull, isSharedBannerTiles,
    isSharedBannerVideo,
    isSharedHeader, isSharedJobs, isSharedText,
} from '@trpc-procedures/cms/helpers/isComponent.ts';
import {createBannerVideoDrupal, createBannerVideoStrapi} from '@trpc-procedures/cms/creators/bannerVideo.ts';
import {createDefaultHeader, createHeaderDrupal, createHeaderStrapi} from '@trpc-procedures/cms/creators/header.ts';
import type {GetPageInput, GetPageLang} from '@trpc-procedures/cms';
import {createBannerCardsStrapi, createBannerCardsDrupal} from '@trpc-procedures/cms/creators/bannerCards.ts';
import {createBannerTilesDrupal, createBannerTilesStrapi} from '@trpc-procedures/cms/creators/bannerTiles.ts';
import axios from 'axios'
import type {
    NodePage,
    ParagraphTeaser,
    ParagraphUnion,
    Query
} from 'src/types/drupal/resolvers-types.ts';
import {denormalize} from '@drupal/decoupled-menu-parser';
import type {Menu} from '@drupal/decoupled-menu-parser/dist/core/menu';
import {createBannerFullDrupal, createBannerFullStrapi} from '@trpc-procedures/cms/creators/bannerFull.ts';
import {createTextDrupal, createTextStrapi} from '@trpc-procedures/cms/creators/text.ts';
import {createBanner5050Drupal, createBanner5050Strapi} from '@trpc-procedures/cms/creators/banner5050.ts';
import {createJob} from '@trpc-procedures/cms/creators/job.ts';

const languages: string[] = ["en","nl"];

export function getComponentFromStringStrapi(component: PageContentItem){
    if(isSharedBannerVideo(component)){
        const sharedBannerVideo = component as SharedBannerVideoComponent;
        return createBannerVideoStrapi(sharedBannerVideo);
    }
    if(isSharedHeader(component)){
        const sharedHeader = component as SharedHeaderComponent;
        return createHeaderStrapi(sharedHeader)
    }
    if(isSharedBannerCards(component)){
        const sharedBannerCards = component as SharedBannerCardsComponent;
        return createBannerCardsStrapi(sharedBannerCards)
    }
    if(isSharedBannerTiles(component)){
        const sharedBannerTiles = component as SharedBannerTilesComponent;
        return createBannerTilesStrapi(sharedBannerTiles)
    }
    if(isSharedBannerFull(component)){
        const sharedBannerFull = component as SharedBannerFullComponent;
        return createBannerFullStrapi(sharedBannerFull)
    }
    if(isSharedText(component)){
        const sharedText = component as SharedTextComponent;
        return createTextStrapi(sharedText);
    }
    if(isSharedBanner5050(component)){
        const sharedBanner5050 = component as SharedBanner5050Component;
        return createBanner5050Strapi(sharedBanner5050);
    }
    if(isSharedJobs(component)){
        return createJob();
    }
    return null;
}


function getComponentFromStringDrupal(paragraph: ParagraphUnion){
    //Check if paragraph is not empty graphql object
    if(Object.keys(paragraph).length > 1){
        if(paragraph.__typename === 'ParagraphTeaser'){
            const paragraphTeaser = paragraph as ParagraphTeaser;
            if(paragraphTeaser.type === 'card'){
                return createBannerCardsDrupal(paragraphTeaser)
            }
            if(paragraphTeaser.type === 'tile'){
                return createBannerTilesDrupal(paragraphTeaser)
            }
        }
        if(paragraph.__typename === 'ParagraphVideobanner'){
            return createBannerVideoDrupal(paragraph);
        }
        if(paragraph.__typename === 'ParagraphHeader'){
            return createHeaderDrupal(paragraph);
        }
        if(paragraph.__typename === 'ParagraphBannerFull'){
            return createBannerFullDrupal(paragraph);
        }
        if(paragraph.__typename === 'ParagraphText'){
            return createTextDrupal(paragraph);
        }
        if(paragraph.__typename === 'ParagraphBanner5050'){
            return createBanner5050Drupal(paragraph);
        }
        if(paragraph.__typename === 'ParagraphJob'){
            return createJob();
        }
    }

}

export async function getHeaderDrupal(lang: string){
    let langPrefix = '';
    if(lang=='en') langPrefix = '/en';
    const menuResponse = await axios.get(`${import.meta.env.DRUPAL_URL}${langPrefix}/system/menu/main/linkset`)
    const menu = denormalize(menuResponse.data) as Menu[];
    return menu[0]
}

export async function getHeaderStrapi(lang: string){
    let id = 1;
    if(lang==='en'){
        id = 2;
    }
    const response = await axios.get(`${import.meta.env.STRAPI_URL}/api/menus/${id}?nested&populate=*`)
    const menu: StrapiMenuResponse = response.data;
    
    return menu;
}

export async function getHeaderStrapiFlat(lang: string){
    let id = 1;
    if(lang==='en'){
        id = 2;
    }
    const response = await axios.get(`${import.meta.env.STRAPI_URL}/api/menus/${id}?populate=*`)
    const menu: StrapiMenuResponse = response.data;

    return menu;
}

export async function getPageStrapi({input, lang}: { input: GetPageInput; lang: GetPageLang; }): Promise<Page|null>{
    const params: GetPagesParams = {
        populate:'deep,10', 
        filters: {
            slug: {
                $eq: input
            }
        },
        locale: lang
    };
    const response = await getPages(params).catch((err)=>{console.log(err);})
    if(response && response.data && response.data[0]){
        const dataObject = response.data[0];
        let page:Page = {
            title: dataObject.attributes?.title!, 
            lang: lang, 
            slug: dataObject.attributes!.slug, 
            hideDefaultHeader: dataObject.attributes?.defaultHeader === 'Hidden',
            components: []
        }
        if(!page.hideDefaultHeader){
            const defaultHeader = createDefaultHeader(page.title, dataObject.attributes!.description)
            page.components.push(defaultHeader)
        }
        dataObject.attributes?.content?.forEach((component: PageContentItem)=>{
            const astroComponent = getComponentFromStringStrapi(component);
            if(astroComponent){
                page.components.push(astroComponent);
            }
        })
        return page;
    }
    return null
}


export async function getAllPagesStrapi(): Promise<Page[]> {
    let pages: Page[]  = [];
    for (const lang of languages) {
        const params: GetPagesParams = {
            populate:'deep,10', 
            locale: lang
        };
        const response = await getPages(params).catch((err)=>{console.log(err);})
        const data = response?.data;
        data?.forEach((dataObject)=>{
            let page:Page = {
                title: dataObject.attributes!.title, 
                lang: lang,
                hideDefaultHeader: dataObject.attributes?.defaultHeader === 'Hidden',
                slug: `${lang}/${dataObject.attributes!.slug}`, 
                components: []
            }
            if(!page.hideDefaultHeader){
                const defaultHeader = createDefaultHeader(page.title, dataObject.attributes!.description)
                page.components.push(defaultHeader)
            }
            dataObject.attributes?.content?.forEach((component)=>{
                const astroComponent = getComponentFromStringStrapi(component);
                if(astroComponent){
                    page.components.push(astroComponent);
                }
            })
            pages.push(page);
        })
    }
    return pages;
}

async function getDrupalPageId(slug: string, lang: string) {
    const query = axios<{data: Query}>({
        url: `${import.meta.env.DRUPAL_URL}/graphql`,
        method: 'post',
        data: {
            query: `
                    query MyQuery {
                      nodePages(first: 100 ${lang!==''? `, langcode: "${lang}"`:``} ) {
                        nodes {
                          __typename
                          id
                          path
                          uuid
                        }
                      }
                    }
      `
        }
    })
    const data = await query;
    const pageId = data.data.data.nodePages.nodes.find((node: NodePage)=> node.path === `/${slug}`);
    if(pageId) return pageId.uuid;
    return null;
}

export async function getPageDrupal({slug, lang}: { slug: GetPageInput; lang: GetPageLang; }): Promise<Page|null>{
    const pageId = await getDrupalPageId(slug, lang);
    if(!pageId) return null;
    const query = axios<{data: Query}>({
        url: `${import.meta.env.DRUPAL_URL}/graphql`,
        method: 'post',
        data: {
            query: `
                    query MyQuery {
                      node(id: "${pageId}"${lang!==''? `, langcode: "${lang}"`:``}) {
                        ... on NodePage {
                          __typename
                          paragraphs {
                            __typename
                            ... on ParagraphTeaser {
                              id
                              __typename
                              reference {
                                __typename
                                ... on NodePage {
                                  id
                                  title
                                  path
                                  mediaImage {
                                    ... on MediaImage {
                                      id
                                      name
                                      mediaImage {
                                        url
                                      }
                                    }
                                  }
                                  body {
                                    value
                                  }
                                }
                              }
                              type
                            }
                            __typename
                            ... on ParagraphVideobanner {
                              beschrijving {
                                value
                              }
                              titel
                              videoUrl {
                                ... on MediaRemoteVideo {
                                  mediaOembedVideo
                                }
                              }
                            }
                            __typename
                            ... on ParagraphHeader {
                              knoppen {
                                __typename
                                ... on ParagraphButton {
                                  title
                                  image {
                                    __typename
                                    ... on MediaImage {
                                      name
                                      mediaImage {
                                        url
                                      }
                                    }
                                  }
                                  link {
                                    url
                                  }
                                }
                              }
                              image {
                                ... on MediaImage {
                                  name
                                  mediaImage {
                                    url
                                  }
                                }
                              }
                              title
                            }
                            __typename
                            ... on ParagraphBannerFull {
                              id
                              imagebannerfull {
                                ... on MediaImage {
                                  name
                                  mediaImage {
                                    url
                                  }
                                }
                              }
                              title
                              uitlijning
                              linkKnopTekst
                              link {
                                url
                              }
                              description {
                                value
                              }
                            }
                            __typename
                            ... on ParagraphText {
                              text {
                                value
                              }
                            }
                            __typename
                            ... on ParagraphBanner5050 {
                              id
                              buttons {
                                ... on ParagraphButton {
                                  buttonText
                                  image {
                                    ... on MediaImage {
                                      name
                                      mediaImage {
                                        url
                                        title
                                      }
                                    }
                                  }
                                  link {
                                    url
                                  }
                                  title
                                }
                              }
                            }
                            __typename
                            ... on ParagraphJob {
                              id
                            }
                          }
                          body {
                            value
                          }
                          title
                          path
                          verbergStandaardHeader
                        }
                      }
                    }
      `
        }
    })
    const data = await query;
    const pageNode: NodePage = data.data.data.node!;
    let page:Page = {
        title: pageNode!.title, 
        lang: lang,
        hideDefaultHeader: pageNode?.verbergStandaardHeader === true,
        slug: pageNode!.path, 
        components: []
    }

    if(!page.hideDefaultHeader){
        const defaultHeader = createDefaultHeader(page.title, pageNode.body?.value?.replace(/<\/?[^>]+(>|$)/g, ""))
        page.components.push(defaultHeader)
    }
    
    pageNode?.paragraphs?.forEach((paragraphUnion)=>{
        const component = getComponentFromStringDrupal(paragraphUnion);
        if(component) page.components.push(component);
    })
    return page;
}

export async function getAllPagesDrupal(): Promise<Page[]> {
    const pages: Page[] = [];
    for (const lang of languages) {
        const query = await axios<{data: Query}>({
            url: `${import.meta.env.DRUPAL_URL}/graphql`,
            method: 'post',
            data: {
                query: `
query MyQuery {
    nodePages(first: 100, langcode: "${lang}") {
      nodes {
          __typename
          paragraphs {
            __typename
            ... on ParagraphTeaser {
              id
              __typename
              reference {
                __typename
                ... on NodePage {
                  id
                  title
                  path
                  mediaImage {
                    ... on MediaImage {
                      id
                      name
                      mediaImage {
                        url
                      }
                    }
                  }
                  body {
                    value
                  }
                }
              }
              type
            }
            __typename
            ... on ParagraphVideobanner {
              beschrijving {
                value
              }
              titel
              videoUrl {
                ... on MediaRemoteVideo {
                  mediaOembedVideo
                }
              }
            }
            __typename
            ... on ParagraphHeader {
              knoppen {
                __typename
                ... on ParagraphButton {
                  title
                  image {
                    __typename
                    ... on MediaImage {
                      name
                      mediaImage {
                        url
                      }
                    }
                  }
                  link {
                    url
                  }
                }
              }
              image {
                ... on MediaImage {
                  name
                  mediaImage {
                    url
                  }
                }
              }
              title
            }
            __typename
            ... on ParagraphBannerFull {
              id
              imagebannerfull {
                ... on MediaImage {
                  name
                  mediaImage {
                    url
                  }
                }
              }
              title
              uitlijning
              linkKnopTekst
              link {
                url
              }
              description {
                value
              }
            }
            __typename
            ... on ParagraphText {
              text {
                value
              }
            }
            __typename
            ... on ParagraphBanner5050 {
              id
              buttons {
                ... on ParagraphButton {
                  buttonText
                  image {
                    ... on MediaImage {
                      name
                      mediaImage {
                        url
                        title
                      }
                    }
                  }
                  link {
                    url
                  }
                  title
                }
              }
            }
            __typename
            ... on ParagraphJob {
              id
            }
          }
          body {
            value
          }
          title
          path
          verbergStandaardHeader
      }
    }
  }
                `
            }
        });
        query.data.data.nodePages.nodes.forEach((nodePage: NodePage)=>{
            let page:Page = {
                title: nodePage.title, 
                lang: lang,
                hideDefaultHeader: nodePage?.verbergStandaardHeader === true,
                slug: nodePage.path, 
                components: []
            }

            if(!page.hideDefaultHeader){
                const defaultHeader = createDefaultHeader(page.title, nodePage.body?.value?.replace(/<\/?[^>]+(>|$)/g, ""))
                page.components.push(defaultHeader)
            }
            
            nodePage?.paragraphs?.forEach((paragraphUnion)=>{
                const component = getComponentFromStringDrupal(paragraphUnion);
                if(component) page.components.push(component);
            })
            pages.push(page);
        })
        
    }
    return pages;
}