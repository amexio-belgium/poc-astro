import type { BannerVideoMapping } from "./bannerVideo.mapping.ts";
import type { BannerVideo } from "./bannerVideo.interface.ts";

export class BannerVideoModel implements BannerVideo {
    componentName = "bannerVideo";
    description: string;
    title: string;
    url: string;

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