import { Box } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"



type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja" prefix="og: https://ogp.me/ns#">
        <Head>
        </Head>
        <body className="mr0">
          <Box overflowX="hidden">
            <Main />
            <NextScript />
          </Box>
        </body>
      </Html>
    )
  }
}

export default Document