import type {MappingFactory} from "../../../abstract/mapping.factory.ts";
import {MappingList} from "../../../abstract/mapping.type.ts";
import {bannerVideoMappingFactory} from "../components/bannerVideo.mapping.factory.ts";
import {SuperMappingFactory} from "../../../abstract/mapping.factory.ts";
import {banner5050MappingFactory} from "../components/banner5050.mapping.factory.ts";


export class MappingsFactoryStrapi extends SuperMappingFactory {
    createFactory (factoryName: MappingList): MappingFactory | undefined {
        // would it be possible to apply dynamic imports over here?
        // or is it better to make this tree-shakable?
        switch (factoryName) {
            case MappingList.Banner5050:
                return new  banner5050MappingFactory();
            case MappingList.BannerVideo:
                return new  bannerVideoMappingFactory();
        }
    }
}