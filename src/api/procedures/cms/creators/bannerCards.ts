import type {SharedBannerCardsComponent} from 'src/types/strapi/generated.schemas.ts';
import {type BannerCards, type Button, CMSType, Components} from '@trpc-procedures/cms/types.ts';
import {getButtonsFromReference, getButtonsFromTeaser} from '@trpc-procedures/cms/helpers/button.ts';
import type {ParagraphTeaser} from 'src/types/drupal/resolvers-types.ts';

export function createBannerCardsStrapi(component: SharedBannerCardsComponent) {
    let buttons: Button[] = [];
    if(component.teasers){
        buttons = getButtonsFromTeaser(component.teasers)
    }
    return {
        CMSType: CMSType.STRAPI,
        componentName: Components.BannerCards,
        cards: buttons
    } as BannerCards;
}


export function createBannerCardsDrupal(component: ParagraphTeaser) {
    let buttons: Button[] = [];
    if(component.reference){
        buttons = getButtonsFromReference(component.reference)
    }
    return {
        CMSType: CMSType.DRUPAL,
        componentName: Components.BannerCards,
        cards: buttons
    } as BannerCards;
}