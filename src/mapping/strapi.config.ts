/* import {
    SharedBanner5050Component,
    SharedBannerCardsComponent, SharedBannerFullComponent, SharedBannerTilesComponent,
    SharedBannerVideoComponent,
    SharedHeaderComponent, SharedTextComponent
} from "../types/strapi/generated.schemas.ts";
import {createBannerVideoStrapi} from "@trpc-procedures/cms/creators/bannerVideo.ts";
import {createHeaderStrapi} from "@trpc-procedures/cms/creators/header.ts";
import {createBannerCardsStrapi} from "@trpc-procedures/cms/creators/bannerCards.ts";
import {createBannerTilesStrapi} from "@trpc-procedures/cms/creators/bannerTiles.ts";
import {createBannerFullStrapi} from "@trpc-procedures/cms/creators/bannerFull.ts";
import {createTextStrapi} from "@trpc-procedures/cms/creators/text.ts";
import {createBanner5050Strapi} from "@trpc-procedures/cms/creators/banner5050.ts";
import {createJob} from "@trpc-procedures/cms/creators/job.ts";


export function getComponentFromStringStrapi(pageContentItem: PageContentItem){
    const component = componentMapStrapi.find(
        (component) => component.key === pageContentItem.__component
    );
    if(component) return component.function(pageContentItem);
}

const componentMapStrapi: {key: string, function: ComponentMapStrapiFunction}[] = [
    {
        key: 'shared.banner-video',
        function: (component: SharedBannerVideoComponent) => createBannerVideoStrapi(component)
    },
    {
        key: 'shared.header',
        function: (component: SharedHeaderComponent) => createHeaderStrapi(component)
    },
    {
        key: 'shared.banner-cards',
        function: (component: SharedBannerCardsComponent) => createBannerCardsStrapi(component)
    },
    {
        key: 'shared.banner-tiles',
        function: (component: SharedBannerTilesComponent) => createBannerTilesStrapi(component)
    },
    {
        key: 'shared.banner-full',
        function: (component: SharedBannerFullComponent) => createBannerFullStrapi(component)
    },
    {
        key: 'shared.text',
        function: (component: SharedTextComponent) => createTextStrapi(component)
    },
    {
        key: 'shared.banner-5050',
        function: (component: SharedBanner5050Component) => createBanner5050Strapi(component)
    },
    {
        key: 'shared.jobs',
        function: () => createJob()
    }

]

*/