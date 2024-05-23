import type {SharedBannerVideoComponent} from "../../../../types/strapi/generated.schemas.ts";
import type {BannerVideoMapping} from "../../../../models/components/bannerVideo/bannerVideo.mapping.ts";
import {MappingFactory} from "../../../abstract/mapping.factory.ts";

export class bannerVideoMappingFactory extends MappingFactory {
    createMapping(component: SharedBannerVideoComponent): BannerVideoMapping {
        return {
            title: component.title || "",
            description: component.description || "",
            url: component.videoUrl || ""
        }
    }
}