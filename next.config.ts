import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './src/theme.config.jsx',
    latex: true,
    search: {
        codeblocks: false,
    },
});

export default withNextra({
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
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
