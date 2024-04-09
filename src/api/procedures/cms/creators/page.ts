import {type ComponentsUnion, type Page} from '@trpc-procedures/cms/types.ts';
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
import {createBannerVideoDrupal, createBannerVideoStrapi} from '@trpc-procedures/cms/creators/bannerVideo.ts';
import {createDefaultHeader, createHeaderDrupal, createHeaderStrapi} from '@trpc-procedures/cms/creators/header.ts';
import type {GetPageInput, GetPageLang} from '@trpc-procedures/cms';
import {createBannerCardsStrapi, createBannerCardsDrupal} from '@trpc-procedures/cms/creators/bannerCards.ts';
import {createBannerTilesDrupal, createBannerTilesStrapi} from '@trpc-procedures/cms/creators/bannerTiles.ts';
import axios from 'axios'
import type {
    NodePage, ParagraphBanner5050, ParagraphBannerFull, ParagraphHeader,
    ParagraphTeaser, ParagraphText,
    ParagraphUnion, ParagraphVideobanner,
    Query
} from 'src/types/drupal/resolvers-types.ts';
import {createBannerFullDrupal, createBannerFullStrapi} from '@trpc-procedures/cms/creators/bannerFull.ts';
import {createTextDrupal, createTextStrapi} from '@trpc-procedures/cms/creators/text.ts';
import {createBanner5050Drupal, createBanner5050Strapi} from '@trpc-procedures/cms/creators/banner5050.ts';
import {createJob} from '@trpc-procedures/cms/creators/job.ts';
import {getComponentFromConfig} from "../../../../mapping/abstract/component.instantiate.ts";
import {componentsConfigListNew} from "../../../../mapping/new.config.ts";

const languages: string[] = ["en","nl"];
type ComponentMapStrapiFunction = (component: PageContentItem) => ComponentsUnion|null;
const componentMapStrapi: {key: string, function: ComponentMapStrapiFunction}[] = [
    {
        key: 'shared.banner-video',
        function: (component: SharedBannerVideoComponent) => createBannerVideoStrapi(component)
    },
    {
        key: 'shared.header',
        function: (component: SharedHeaderComponent) => createHeaderStrapi(component)
    },
    {
        key: 'shared.banner-cards',
        function: (component: SharedBannerCardsComponent) => createBannerCardsStrapi(component)
    },
    {
        key: 'shared.banner-tiles',
        function: (component: SharedBannerTilesComponent) => createBannerTilesStrapi(component)
    },
    {
        key: 'shared.banner-full',
        function: (component: SharedBannerFullComponent) => createBannerFullStrapi(component)
    },
    {
        key: 'shared.text',
        function: (component: SharedTextComponent) => createTextStrapi(component)
    },
    {
        key: 'shared.banner-5050',
        function: (component: SharedBanner5050Component) => createBanner5050Strapi(component)
    },
    {
        key: 'shared.jobs',
        function: () => createJob()
    }
    
]

export function getComponentFromStringStrapi(pageContentItem: PageContentItem){
    const component = componentMapStrapi.find(
        (component) => component.key === pageContentItem.__component
    );
    if(component) return component.function(pageContentItem);
}

type ComponentMapDrupalFunction = (paragraph: ParagraphUnion) => ComponentsUnion|null;
const componentMapDrupal: {key: string, function: ComponentMapDrupalFunction}[] = [
    {
        key: 'ParagraphVideoBanner',
        function: (paragraph) => createBannerVideoDrupal(paragraph as ParagraphVideobanner)
    },
    {
        key: 'ParagraphHeader',
        function: (paragraph) => createHeaderDrupal(paragraph as ParagraphHeader)
    },
    {
        key: 'ParagraphBannerFull',
        function: (paragraph) => createBannerFullDrupal(paragraph as ParagraphBannerFull)
    },
    {
        key: 'ParagraphText',
        function: (paragraph) => createTextDrupal(paragraph as ParagraphText)
    },
    {
        key: 'ParagraphBanner5050',
        function: (paragraph) => createBanner5050Drupal(paragraph as ParagraphBanner5050)
    },
    {
        key: 'ParagraphJob',
        function: () => createJob()
    },
    {
        key: 'ParagraphTeaser',
        function: (paragraph) => {
            const paragraphTeaser = paragraph as ParagraphTeaser;
            if(paragraphTeaser.type === 'card'){
                return createBannerCardsDrupal(paragraphTeaser)
            }
            else if(paragraphTeaser.type === 'tile'){
                return createBannerTilesDrupal(paragraphTeaser)
            }
            return null;
        }
    },
]


function getComponentFromStringDrupal(paragraph: ParagraphUnion){
    //Check if paragraph is not empty graphql object
    if(Object.keys(paragraph).length > 1){
        const paragraphComponent = componentMapDrupal.find(
            (paragraphComponent) => paragraphComponent.key === paragraph.__typename
        );
        if(paragraphComponent) return paragraphComponent.function(paragraph);
    }

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
        const page:Page = {
            title: dataObject.attributes?.title ? dataObject.attributes?.title : '', 
            lang: lang, 
            slug: dataObject.attributes ? dataObject.attributes!.slug : '', 
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

export async function getPageNew({input, lang}: { input: GetPageInput; lang: GetPageLang; }): Promise<Page|null>{
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
        const page:Page = {
            title: dataObject.attributes?.title ? dataObject.attributes?.title : '',
            lang: lang,
            slug: dataObject.attributes ? dataObject.attributes!.slug : '',
            hideDefaultHeader: dataObject.attributes?.defaultHeader === 'Hidden',
            components: []
        }
        if(!page.hideDefaultHeader){
            const defaultHeader = createDefaultHeader(page.title, dataObject.attributes!.description)
            page.components.push(defaultHeader)
        }
        dataObject.attributes?.content?.forEach((component: PageContentItem)=>{
            // make sure objects are mapped correclty over here
            const astroComponent = getComponentFromConfig(component, componentsConfigListNew);
            if(astroComponent){
                console.log('astro');
                page.components.push(astroComponent);
            }
        })
        return page;
    }
    return null
}

export async function getAllPagesStrapi(): Promise<Page[]> {
    const pages: Page[]  = [];
    for (const lang of languages) {
        const params: GetPagesParams = {
            populate:'deep,10', 
            locale: lang
        };
        const response = await getPages(params).catch((err)=>{console.log(err);})
        const data = response?.data;
        data?.forEach((dataObject)=>{
            const page:Page = {
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
    const page:Page = {
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
            const page:Page = {
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