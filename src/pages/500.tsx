import Layout, { BreadcrumbItem } from "@/components/Layout"
import { NextSeo } from "next-seo"
import PageTitle from "@/components/parts/PageTitle"
import { Box, Text } from "@chakra-ui/react"

const pageTitle = "サーバーエラー"

const breadcrumbItems: BreadcrumbItem[] = [
  // Add other breadcrumb items if necessary
]

const Page = () => (
  <Layout breadcrumbItems={breadcrumbItems} currentPageLabel={pageTitle}>
    <NextSeo title={pageTitle} description="" />
    <PageTitle>{pageTitle}</PageTitle>

    <Box className="cw">
      <Text textAlign="center">
        サーバーエラーのため、アクセスしようとしたページは表示できませんでした。
      </Text>
    </Box>
  </Layout>
)

export default Page
