import { useConfig } from 'nextra-theme-docs';

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
    banner: {
        content: '',
    },
    footer: {
        content: 'FuseWallet Inc. All rights reserved.',
    },
    feedback: null,
    toc: false,
    editLink: null,
    logo: (
        <>
            <span className="_font-extrabold">FuseWallet</span>
            <span className="_ml-2 max-md:_hidden _font-normal _text-gray-600">Next-Gen Wallet</span>
        </>
    ),
    head: function useHead() {
        const config = useConfig();
        const title = `${config.title} - Fuse`;
        const description = config.frontMatter.description || 'Fuse';
        const image = config.frontMatter.image || '';

        return (
            <>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta name="description" content={description} />
                <meta property="og:description" content={description} />
                <meta name="og:image" content={image} />

                <meta name="msapplication-TileColor" content="#fff" />
                <meta httpEquiv="Content-Language" content="en" />
            </>
        );
    },
};
