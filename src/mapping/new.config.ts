import {ComponentsList} from "../models/super/components.type.ts";
import type {componentsConfig} from "./abstract/config.type.ts";
import {MappingList} from "./abstract/mapping.type.ts";
import {MappingsFactoryStrapi} from "./config/strapi/super/mappings.factory.ts";
import type {PageContentItem} from "../types/strapi/generated.schemas.ts";
import {ComponentsFactoryCreator} from "../models/super/components.factory.ts";

const componentsConfigList: componentsConfig =  {
    'defaultFactory': new MappingsFactoryStrapi(),
    'components': [{
        'name': 'shared.banner-video',
        'component': ComponentsList.bannerVideo,
        'mapping': MappingList.bannerVideo,
    }]
}

export function getComponentFromNewConfig(pageContentItem: PageContentItem) {
    const component = componentsConfigList.components.find((component) =>
        component.name === pageContentItem.__component);
    if (!component) return;
    console.log('component', component);
    const superFactory = component.factory || componentsConfigList.defaultFactory;
    const mappingFactory = superFactory.createFactory(component.mapping);
    const mapping = mappingFactory?.createMapping(pageContentItem);

    if (!mapping) return;
    const superComponentFactory = new ComponentsFactoryCreator();
    const componentFactory = superComponentFactory.createFactory(component.component);
    const resultComponent = componentFactory?.createComponent(mapping);

    console.log('resultComponent', resultComponent);

    //console.log('mapping', mapping);
    // component.mapping()
    // component.component()

}