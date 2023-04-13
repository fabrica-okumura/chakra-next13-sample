import Layout, { BreadcrumbItem } from "@/components/Layout"
import { NextSeo } from "next-seo"
import { Box, Text } from "@chakra-ui/react"
import PageTitle from "@/components/parts/PageTitle"
import Link from "@/components/parts/ChakraNextLink"
import Section1 from "@/components/templates/about/Section1"

const pageTitle = "当社について"

const breadcrumbItems: BreadcrumbItem[] = [
  // Add other breadcrumb items if necessary
]

const Page = () => (
  <Layout breadcrumbItems={breadcrumbItems} currentPageLabel={pageTitle}>
    <NextSeo title={pageTitle} description="当社について説明します。" />
    <PageTitle>{pageTitle}</PageTitle>
    <Box className="cw">
      <Box h="2000px" bg="gray.100">
        <Text>当社についてのコンテンツ</Text>
        <Text>
          <Link href="/about/subpage/">当社についてのサブページへ</Link>
        </Text>
      </Box>
      <Section1 id="section1" />
    </Box>
  </Layout>
)

export default Page
