import nextra from 'nextra';

const withNextra = nextra({
    latex: true,
    search: {
        codeblocks: false,
    },
});

export default withNextra({
    reactStrictMode: true,
    experimental: {
        turbo: {
            // Example: adding an alias and custom file extension
            resolveAlias: {
                underscore: 'lodash',
            },
            resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.json'],
        },
    },
});
