import type {MappingFactory} from "../../../abstract/mapping.factory.ts";
import {MappingList} from "../../../abstract/mapping.type.ts";
import {SuperMappingFactory} from "../../../abstract/mapping.factory.ts";
import {bannerVideoMappingFactory} from 'src/mapping/config/sanity/components/bannerVideo.mapping.factory.ts';


export class MappingsFactorySanity extends SuperMappingFactory {
    createFactory (factoryName: MappingList): MappingFactory | undefined {

        // would it be possible to apply dynamic imports over here?
        // or is it better to make this tree-shakable?
        switch (factoryName) {
            // case MappingList.FullWidthBanner:
            //     return new  banner5050MappingFactory();
            case MappingList.BannerVideo:
                return new bannerVideoMappingFactory();
        }
        return undefined;
    }
}


