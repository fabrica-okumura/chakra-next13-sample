import { ReactNode } from "react"
import Header from "@/components/layouts/header/Header"
import Footer from "@/components/layouts/footer/Footer"
import { Box } from "@chakra-ui/react"
import Breadcrumbs, { BreadcrumbItem } from "@/components/templates/Breadcrumbs"

export type { BreadcrumbItem }

interface LayoutProps {
  breadcrumbItems?: BreadcrumbItem[]
  currentPageLabel: string
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({
  children,
  breadcrumbItems,
  currentPageLabel,
}) => {
  return (
    <>
      <Header />
      <Box display={{ base: "none", lg: "block" }} className="cw">
        <Breadcrumbs
          items={breadcrumbItems || []}
          currentPageLabel={currentPageLabel}
        />
      </Box>
      <Box as="main">{children}</Box>
      <Box display={{ lg: "none" }}>
        <Breadcrumbs
          items={breadcrumbItems || []}
          currentPageLabel={currentPageLabel}
        />
      </Box>
      <Footer />
    </>
  )
}

export default Layout
