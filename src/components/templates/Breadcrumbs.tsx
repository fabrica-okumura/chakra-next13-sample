import React from "react"
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"
import { useRouter } from "next/router"

export interface BreadcrumbItem {
  href: string
  label: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  currentPageLabel: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  currentPageLabel,
}) => {
  const router = useRouter()
  const fixedItem = { href: "/", label: "Home" }

  return (
    <ChakraBreadcrumb
      bg="green.100"
      overflowX={{ base: "auto", lg: "initial" }}
      sx={{
        li: {
          whiteSpace: "nowrap",
          span: {
            "&[aria-current='page']": {
              cursor: "auto",
              _hover: {
                textDecoration: "none",
              },
            },
          },
        },
      }}
    >
      <BreadcrumbItem key={fixedItem.href}>
        <Link href={fixedItem.href}>{fixedItem.label}</Link>
      </BreadcrumbItem>
      {items.map((item) => (
        <BreadcrumbItem key={item.href}>
          <Link href={item.href}>{item.label}</Link>
        </BreadcrumbItem>
      ))}
      <BreadcrumbItem key={router.pathname} isCurrentPage>
        <BreadcrumbLink>{currentPageLabel}</BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  )
}

export default Breadcrumbs
