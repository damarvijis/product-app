import "@mantine/core/styles.css"
import "@mantine/carousel/styles.css"
import React, { useEffect, useState } from "react"
import { addons } from "@storybook/preview-api"
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode"
import { MantineProvider, useMantineColorScheme } from "@mantine/core"
import { theme } from "../theme"
import { initialize, mswLoader } from "msw-storybook-addon"
import { Preview } from "@storybook/react/*"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const channel = addons.getChannel()

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme()
  const handleColorScheme = (value: boolean) => setColorScheme(value ? "dark" : "light")

  useEffect(() => {
    if (channel) {
      channel.on(DARK_MODE_EVENT_NAME, handleColorScheme)
      return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme)
    }
    return
  }, [channel])

  return <>{children}</>
}

initialize({
  onUnhandledRequest: "bypass",
})

const preview: Preview = {
  loaders: [mswLoader],
  decorators: [
    (renderStory: any) => {
      const [queryClient] = useState(() => new QueryClient())

      return (
        <MantineProvider theme={theme}>
          <ColorSchemeWrapper>
            <QueryClientProvider client={queryClient}>{renderStory()}</QueryClientProvider>
          </ColorSchemeWrapper>
        </MantineProvider>
      )
    },
  ],
}

export default preview
