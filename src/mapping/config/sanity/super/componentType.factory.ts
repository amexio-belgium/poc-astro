
import type {Page} from 'src/types/sanity/sanity.types.ts';
import {type ComponentType, ComponentTypeFactory} from 'src/mapping/abstract/componentType.factory.ts';

export class ComponentTypeFactorySanity extends ComponentTypeFactory {
    createComponent(component: Page): ComponentType {
        return {type: component._type!};
    }
    
}