import {ComponentsList} from "../models/super/components.type.ts";
import type {componentsConfig} from "./abstract/config.type.ts";
import {MappingList} from "./abstract/mapping.type.ts";
import {MappingsFactoryStrapi} from "./config/strapi/super/mappings.factory.ts";
import type {PageContentItem} from "../types/strapi/generated.schemas.ts";

const componentsConfigList: componentsConfig =  {
    'defaultFactory': new MappingsFactoryStrapi(),
    'components': [{
        'shared.banner-video': {
            'component': ComponentsList.bannerVideo,
            'mapping': MappingList.bannerVideo,
        }
    }]
}

export function getComponentFromNewConfig(component: PageContentItem) {

}