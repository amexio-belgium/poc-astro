import {type Button, ButtonColors, ButtonTypes, type Image} from '@trpc-procedures/cms/types.ts';
import type {Page, PrivatePageRelationComponent, SharedHeaderComponent} from 'src/types/strapi/generated.schemas.ts';
import type {MediaImage, NodePage, ParagraphButton} from 'src/types/drupal/resolvers-types.ts';

export function getButtonType(type: string|undefined){
    switch (type){
        case 'card':
            return ButtonTypes.CARD
        case 'tile':
            return ButtonTypes.TILE
        case 'icon':
            return ButtonTypes.ICON
    }
    return null;
}

export function getButtonColor(type: string|undefined){
    switch (type?.toLowerCase()){
        case 'default':
            return ButtonColors.DEFAULT
        case 'highlight':
            return ButtonColors.HIGHLIGHT
    }
    return null;
}

export function getButtonsStrapi(component: SharedHeaderComponent){
    const buttons: Button[] = [];
    component.buttons?.forEach((button)=>{
        const buttonLinkPage = button.link?.data?.attributes as Page;
        buttons.push(
            {
                title: button.title,
                description: button.description,
                url: button.externalUrl ? button.externalUrl : buttonLinkPage.slug,
                image: {
                    name: button.image?.data?.attributes?.name,
                    url: import.meta.env.STRAPI_URL.concat(button.image?.data?.attributes?.url!)
                } as Image
            } as Button
        )
    })
    
    return buttons;
}

export function getButtonsDrupal(component: ParagraphButton[]){
    const buttons: Button[] = [];
    component.forEach((button)=>{
        const image = button.image as MediaImage;
        buttons.push(
            {
                title: button.title,
                description: button.description,
                url: button.link.url,
                image: {
                    name: image.name,
                    url: image.mediaImage.url,
                } as Image
            } as Button
        )
    })

    return buttons;
}

export function getButtonsFromTeaser(component: PrivatePageRelationComponent[]){
    const buttons: Button[] = [];
    component.forEach((teaser)=>{
        const teaserLinkPage = teaser.page?.data?.attributes as Page;
        buttons.push(
            {
                title: teaserLinkPage.title,
                description: teaserLinkPage.description,
                url: teaserLinkPage.slug,
                color: getButtonColor(teaser.Color),
                image: {
                    name: teaserLinkPage.teaserImage.data?.attributes?.name,
                    url: import.meta.env.STRAPI_URL.concat(teaserLinkPage.teaserImage.data?.attributes?.url!)
                } as Image
            } as Button
        )
    })

    return buttons;
}

export function getButtonsFromReference(component: NodePage[]){
    const buttons: Button[] = [];
    component.forEach((reference    )=>{
        const image = reference.mediaImage as MediaImage;
        buttons.push(
            {
                title: reference.title,
                description: reference.body?.value?.replace(/<\/?[^>]+(>|$)/g, ""),
                url: reference.path,
                image: {
                    name: image?.mediaImage?.title,
                    url: image?.mediaImage?.url
                } as Image
            } as Button
        )
    })

    return buttons;
}