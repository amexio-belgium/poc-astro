/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly STRAPI_URL: string;
    readonly DRUPAL_URL: string;
    readonly BUILDER_API_PUBLIC_KEY: string;
    readonly BUILDER_BLOGPOST_MODEL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
}