import type {SharedBannerFullComponent} from 'src/types/strapi/generated.schemas.ts';
import {Alignment, Components, type FullWidthBanner} from '@trpc-procedures/cms/types.ts';


function getBannerFullAlignmentStrapi(alignment: string|undefined){
    
    switch(alignment?.toLowerCase()){
        case 'left' :{
            return Alignment.LEFT
        }
        case 'center' :{
            return Alignment.CENTER
        }
        case 'right' :{
            return Alignment.RIGHT
        }
    }
    return Alignment.LEFT
}
export function createBannerFullStrapi(sharedBannerFull: SharedBannerFullComponent){
    return {
        componentName: Components.FullWidthBanner,
        title: sharedBannerFull.title,
        description: sharedBannerFull.description,
        buttonText: sharedBannerFull.buttonText,
        link: sharedBannerFull.link?.data !== null ? sharedBannerFull.link!.data!.attributes?.slug : sharedBannerFull.externalUrl,
        image: sharedBannerFull.image?.data?.attributes?.url,
        alignment: getBannerFullAlignmentStrapi(sharedBannerFull.alignment)
    } as FullWidthBanner
}