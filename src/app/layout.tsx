import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import React from 'react';

import 'nextra-theme-docs/style.css';
import '../styles/global.css';

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        default: 'Fuse - Next-Gen Wallet',
        template: '%s | Fuse',
    },
    openGraph: {
        url: 'https://fusewallet.top',
        siteName: 'Fuse',
        locale: 'en_US',
        type: 'website',
    },
};

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const banner = <></>;
const navbar = (
    <Navbar
        logo={
            <div className="flex flex-row gap-2">
                <span className="_font-extrabold">FuseWallet</span>
                <span className="_ml-2 max-md:_hidden _font-normal _text-gray-600">Next-Gen Wallet</span>
            </div>
        }
        // ... Your additional navbar options
    />
);
const footer = <Footer>MIT {new Date().getFullYear()} © FuseWallet. All rights reserved.</Footer>;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    // const config = useConfig();
    // const title = `${config.normalizePagesResult.flatDocsDirectories.ti} - Fuse`;
    // const description = config.frontMatter.description || 'Fuse';
    // const image = config.frontMatter.image || '';

    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
            <Head
            // ... Your additional head options
            >
                {/* Your additional tags should be passed as `children` of `<Head>` element */}
            </Head>
            <body>
                <Layout
                    banner={banner}
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                    footer={footer}
                    // ... Your additional layout options
                >
                    {children}
                </Layout>
            </body>
        </html>
    );
}
