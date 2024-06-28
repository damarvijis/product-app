import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../internal/**/*.mdx", "../internal/**/*.(stories|story).@(js|mjs|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-dark-mode",
    "@storybook/addon-styling-webpack",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
}

export default config
