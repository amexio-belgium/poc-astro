import type {PageContentItem} from "../../types/strapi/generated.schemas.ts";
import {ComponentsFactoryCreator} from "../../models/super/components.factory.ts";
import type {componentsConfig} from "./config.type.ts";

export function getComponentFromConfig(pageContentItem: PageContentItem, componentsConfigList: componentsConfig) {
    const component = componentsConfigList.components.find((component) =>
        component.name === pageContentItem.__component);

    if (!component) return;
    const superFactory = component.factory || componentsConfigList.defaultFactory;
    const mappingFactory = superFactory.createFactory(component.mapping);
    const mapping = mappingFactory?.createMapping(pageContentItem);

    if (!mapping) return;
    const superComponentFactory = new ComponentsFactoryCreator();
    const componentFactory = superComponentFactory.createFactory(component.component);
    return componentFactory?.createComponent(mapping);
}