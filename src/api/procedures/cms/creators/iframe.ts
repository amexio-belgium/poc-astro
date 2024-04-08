import type {ParagraphIframe} from 'src/types/drupal/resolvers-types.ts';
import type {Iframe} from '@trpc-procedures/cms/types.ts';

export function createIframeDrupal(component: ParagraphIframe){
    return {
        url: component.url.url
    } as Iframe
}