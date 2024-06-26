import type { StorybookConfig } from "@storybook/nextjs"

const config: StorybookConfig = {
  stories: ["../internal/**/*.mdx", "../internal/**/*.(stories|story).@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
}

export default config
