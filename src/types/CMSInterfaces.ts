export type IPage = {
    title: string,
    components: (IBannerVideo|IPageTitle|IHeader)[]
}

export enum Components {
    BannerVideo = 'BannerVideo',
    PageTitle = 'PageTitle',
    Header = 'Header'
}

export type IHeader = {
    componentName: Components.Header,
    title: string,
    buttons: IButton[],
    image: Image
}

export type Image ={
    name: string,
    url: string
}

export type IButton = {
    title: string,
    url: string,
    description?: string,
    type: IButtonTypes,
    color: IButtonColors,
    image: Image
}

export enum IButtonColors {
    DEFAULT = 'default',
    MARKED = 'marked'
}

export enum IButtonTypes {
    CARD = 'card',
    TILE = 'tile',
    ICON = 'icon'
}

export type IBannerVideo = {
    componentName: Components.BannerVideo,
    title: string,
    description: string,
    url: string
}

export type IPageTitle = {
    componentName: Components.PageTitle,
    title: string
}