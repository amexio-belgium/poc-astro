/// <reference types="astro/client" />
interface ImportMetaEnv {
    readonly STRAPI_URL: string;
    readonly DRUPAL_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

interface Window {
    Alpine: import('alpinejs').Alpine;
}