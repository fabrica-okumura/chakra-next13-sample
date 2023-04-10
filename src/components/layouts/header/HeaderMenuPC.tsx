import { Box, List, ListItem } from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"

const HeaderMenuPC = () => {
  return (
    <Box as="nav" display="flex">
      <List display="flex" gap="7">
        <ListItem>
          <Link href="/about/">当社について</Link>
        </ListItem>
        <ListItem>
          <Link href="/contact/">お問い合わせ</Link>
        </ListItem>
        <ListItem>
          <Link href="https://nextjs.org/docs" target="_blank">Next.js13</Link>
        </ListItem>
        <ListItem>
          <Link href="https://chakra-ui.com/getting-started" target="_blank">Chakra UI</Link>
        </ListItem>
      </List>
    </Box>
  )
}

export default HeaderMenuPC
