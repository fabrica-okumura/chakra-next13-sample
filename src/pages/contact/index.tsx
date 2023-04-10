import Layout from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"

const Page = () => (
  <Layout>
    <NextSeo
      title="お問い合わせ"
      description="お問い合わせはこちらからお願いします。"
    />
    <PageTitle>お問い合わせ</PageTitle>
    <Box className="cw">
      <Box h="2000px" bg="red.300">
        <Text>コンテンツ</Text>
      </Box>
    </Box>
  </Layout>
)

export default Page
