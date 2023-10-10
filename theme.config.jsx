import { useConfig } from "nextra-theme-docs";

export default {
  logo: ({ locale }) => (
    <>
      <span className="mr-2 hidden font-extrabold md:inline">Vertez</span>
      <span className="hidden font-normal text-gray-600 md:inline">
        &nbsp;-&nbsp;Statify. Infer. Distribute
      </span>
    </>
  ),
  footer: true,
  themeSwitch: false,
  footerText: ({ locale }) => (
    <>Vertez ${new Date().getFullYear()} © Arkhamm AI.</>
  ),
  banner: {
    key: "Vertez",
    text: "Vertez - An Open Source Data Science Framework",
  },
  chat: {
    link: "https://Vertez.org",
  },
  docsRepositoryBase: "https://github.com/ravinthiranpartheepan1407/Vertez",
  faviconGlyph: "✦",
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      additionalLinkTags: [
        {
          href: "/logo.png",
          rel: "apple-touch-icon",
          sizes: "180x180",
        },
        {
          href: "/logo.png",
          rel: "icon",
          sizes: "192x192",
          type: "image/png",
        },
        {
          href: "/logo.png",
          rel: "icon",
          sizes: "96x96",
          type: "image/png",
        },
        {
          href: "/logo.png",
          rel: "icon",
          sizes: "32x32",
          type: "image/png",
        },
        {
          href: "/logo.png",
          rel: "icon",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      additionalMetaTags: [
        { content: "en", httpEquiv: "Content-Language" },
        { content: "Vertez", name: "apple-mobile-web-app-title" },
        { content: "#fff", name: "msapplication-TileColor" },
        { content: "/ms-icon-144x144.png", name: "msapplication-TileImage" },
      ],
      description:
        frontMatter.description ||
        "Vertez: An Open Source Data Science Framework",
      openGraph: {
        images: [{ url: frontMatter.image || "/logo.png" }],
      },
      titleTemplate: "%s – Vertez",
      twitter: {
        cardType: "summary_large_image",
        site: "https://Vertez.org",
      },
    };
  },
};
