import type {Page} from '@trpc-procedures/cms/types.ts';
import type {
    GetPagesParams,
    PageContentItem,
    SharedBannerVideoComponent,
    SharedHeaderComponent
} from 'src/types/generated.schemas.ts';
import {getPages} from 'src/types/page.ts';
import {isSharedBannerVideo, isSharedHeader} from '@trpc-procedures/cms/helpers/isComponent.ts';
import {createBannerVideo} from '@trpc-procedures/cms/creators/bannerVideo.ts';
import {createHeader} from '@trpc-procedures/cms/creators/header.ts';
import type {GetPageInput} from '@trpc-procedures/cms/index.ts';

function getComponentFromString(component: PageContentItem){
    if(isSharedBannerVideo(component)){
        const sharedBannerVideo = component as SharedBannerVideoComponent;
        return createBannerVideo(sharedBannerVideo);
    }
    if(isSharedHeader(component)){
        const sharedHeader = component as SharedHeaderComponent;
        return createHeader(sharedHeader)
    }
    return null;
}



export async function getAllPages(): Promise<Page[]> {
    const params: GetPagesParams = {populate:'deep,10'};
    const response = await getPages(params).catch((err)=>{console.log(err);})

    let pages: Page[]  = [];
    const data = response?.data;
    data?.forEach((dataObject)=>{
        let page:Page = {title: dataObject.attributes!.slug, components: []}
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