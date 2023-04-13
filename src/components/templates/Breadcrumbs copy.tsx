// components/Breadcrumbs.tsx
import React from "react";
import {
  Box,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  currentPageLabel: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, currentPageLabel }) => {
  const router = useRouter();
  const fixedItem = { href: "/", label: "Home" };

  return (
    <Box>
      <ChakraBreadcrumb>
        <BreadcrumbItem key={fixedItem.href}>
          <Link href={fixedItem.href} passHref legacyBehavior>
            <BreadcrumbLink>{fixedItem.label}</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        {items.map((item) => (
          <BreadcrumbItem key={item.href}>
            <Link href={item.href} passHref legacyBehavior>
              <BreadcrumbLink>{item.label}</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>
        ))}
        <BreadcrumbItem key={router.pathname} isCurrentPage>
          <BreadcrumbLink>{currentPageLabel}</BreadcrumbLink>
        </BreadcrumbItem>
      </ChakraBreadcrumb>
    </Box>
  );
};

export default Breadcrumbs;

