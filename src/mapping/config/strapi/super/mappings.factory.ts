import type {MappingFactory} from "../../../abstract/mapping.factory.ts";
import {MappingList} from "../../../abstract/mapping.type.ts";
import {bannerVideoMappingFactory} from "../components/bannerVideo.mapping.factory.ts";
import {SuperMappingFactory} from "../../../abstract/mapping.factory.ts";


export class MappingsFactoryStrapi extends SuperMappingFactory {
    createFactory (factoryName: string): MappingFactory | undefined {
        switch (factoryName) {
            case MappingList.bannerVideo:
                return new  bannerVideoMappingFactory();
        }
    }
}