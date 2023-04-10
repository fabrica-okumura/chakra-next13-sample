import React, { ReactNode } from "react"
import NextLink from "next/link"
import { Link, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface ChakraNextLinkProps extends ChakraLinkProps {
  href: any
  replace?: boolean
  children: ReactNode
  scroll?: boolean
  rel?: string
}

const ChakraNextLink: React.FC<ChakraNextLinkProps> = ({
  href,
  children,
  rel,
  ...props
}) => {
  return (
    <Link as={NextLink} href={href} rel={rel} {...props}>
      {children}
    </Link>
  )
}

export default ChakraNextLink
