import {Components, type BannerVideo} from '@trpc-procedures/cms/types.ts';
import type {SharedBannerVideoComponent} from 'src/types/strapi/generated.schemas.ts';

export function createBannerVideo(component: SharedBannerVideoComponent) {
    return {
        componentName: Components.BannerVideo,
        title: component.title,
        description: component.description,
        url: component.videoUrl
    } as BannerVideo;
}