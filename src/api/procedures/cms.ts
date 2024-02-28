import {procedure as publicProcedure, router} from '@trpc-api/trpc';

import {
    Components,
    type IBannerVideo,
    type IButton, IButtonColors, IButtonTypes,
    type Image,
    type IPage,
} from 'src/types/CMSInterfaces.ts';
import type {
    GetPagesParams, Page,
    PageContentItem,
    SharedBannerVideoComponent,
    SharedHeaderComponent
} from 'src/types/generated.schemas.ts';
import {getPages} from 'src/types/page.ts';

function isSharedBannerVideo(component: PageContentItem){
    return (component as SharedBannerVideoComponent).__component === 'shared.banner-video';
}

function isSharedHeader(component: PageContentItem){
    return (component as SharedHeaderComponent).__component === 'shared.header';
}

function getButtonType(type: string|undefined){
    switch (type){
        case 'card':
            return IButtonTypes.CARD
        case 'tile':
            return IButtonTypes.TILE
        case 'icon':
            return IButtonTypes.ICON
    }
    return null;
}

function getButtonColor(type: string|undefined){
    switch (type){
        case 'Default':
            return IButtonColors.DEFAULT
        case 'Marked':
            return IButtonColors.MARKED
    }
    return null;
}

function getComponentFromString(component: PageContentItem){
    if(isSharedBannerVideo(component)){
        const sharedBannerVideo = component as SharedBannerVideoComponent;
        return {
            componentName: Components.BannerVideo, 
            title: sharedBannerVideo.title, 
            description: sharedBannerVideo.description, 
            url: sharedBannerVideo.videoUrl
        } as IBannerVideo;
    }
    
    if(isSharedHeader(component)){
        const sharedHeader = component as SharedHeaderComponent;
        const buttons: IButton[] = [];
        sharedHeader.buttons?.forEach((button)=>{
            const buttonLinkPage = button.link?.data?.attributes as Page;
            buttonLinkPage.slug
            buttons.push(
                {
                    title: button.title,
                    description: button.description,
                    url: button.externalUrl? button.externalUrl : buttonLinkPage.slug,
                    type: getButtonType(button.type),
                    color: getButtonColor(button.color),
                    image: {
                        name: button.image?.data?.attributes?.name, 
                        url: button.image?.data?.attributes?.url
                    } as Image
                } as IButton
            )
        })
        return {
            componentName: Components.Header,
            title: sharedHeader.title,
            buttons: buttons,
            image: {
                name: sharedHeader.image?.data?.attributes?.name,
                url: sharedHeader.image?.data?.attributes?.url
            } as Image
        } as any;
    }
    return null;
}

export async function getPage(pageSlug: string): Promise<IPage|null>{
    const params: GetPagesParams = {populate:'deep,10', filters: {
            slug: {
                $eq: pageSlug
            }
        }};
    const response = await getPages(params).catch((err)=>{console.log(err);})
    

    if(response && response.data && response.data[0]){
        const dataObject = response.data[0];
        let page:IPage = {title: dataObject.attributes!.slug, components: []}
        dataObject.attributes?.content?.forEach((component: PageContentItem)=>{
            const astroComponent = getComponentFromString(component);
            if(astroComponent){
                page.components.push(astroComponent);
            }
        })
        return page;
    }
    return null
}

export async function getAllPages(): Promise<IPage[]> {
    const params: GetPagesParams = {populate:'deep,10'};
    const response = await getPages(params).catch((err)=>{console.log(err);})

    let pages: IPage[]  = [];
    const data = response?.data;
    data?.forEach((dataObject)=>{
        let page:IPage = {title: dataObject.attributes!.slug, components: []}
        dataObject.attributes?.content?.forEach((component)=>{
            const astroComponent = getComponentFromString(component);
            if(astroComponent){
                page.components.push(astroComponent);
            }
        })
        pages.push(page);
    })
    return pages;
}

export const CMSRouter = router({
    getPages: publicProcedure
        .query(() => getPages()),
});
