import {ComponentsFactoryCreator} from "../../models/super/components.factory.ts";
import type {componentsConfig} from "./config.type.ts";
import type {ComponentTypeFactory} from 'src/mapping/abstract/componentType.factory.ts';

export function getComponentFromConfig(pageContentItem: any, componentsConfigList: componentsConfig, componentTypeCreator: ComponentTypeFactory) {
    
    const componentType = componentTypeCreator.createComponent(pageContentItem);

    const component = componentsConfigList.components.find((component) =>
        component.name === componentType.type);
    

    if (!component) return;
    const superFactory = component.factory || componentsConfigList.defaultFactory;
    const mappingFactory = superFactory.createFactory(component.mapping);
    const mapping = mappingFactory?.createMapping(pageContentItem);
    
    if (!mapping) return;
    const superComponentFactory = new ComponentsFactoryCreator();
    const componentFactory = superComponentFactory.createFactory(component.component);
    return componentFactory?.createComponent(mapping);
}