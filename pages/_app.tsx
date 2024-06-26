import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import type { AppProps } from "next/app"
import { theme } from "../theme"
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
        <ReactQueryDevtools />
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
