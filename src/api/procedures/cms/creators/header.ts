import type {SharedHeaderComponent} from 'src/types/strapi/generated.schemas.ts';
import {getButtonsDrupal, getButtonsStrapi} from '@trpc-procedures/cms/helpers/button.ts';
import {Components, type DefaultHeader, type Header, type Image} from '@trpc-procedures/cms/types.ts';
import type {MediaImage, ParagraphButton, ParagraphHeader} from 'src/types/drupal/resolvers-types.ts';

export function createHeaderStrapi(component: SharedHeaderComponent){
    const buttons = getButtonsStrapi(component);
    return {
        componentName: Components.Header,
        title: component.title,
        buttons: buttons,
        image: {
            name: component.image?.data?.attributes?.name,
            url: import.meta.env.STRAPI_URL.concat(component.image?.data?.attributes?.url!)
        } as Image
    } as Header;
}

export function createHeaderDrupal(component: ParagraphHeader){
    const buttonsDrupal = component.knoppen as ParagraphButton[]
    const buttons = getButtonsDrupal(buttonsDrupal);

    const image = component.image as MediaImage;
    return {
        componentName: Components.Header,
        title: component.title,
        buttons: buttons,
        image: {
            name: 'test',
            url: image.mediaImage.url
        } as Image
    } as Header;
}

export function createDefaultHeader(title: string, description: string|undefined|null){
    return {
        componentName: Components.DefaultHeader,
        title: title,
        description: description ? description : ''
    } as DefaultHeader;
}