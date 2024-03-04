import type {
    PageContentItem,
    SharedBannerCardsComponent, SharedBannerTilesComponent,
    SharedBannerVideoComponent,
    SharedHeaderComponent
} from 'src/types/strapi/generated.schemas.ts';

export function isSharedBannerVideo(component: PageContentItem){
    return (component as SharedBannerVideoComponent).__component === 'shared.banner-video';
}

export function isSharedHeader(component: PageContentItem){
    return (component as SharedHeaderComponent).__component === 'shared.header';
}

export function isSharedBannerCards(component: PageContentItem){
    return (component as SharedBannerCardsComponent).__component === 'shared.banner-cards';
}

export function isSharedBannerTiles(component: PageContentItem){
    return (component as SharedBannerTilesComponent).__component === 'shared.banner-tiles';
}