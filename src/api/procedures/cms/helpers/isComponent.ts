import type {
    PageContentItem,
    SharedBannerCardsComponent, SharedBannerFullComponent, SharedBannerTilesComponent,
    SharedBannerVideoComponent,
    SharedHeaderComponent, SharedTextComponent
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

export function isSharedBannerFull(component: PageContentItem){
    return (component as SharedBannerFullComponent).__component === 'shared.banner-full';
}

export function isSharedText(component: PageContentItem){
    return (component as SharedTextComponent).__component === 'shared.text';
}