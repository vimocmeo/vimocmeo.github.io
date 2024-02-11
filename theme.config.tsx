import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Minh Mốc Meo</span>,
  project: {
    link: "https://github.com/minhxuvi/minhxuvi.github.io",
  },
  docsRepositoryBase:
    "https://github.com/minhxuvi/minhxuvi.github.io/tree/main",
  footer: {
    text: "Minh Mốc Meo",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – MocMeo",
      canonical: "https://minh.xuvi.vn/",
      twitter: {
        cardType: "summary_large_image",
        site: "@minhxuvi",
        handle: "@minhxuvi",
      },
    };
  },
  head: (
    <>
      <html lang="vi"></html>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta http-equiv="Content-Language" content="vi" />
      <meta
        name="description"
        content="Minh Mốc Meo: Father, Engineer, Wanderer"
      />
      <meta property="og:title" content="Minh Mốc Meo" />
      <meta property="og:description" content="Father, Engineer, Wanderer" />
      <meta name="apple-mobile-web-app-title" content="Mốc Meo" />
    </>
  ),
};

export default config;
