import type {SharedHeaderComponent} from 'src/types/generated.schemas.ts';
import {getButtons} from '@trpc-procedures/cms/helpers/button.ts';
import {Components, type Header, type Image} from '@trpc-procedures/cms/types.ts';

export function createHeader(component: SharedHeaderComponent){
    const buttons = getButtons(component);
    return {
        componentName: Components.Header,
        title: component.title,
        buttons: buttons,
        image: {
            name: component.image?.data?.attributes?.name,
            url: component.image?.data?.attributes?.url
        } as Image
    } as Header;
}