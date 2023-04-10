import Layout from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"
import TextFontRaleway from "@/components/parts/textFontRaleway"

const Page = () => (
  <Layout>
    <NextSeo title="当社について" description="当社について説明します。" />
    <PageTitle>当社について</PageTitle>
    <Box className="cw">
      <Box h="2000px" bg="gray.100">
        <Text>コンテンツ</Text>
        <Text>
        <TextFontRaleway color="green" fontWeight="bold" fontStyle="italic">
          Whereas disregard and contempt for human rights have resulted
        </TextFontRaleway>
        </Text>
      </Box>
    </Box>
  </Layout>
)

export default Page
