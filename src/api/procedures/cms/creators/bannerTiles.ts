import type {SharedBannerTilesComponent} from 'src/types/strapi/generated.schemas.ts';
import {
    type BannerTiles,
    type Button,
    Components
} from '@trpc-procedures/cms/types.ts';
import {getButtonsFromTeaser} from '@trpc-procedures/cms/helpers/button.ts';

export function createBannerTiles(component: SharedBannerTilesComponent) {
    let buttons: Button[] = [];
    if(component.teasers){
        buttons = getButtonsFromTeaser(component.teasers)
    }
    return {
        componentName: Components.BannerTiles,
        tiles: buttons
    } as BannerTiles;
}