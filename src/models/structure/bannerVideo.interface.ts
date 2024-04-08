import type { Component } from "./component.interface.ts";

export interface BannerVideo extends Component {
    description: string;
    title: string;
    url: string;

    getVideoId(): string | null;

}