import { Box } from "@chakra-ui/react"
import HeaderMenuSP from "@/components/layouts/header/HeaderMenuSP"
import HeaderMenuPC from "@/components/layouts/header/HeaderMenuPC"
import HeaderLogo from "@/components/parts/HeaderLogo"

const Header = () => {
  // 下層ページ用ヘッダー
  return (
    <Box
      as="header"
      h={{ base: "50px", lg: "80px" }}
      display="flex"
      alignItems="center"
      pl={{base:"3",lg:"5"}}
      pr={{lg:"5"}}
      bg={{ base: "blue.100", lg: "yellow.100" }}
    >
      <HeaderLogo mr="auto" />

      <Box display={{ base: "block", lg: "none" }}>
        <HeaderMenuSP />
      </Box>
      <Box display={{ base: "none", lg: "block" }}>
        <HeaderMenuPC />
      </Box>
    </Box>
  )
}

export default Header
