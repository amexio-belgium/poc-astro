import type {SharedBannerTilesComponent} from 'src/types/strapi/generated.schemas.ts';
import {type BannerTiles, type Button, CMSType, Components} from '@trpc-procedures/cms/types.ts';
import {getButtonsFromReference, getButtonsFromTeaser} from '@trpc-procedures/cms/helpers/button.ts';
import type {ParagraphTeaser} from 'src/types/drupal/resolvers-types.ts';

export function createBannerTilesStrapi(component: SharedBannerTilesComponent) {
    let buttons: Button[] = [];
    if(component.teasers){
        buttons = getButtonsFromTeaser(component.teasers)
    }
    return {
        CMSType: CMSType.STRAPI,
        componentName: Components.BannerTiles,
        tiles: buttons
    } as BannerTiles;
}

export function createBannerTilesDrupal(component: ParagraphTeaser) {
    let buttons: Button[] = [];
    if(component.reference){
        buttons = getButtonsFromReference(component.reference)
    }
    return {
        CMSType: CMSType.DRUPAL,
        componentName: Components.BannerTiles,
        tiles: buttons
    } as BannerTiles;
}