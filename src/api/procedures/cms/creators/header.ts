import type {SharedHeaderComponent} from 'src/types/strapi/generated.schemas.ts';
import {getButtonsDrupal, getButtonsStrapi} from '@trpc-procedures/cms/helpers/button.ts';
import {
    Components,
    type DefaultHeader,
    type Header,
    type Image,
    type StrapiMenuResponse
} from '@trpc-procedures/cms/types.ts';
import type {MediaImage, ParagraphButton, ParagraphHeader} from 'src/types/drupal/resolvers-types.ts';
import axios from 'axios';
import {denormalize} from '@drupal/decoupled-menu-parser';
import type {Menu} from '@drupal/decoupled-menu-parser/dist/core/menu';

export function createHeaderStrapi(component: SharedHeaderComponent){
    const buttons = getButtonsStrapi(component);
    return {
        componentName: Components.Header,
        title: component.title,
        buttons: buttons,
        image: {
            name: component.image?.data?.attributes?.name,
            url: component.image?.data?.attributes?.url ?
                import.meta.env.STRAPI_URL.concat(<string>component.image?.data?.attributes?.url)
                :
                ''
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

export async function getHeaderDrupal(lang: string){
    let langPrefix = '';
    if(lang=='en') langPrefix = '/en';
    const menuResponse = await axios.get(`${import.meta.env.DRUPAL_URL}${langPrefix}/system/menu/main/linkset`)
    const menu = denormalize(menuResponse.data) as Menu[];
    return menu[0]
}

export async function getHeaderStrapi(lang: string){
    let id = 1;
    if(lang==='en'){
        id = 2;
    }
    const response = await axios.get(`${import.meta.env.STRAPI_URL}/api/menus/${id}?nested&populate=*`)
    const menu: StrapiMenuResponse = response.data;

    return menu;
}

export async function getHeaderStrapiFlat(lang: string){
    let id = 1;
    if(lang==='en'){
        id = 2;
    }
    const response = await axios.get(`${import.meta.env.STRAPI_URL}/api/menus/${id}?populate=*`)
    const menu: StrapiMenuResponse = response.data;

    return menu;
}