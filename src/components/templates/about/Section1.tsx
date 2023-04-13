import { Box, BoxProps } from "@chakra-ui/react"

const Section1 = (props: BoxProps) => {
  return (
    <Box bg="yellow.200" h="1000px" {...props}>
      セクション1です。
    </Box>
  )
}

export default Section1
