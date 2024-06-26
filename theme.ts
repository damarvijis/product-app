import { createTheme, rem } from "@mantine/core"

export const theme = createTheme({
  colors: {
    blue: [
      "#eef3ff",
      "#dce4f5",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
  },
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  primaryColor: "cyan",
  fontFamily: "Greycliff CF, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: {
    fontFamily: "Open Sans, sans-serif",
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
})
