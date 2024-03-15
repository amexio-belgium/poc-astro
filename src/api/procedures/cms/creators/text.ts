import type {ParagraphText} from 'src/types/drupal/resolvers-types.ts';
import {Components, type Text} from 'src/api/procedures/cms/types.ts'
import type {SharedTextComponent} from 'src/types/strapi/generated.schemas.ts';

export function createTextStrapi(sharedTextComponent: SharedTextComponent){
    return {
        componentName: Components.Text,
        text: sharedTextComponent.text
    } as Text
}

export function createTextDrupal(paragraphText: ParagraphText){
    return {
        componentName: Components.Text,
        text: paragraphText.text?.value
    } as Text
}