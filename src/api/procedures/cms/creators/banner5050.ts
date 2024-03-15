import type {SharedBanner5050Component, SharedButtonComponent} from 'src/types/strapi/generated.schemas.ts';
import {
    type Banner5050,
    type Button,
    Components,
} from '@trpc-procedures/cms/types.ts';
import type {MediaImage, ParagraphBanner5050, ParagraphButton} from 'src/types/drupal/resolvers-types.ts';

function getButtonStrapi(button: SharedButtonComponent){
    return {
        title: button.title!,
        url: button.link?.data !== null ? button.link!.data!.attributes?.slug : button.externalUrl,
        description: button.description,
        image: {
            name: button.image?.data?.attributes?.name!,
            url: import.meta.env.STRAPI_URL.concat(button.image?.data?.attributes?.url!)
        },
        buttonText: button.buttonText
    } as Button
}

export function createBanner5050Strapi(component: SharedBanner5050Component) {
    return {
        componentName: Components.Banner5050,
        buttons: [getButtonStrapi(component.buttons![0]), getButtonStrapi(component.buttons![1])]
    } as Banner5050;
}

function getButtonDrupal(paragraphButton: ParagraphButton){
    const image = paragraphButton.image as MediaImage;
    const button = {
        title: paragraphButton.title!,
        url: paragraphButton.link.url!,
        description: paragraphButton.description?.value,
        buttonText: paragraphButton.buttonText
    } as Button
    if(image){
        button.image = {
            name: image.mediaImage.title!,
            url: image.mediaImage.url!,
        }
    }
    return button;
}

export function createBanner5050Drupal(component: ParagraphBanner5050) {
    return {
        componentName: Components.Banner5050,
        buttons: [getButtonDrupal(component.buttons[0] as ParagraphButton), getButtonDrupal(component.buttons[1] as ParagraphButton)]
    } as Banner5050;
}