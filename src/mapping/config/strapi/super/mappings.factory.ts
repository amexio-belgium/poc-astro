import type {MappingFactory} from "../../../abstract/mapping.factory.ts";
import {MappingList} from "../../../abstract/mapping.type.ts";
import {bannerVideoMappingFactory} from "../components/bannerVideo.mapping.factory.ts";
import {SuperMappingFactory} from "../../../abstract/mapping.factory.ts";


export class MappingsFactoryStrapi extends SuperMappingFactory {
    createFactory (factoryName: MappingList): MappingFactory | undefined {
        // would it be possible to apply dynamic imports over here?
        // or is it better to make this tree-shakable?
        switch (factoryName) {
            case MappingList.BannerVideo:
                return new  bannerVideoMappingFactory();
        }
    }
}