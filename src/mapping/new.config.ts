import {ComponentsList} from "../models/super/components.type.ts";
import type {componentsConfig} from "./abstract/config.type.ts";
import {MappingList} from "./abstract/mapping.type.ts";
import {MappingsFactorySanity} from 'src/mapping/config/sanity/super/mappings.factory.ts';

export const componentsConfigListNew: componentsConfig =  {
    'defaultFactory': new MappingsFactorySanity(),
    'components': [{
        'name': 'bannerVideo',
        'component': ComponentsList.BannerVideo,
        'mapping': MappingList.BannerVideo,
    },
    {
        'name': 'fullWidthBanner',
        'component': ComponentsList.Banner5050,
        'mapping': MappingList.Banner5050,
    }]
}