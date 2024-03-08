import type {SharedBannerFullComponent} from 'src/types/strapi/generated.schemas.ts';
import {Alignment, Components, type FullWidthBanner} from '@trpc-procedures/cms/types.ts';
import type {MediaImage, ParagraphBannerFull, ParagraphHeader} from 'src/types/drupal/resolvers-types.ts';


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

function getBannerFullAlignmentDrupal(alignment: string|undefined){

    switch(alignment?.toLowerCase()){
        case 'links' :{
            return Alignment.LEFT
        }
        case 'midden' :{
            return Alignment.CENTER
        }
        case 'rechts' :{
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

export function createBannerFullDrupal(sharedBannerFull: ParagraphBannerFull){
    console.log(sharedBannerFull);
    const image = sharedBannerFull.imagebannerfull as MediaImage;
    return {
        componentName: Components.FullWidthBanner,
        title: sharedBannerFull.title,
        description: sharedBannerFull.description,
        buttonText: sharedBannerFull.linkKnopTekst,
        link: sharedBannerFull.link?.url,
        image: image.mediaImage.url,
        alignment: getBannerFullAlignmentDrupal(sharedBannerFull.uitlijning!)
    } as FullWidthBanner
}