import type {ParagraphIframe} from 'src/types/drupal/resolvers-types.ts';
import {Components, type Iframe} from '@trpc-procedures/cms/types.ts';

export function createIframeDrupal(component: ParagraphIframe){
    console.log('return iframe')
    return {
        componentName: Components.Iframe,
        url: component.url.url
    } as Iframe
}