import type { BannerVideoMapping } from "./bannerVideo.mapping.ts";
import type { BannerVideo } from "./bannerVideo.interface.ts";
import {ComponentsList} from "../../super/components.type.ts";

export class BannerVideoModel implements BannerVideo {
    componentName = ComponentsList.BannerVideo;
    description: string;
    title: string;
    url: string;

    // now a url can be provided, should it be possible (for other source maybe) to also provide just the id,
    // then generate the url from the id? (use constructor overloading?)
    // if it is possible to upload from multiple sources, the source type should be defined also, when provided an id only,
    // otherwise this might be derived from the url also and made sure to transform to an embed type of url
    constructor (bannerVideo: BannerVideoMapping) {
        this.description = bannerVideo.description;
        this.title = bannerVideo.title;
        this.url = bannerVideo.url;
    }

    getVideoId() {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = this.url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    }
}