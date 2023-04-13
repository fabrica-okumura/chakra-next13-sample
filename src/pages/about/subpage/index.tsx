import Layout, { BreadcrumbItem } from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"

const pageTitle = "当社についてのサブページ"

const breadcrumbItems: BreadcrumbItem[] = [
  // Add other breadcrumb items if necessary
  { href: "/about/", label: "当社について" },
]

const Page = () => (
  <Layout
    breadcrumbItems={breadcrumbItems}
    currentPageLabel={pageTitle}
  >
    <NextSeo
      title={pageTitle}
      description="当社についてのサブページです。"
    />
    <PageTitle>{pageTitle}</PageTitle>
    <Box className="cw">
      <Box h="2000px" bg="gray.100">
        <Text>当社についてのサブページコンテンツ</Text>
      </Box>
    </Box>
  </Layout>
)

export default Page
