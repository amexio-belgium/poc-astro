import {BannerVideoModel} from "../components/bannerVideo/bannerVideo.model.ts";
import type {BannerVideo} from "../components/bannerVideo/bannerVideo.interface.ts";

export enum ComponentsList {
     "Banner5050" = "Banner5050",
     "BannerVideo" = "BannerVideo",
     "Button" = "Button"
}

export type ComponentsListItem = keyof typeof ComponentsList;

export type Components = BannerVideoModel;