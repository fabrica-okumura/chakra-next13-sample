import { Box, BoxProps } from "@chakra-ui/react"

const PageTitle = (props: BoxProps) => {
  return (
    <Box
      as="h1"
      fontSize={{ base: "2xl", lg: "4xl" }}
      fontWeight="bold"
      textAlign="center"
      lineHeight="1.4"
      mb={{ base: "5", lg: "7" }}
      {...props}
    ></Box>
  )
}

export default PageTitle
