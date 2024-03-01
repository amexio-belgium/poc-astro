export type Page = {
    title: string,
    components: (BannerVideo|PageTitle|Header)[]
}

export enum Components {
    BannerVideo = 'BannerVideo',
    PageTitle = 'PageTitle',
    Header = 'Header'
}

export type Header = {
    componentName: Components.Header,
    title: string,
    buttons: Button[],
    image: Image
}

export type Image ={
    name: string,
    url: string
}

export type Button = {
    title: string,
    url: string,
    description?: string,
    type: ButtonTypes,
    color: ButtonColors,
    image: Image
}

export enum ButtonColors {
    DEFAULT = 'default',
    MARKED = 'marked'
}

export enum ButtonTypes {
    CARD = 'card',
    TILE = 'tile',
    ICON = 'icon'
}

export type BannerVideo = {
    componentName: Components.BannerVideo,
    title: string,
    description: string,
    url: string
}

export type PageTitle = {
    componentName: Components.PageTitle,
    title: string
}