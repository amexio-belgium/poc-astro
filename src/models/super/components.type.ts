export enum ComponentsList {
     "Banner5050" = "Banner5050",
     "BannerVideo" = "BannerVideo",
     "Button" = "Button",
     "BannerTiles" = "BannerTiles"
}

export type ComponentsListItem = keyof typeof ComponentsList;