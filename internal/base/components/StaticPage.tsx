import Head from "next/head"
import { ReactElement, ReactNode } from "react"
import { Inter } from "next/font/google"
import { Container, Grid } from "@mantine/core"
const inter = Inter({ subsets: ["latin"] })

export type StaticPageProps = {
  children: ReactNode
  title: string
}

export const StaticPage = ({ title, children }: StaticPageProps): ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="product list, product detail" />
        <meta name="description" content="Product App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Container my={20}>{children}</Container>
      </main>
    </>
  )
}
