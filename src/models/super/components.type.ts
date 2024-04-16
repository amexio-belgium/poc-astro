import type {BannerVideo} from "../components/bannerVideo/bannerVideo.interface.ts";
import type {Banner5050} from "../components/banner5050/banner5050.interface.ts";

export enum ComponentsList {
     "Banner5050" = "Banner5050",
     "BannerVideo" = "BannerVideo",
     "Button" = "Button"
}

export type ComponentsListItem = keyof typeof ComponentsList;