import type {componentsConfig} from 'src/mapping/abstract/config.type.ts';
import {ComponentsList} from 'src/models/super/components.type.ts';
import {MappingList} from 'src/mapping/abstract/mapping.type.ts';
import {MappingsFactorySanity} from 'src/mapping/config/sanity/super/mappings.factory.ts';

export const componentsConfigSanity: componentsConfig =  {
    'defaultFactory': new MappingsFactorySanity(),
    'components': [
        {
        'name': 'bannerVideo',
        'component': ComponentsList.BannerVideo,
        'mapping': MappingList.BannerVideo,
        },
    ]
}