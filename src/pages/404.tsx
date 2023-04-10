import Layout from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"

const Page = () => (
  <Layout>
    <NextSeo title="ページが見つかりません" description="" />
    <PageTitle>ページが見つかりません</PageTitle>
    <Box className="cw">
      <Text textAlign="center">
        申し訳ございません。
        <br />
        お探しのページは存在しないか、他のURLへと移転しています。
      </Text>
    </Box>
  </Layout>
)

export default Page
