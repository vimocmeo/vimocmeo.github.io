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
    };
  },
};

export default config;
