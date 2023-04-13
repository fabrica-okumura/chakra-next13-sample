import { ChakraProvider } from "@chakra-ui/react"
import styles from "@/theme/index"
import { AppProps } from "next/app"
import { DefaultSeo } from "next-seo"
import Favicon from "@/components/Favicon"
import Head from "next/head"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

function App({ Component, pageProps }: AppProps): JSX.Element {

  // gtmIdを設定する。
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-*******" })
  }, [])

  const titletext = "LOGO Company"

  return (
    <ChakraProvider theme={styles}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Favicon />
      </Head>
      <DefaultSeo
        defaultTitle={titletext}
        titleTemplate="%s | LOGO Company"
        openGraph={{
          type: "article",
          title: titletext,
          site_name: titletext,
          url: "https://***サイトトップのURLをフルパスで記入",
          images: [
            {
              url: "/images/ogp.jpg",
              alt: titletext,
              type: "image/jpg",
            },
          ],
        }}
        twitter={{
          handle: "@***アカウントを記入",
          site: "@***アカウントを記入",
          cardType: "summary",
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
