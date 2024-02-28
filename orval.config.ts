import { defineConfig } from 'orval';

export default defineConfig({
    'app-name': {
        input: {
            target: 'swagger/documentation.json'
        },
        output: {
            mode: 'tags',
            target: 'src/types/generated.ts',
            override: {
                mutator: {
                    path: 'src/api/orval/custom-instance.ts',
                    name: 'customInstance',
                },
            },
        },
    },
})