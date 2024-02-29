import { defineConfig } from 'orval';

export default defineConfig({
    'strapi': {
        input: {
            target: 'swagger/strapi.json'
        },
        output: {
            mode: 'tags',
            target: 'src/types/strapi/generated.ts',
            override: {
                mutator: {
                    path: 'src/api/orval/strapi-instance.ts',
                    name: 'strapiInstance',
                },
            },
        },
    },
    'drupal': {
        input: {
            target: 'swagger/drupal.json'
        },
        output: {
            mode: 'tags',
            target: 'src/types/drupal/generated.ts',
            override: {
                mutator: {
                    path: 'src/api/orval/drupal-instance.ts',
                    name: 'drupalInstance',
                },
            },
        },
    },
})