import { Box, Image } from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"
import HeaderMenuSP from "@/components/layouts/header/HeaderMenuSP"
import HeaderMenuPC from "@/components/layouts/header/HeaderMenuPC"
import HeaderLogo from "@/components/parts/HeaderLogo"

const HeaderTopPage = () => {
  // トップページ用ヘッダー
  return (
    <Box
      as="header"
      h={{ base: "50px", lg: "80px" }}
      display="flex"
      alignItems="center"
      pl={{base:"3",lg:"5"}}
      pr={{lg:"5"}}
      bg={{ base: "green.200",md:"blue.200", lg: "red.200" }}
    >
      <HeaderLogo mr="auto" />
      {/* <Box
      bg="blue"
      >
        <Link href="/contact">
        トップaaaaaaaaaaa
        </Link>
      </Box> */}

      <Box display={{ base: "block", lg: "none" }}>
        <HeaderMenuSP />
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <HeaderMenuPC />
      </Box>
    </Box>
  )
}

export default HeaderTopPage
