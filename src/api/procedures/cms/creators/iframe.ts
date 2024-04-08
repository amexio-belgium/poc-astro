import type {ParagraphIframe} from 'src/types/drupal/resolvers-types.ts';
import {Components, type Iframe} from '@trpc-procedures/cms/types.ts';

export function createIframeDrupal(component: ParagraphIframe){
    return {
        componentName: Components.Iframe,
        url: component.url.url
    } as Iframe
}