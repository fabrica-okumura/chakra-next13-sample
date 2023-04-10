import { Box, List, ListItem } from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"
import LinktoPageTop from "@/components/layouts/footer/LinktoPageTop"

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        bg={{ base: "gray.200", md: "blue.200", lg: "red.200" }}
        pt={{ base: "12", lg: "16" }}
        pb={{ base: "9", lg: "16" }}
        px="10"
      >
        <List display="flex" flexDirection={{ base: "column",lg:"row" }} gap="3">
          <ListItem>
            <Link href="/">トップ</Link>
          </ListItem>
          <ListItem>
            <Link href="/about/">当社について</Link>
          </ListItem>
          <ListItem>
            <Link href="/contact/">お問い合わせ</Link>
          </ListItem>
        </List>
      </Box>
      <Box as="small" display="block" py="1.5" textAlign="center" fontSize="xs">
        <Box as="span" className="cw">
          © Logo Company Co., LTD.
        </Box>
      </Box>
      <Box position="fixed" zIndex="2" right="3%" bottom="20">
        <LinktoPageTop />
      </Box>
    </Box>
  )
}

export default Footer
