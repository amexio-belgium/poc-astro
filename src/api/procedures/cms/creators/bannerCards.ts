import type {SharedBannerCardsComponent} from 'src/types/strapi/generated.schemas.ts';
import {type BannerCards, type Button, Components} from '@trpc-procedures/cms/types.ts';
import {getButtonsFromTeaser} from '@trpc-procedures/cms/helpers/button.ts';

export function createBannerCards(component: SharedBannerCardsComponent) {
    let buttons: Button[] = [];
    if(component.teasers){
        buttons = getButtonsFromTeaser(component.teasers)
    }
    return {
        componentName: Components.BannerCards,
        cards: buttons
    } as BannerCards;
}