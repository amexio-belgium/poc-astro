import {ComponentsList} from "../models/super/components.type.ts";
import type {componentsConfig} from "./abstract/config.type.ts";
import {MappingList} from "./abstract/mapping.type.ts";
import {MappingsFactoryStrapi} from "./config/strapi/super/mappings.factory.ts";

export const componentsConfigListNew: componentsConfig =  {
    'defaultFactory': new MappingsFactoryStrapi(),
    'components': [{
        'name': 'shared.banner-video',
        'component': ComponentsList.BannerVideo,
        'mapping': MappingList.BannerVideo,
    }]
}