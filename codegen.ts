import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: `${process.env.DRUPAL_URL}/graphql`,
    generates: {
        'src/types/drupal/resolvers-types.ts': { plugins: ['typescript'] },
    },
};

export default config;
