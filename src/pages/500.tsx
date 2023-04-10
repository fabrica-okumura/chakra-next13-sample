import Layout from "@/components/Layout"
import { NextSeo } from "next-seo"
import PageTitle from "@/components/parts/PageTitle"
import { Box, Text } from "@chakra-ui/react"

const Page = () => (
  <Layout>
    <NextSeo title="サーバーエラー" description="" />
    <PageTitle>サーバーエラー</PageTitle>

    <Box className="cw">
      <Text textAlign="center">
        サーバーエラーのため、アクセスしようとしたページは表示できませんでした。
      </Text>
    </Box>
  </Layout>
)

export default Page
