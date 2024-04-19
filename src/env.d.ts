/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly STRAPI_URL: string;
    readonly DRUPAL_URL: string;
    readonly SANITY_DATASET: string;
    readonly SANITY_PROJECTID: string;
    readonly SANITY_APIVERSION: string;
    readonly SANITY_USECDN: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
}