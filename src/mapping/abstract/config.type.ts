import {ComponentsList} from "../../models/super/components.type.ts";
import type {MappingList} from "./mapping.type.ts";
import type {SuperMappingFactory} from "./mapping.factory.ts";

export type componentsConfig = {
    'defaultFactory': SuperMappingFactory,
    'components': [{
        'name': string,
        'component': ComponentsList,
        'mapping': MappingList,
        'factory'?: SuperMappingFactory
    }]
}