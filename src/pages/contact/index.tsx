import Layout, { BreadcrumbItem } from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"

const pageTitle = "お問い合わせ"

const breadcrumbItems: BreadcrumbItem[] = [
  // Add other breadcrumb items if necessary
]

const Page = () => (
  <Layout breadcrumbItems={breadcrumbItems} currentPageLabel={pageTitle}>
    <NextSeo title={pageTitle} description="お問い合わせはこちらから。" />
    <PageTitle>{pageTitle}</PageTitle>
    <Box className="cw">
      <Box h="2000px" bg="green.100">
        <Text>フォームなど。</Text>
      </Box>
    </Box>
  </Layout>
)

export default Page
