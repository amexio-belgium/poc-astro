import {procedure as publicProcedure, router} from '@trpc-api/trpc';

import {
    Components,
    type ContentEntity,
    type GetPagesResult,
    type Page,
    type ISharedVideoBlock,
} from 'src/api/interfaces/CMSInterfaces.ts';


export function getComponentNameFromString(component: ContentEntity){
    if(component.__component === 'shared.video-block'){
        return 'SharedVideoBlock'
    }
    return null;
}

function getComponentFromString(component: ContentEntity){
    if(component.__component === 'shared.video-block'){
        return {componentName: Components.SharedVideoBlock, title: component.title, description: component.description, url: component.video} as ISharedVideoBlock;
    }
    return null;
}

export async function getPages(): Promise<Page[]> {
    const response = await fetch(`${import.meta.env.STRAPI_URL}/single-pages?populate=*`);
    const body = await response.text();
    const data = JSON.parse(body) as GetPagesResult;
    let pages: Page[]  = [];
    if(data.data){
        data.data.forEach((dataObject)=>{
            let page:Page = {title: dataObject.attributes.slug, components: []}
            dataObject.attributes.content?.forEach((component)=>{
                const astroComponent = getComponentFromString(component);
                if(astroComponent){
                    page.components.push(astroComponent);
                }
            })
            pages.push(page);
        })
    }
    return pages;
}

export const CMSRouter = router({
    getPages: publicProcedure
        .query(() => getPages()),
});
