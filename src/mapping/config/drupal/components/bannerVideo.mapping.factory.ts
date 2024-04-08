import type {BannerVideoMapping} from "../../../../models/components/bannerVideo/bannerVideo.mapping.ts";
import type {MediaRemoteVideo, ParagraphVideobanner} from "../../../../types/drupal/resolvers-types.ts";
import {MappingFactory} from "../../../abstract/mapping.factory.ts";

export class bannerVideoMappingFactory extends MappingFactory {
    createMapping(component: ParagraphVideobanner): BannerVideoMapping {
        return {
            description: component.beschrijving?.value || "",
            title: component.titel,
            url: (component.videoUrl as MediaRemoteVideo)?.mediaOembedVideo || ""
        }
    }
}