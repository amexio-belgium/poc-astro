import type {SharedBanner5050Component, SharedButtonComponent} from 'src/types/strapi/generated.schemas.ts';
import {
    type Banner5050,
    type Button,
    Components,
} from '@trpc-procedures/cms/types.ts';

function getButton(button: SharedButtonComponent){
    console.log(button);
    return {
        title: button.title!,
        url: button.externalUrl!,
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
        buttons: [getButton(component.buttons![0]), getButton(component.buttons![1])]
    } as Banner5050;
}
