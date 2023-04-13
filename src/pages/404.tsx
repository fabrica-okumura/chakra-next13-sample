import Layout, { BreadcrumbItem } from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"

const pageTitle = "ページが見つかりません"

const breadcrumbItems: BreadcrumbItem[] = [
  // Add other breadcrumb items if necessary
]

const Page = () => (
  <Layout
    breadcrumbItems={breadcrumbItems}
    currentPageLabel={pageTitle}
  >
    <NextSeo title={pageTitle} description="" />
    <PageTitle>{pageTitle}</PageTitle>
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
