import Image from "next/image"
import { useConfig } from 'nextra-theme-docs'
export default {
    logo: <Image src="/meta_full.png" width={100} height={100} />,
    project: {
        link: "https://github.com/ravinthiranpartheepan1407/arkgan"
    },
    footer: {
        text: (
          <span className="text-center">
            ArkGan {new Date().getFullYear()} ©{' '}
            <a href="https://arkhamm.com" target="_blank">
              Arkhamm AI
            </a>
          </span>
        )
    },
    banner: {
        key: "ArkGan",
        text: "ArkGan - An Open Source GAN Toolkit",
    },
    chat: {
        link: "https://ArkGan.org",
    },
    docsRepositoryBase: "https://github.com/ravinthiranpartheepan1407/arkgan",
    faviconGlyph: "✦",
    useNextSeoProps() {
        const { frontMatter } = useConfig();
        return {
        additionalLinkTags: [
            {
            href: "/meta.png",
            rel: "apple-touch-icon",
            sizes: "180x180",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "192x192",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "96x96",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "32x32",
            type: "image/png",
            },
            {
            href: "/meta.png",
            rel: "icon",
            sizes: "16x16",
            type: "image/png",
            },
        ],
        additionalMetaTags: [
            { content: "en", httpEquiv: "Content-Language" },
            { content: "ArkGan", name: "apple-mobile-web-app-title" },
            { content: "#fff", name: "msapplication-TileColor" },
            { content: "/meta.png", name: "msapplication-TileImage" },
        ],
        description:
            frontMatter.description ||
            "ArkGan: An Open Source GAN Toolkit",
        openGraph: {
            images: [{ url: frontMatter.image || "/meta.png" }],
        },
        titleTemplate: "%s – ArkGan",
        twitter: {
            cardType: "summary_large_image",
            site: "https://docs.arkhamm.org",
        },
        };
    },
}