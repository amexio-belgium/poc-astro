import {ComponentFactory} from "../../abstract/component.factory.ts";
import type {BannerVideoMapping} from "./bannerVideo.mapping.ts";
import type {BannerVideo} from "./bannerVideo.interface.ts";
import {BannerVideoModel} from "./bannerVideo.model.ts";

export class BannerVideoFactory extends ComponentFactory {
    public createComponent(mapping: BannerVideoMapping): BannerVideo {
        return new BannerVideoModel(mapping);
    }
}