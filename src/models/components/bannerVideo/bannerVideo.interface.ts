import type { Component } from "../../abstract/component.interface.ts";
import type { BannerVideoMapping } from "./bannerVideo.mapping.ts";

export interface BannerVideo extends BannerVideoMapping, Component {
    getVideoId(): string | null;
}