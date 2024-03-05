import { defineConfig } from 'orval';

export default defineConfig({
    'strapi': {
        input: {
            target: 'schemas/strapi.json'
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
    }
})