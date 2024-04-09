import {BannerVideoModel} from "../components/bannerVideo/bannerVideo.model.ts";
import type {BannerVideo} from "../components/bannerVideo/bannerVideo.interface.ts";

export enum ComponentsList {
     "BannerVideo"= "BannerVideo"
}

export type ComponentsListItem = keyof typeof ComponentsList;