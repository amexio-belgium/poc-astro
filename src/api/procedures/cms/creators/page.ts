import type {Page} from '@trpc-procedures/cms/types.ts';
import type {
    GetPagesParams,
    PageContentItem,
    SharedBannerCardsComponent,
    SharedBannerTilesComponent,
    SharedBannerVideoComponent,
    SharedHeaderComponent
} from 'src/types/strapi/generated.schemas.ts';
import {getPages} from 'src/types/strapi/page.ts';
import {
    isSharedBannerCards,
    isSharedBannerTiles,
    isSharedBannerVideo,
    isSharedHeader
} from '@trpc-procedures/cms/helpers/isComponent.ts';
import {createBannerVideo} from '@trpc-procedures/cms/creators/bannerVideo.ts';
import {createHeader} from '@trpc-procedures/cms/creators/header.ts';
import type {GetPageInput} from '@trpc-procedures/cms';
import {createBannerCards} from '@trpc-procedures/cms/creators/bannerCards.ts';
import {createBannerTiles} from '@trpc-procedures/cms/creators/bannerTiles.ts';
import {denormalize} from '@drupal/decoupled-menu-parser';
import axios from 'axios';
import type {Menu} from '@drupal/decoupled-menu-parser/dist/core/menu';

export function getComponentFromStringStrapi(component: PageContentItem){
    if(isSharedBannerVideo(component)){
        const sharedBannerVideo = component as SharedBannerVideoComponent;
        return createBannerVideo(sharedBannerVideo);
    }
    if(isSharedHeader(component)){
        const sharedHeader = component as SharedHeaderComponent;
        return createHeader(sharedHeader)
    }
    if(isSharedBannerCards(component)){
        const sharedBannerCards = component as SharedBannerCardsComponent;
        return createBannerCards(sharedBannerCards)
    }
    if(isSharedBannerTiles(component)){
        const sharedBannerTiles = component as SharedBannerTilesComponent;
        return createBannerTiles(sharedBannerTiles)
    }
    return null;
}

export async function getHeaderDrupal(){
    const menuResponse = await axios.get('https://develop-sr3snxi-2j664gzulfclu.fr-4.platformsh.site/system/menu/main/linkset')
    const menu = denormalize(menuResponse.data) as Menu[];
    
    return menu[0]
}

export async function getPageStrapi({input}: { input: GetPageInput; }): Promise<Page|null>{
    const params: GetPagesParams = {populate:'deep,10', filters: {
            slug: {
                $eq: input
            }
        }};
    const response = await getPages(params).catch((err)=>{console.log(err);})

    if(response && response.data && response.data[0]){
        const dataObject = response.data[0];
        let page:Page = {title: dataObject.attributes?.title!, slug: dataObject.attributes!.slug, components: []}
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
    const params: GetPagesParams = {populate:'deep,10'};
    const response = await getPages(params).catch((err)=>{console.log(err);})

    let pages: Page[]  = [];
    const data = response?.data;
    data?.forEach((dataObject)=>{
        let page:Page = {title: dataObject.attributes!.title,slug: dataObject.attributes!.slug, components: []}
        dataObject.attributes?.content?.forEach((component)=>{
            const astroComponent = getComponentFromStringStrapi(component);
            if(astroComponent){
                page.components.push(astroComponent);
            }
        })
        pages.push(page);
    })
    return pages;
}

export async function getPageDrupal({input}: { input: GetPageInput; }): Promise<Page|null>{
    // TODO Write code for fetching Drupal page

    return null
}

export async function getAllPagesDrupal(): Promise<Page[]> {
    // TODO Write code for fetching Drupal pages
    return [];
}