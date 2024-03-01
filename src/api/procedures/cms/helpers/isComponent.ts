import type {PageContentItem, SharedBannerVideoComponent, SharedHeaderComponent} from 'src/types/strapi/generated.schemas.ts';

export function isSharedBannerVideo(component: PageContentItem){
    return (component as SharedBannerVideoComponent).__component === 'shared.banner-video';
}

export function isSharedHeader(component: PageContentItem){
    return (component as SharedHeaderComponent).__component === 'shared.header';
}

export function isSharedBannerCards(component: PageContentItem){
    return (component as SharedHeaderComponent).__component === 'shared.banner-cards';
}