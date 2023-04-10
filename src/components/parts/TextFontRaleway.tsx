import { Text, TextProps } from "@chakra-ui/react"
import { Raleway } from "next/font/google"

const raleway = Raleway({
  weight: ["500", "900"],
  fallback: ["sans-serif"],
  subsets: ["latin"]
})

const TextFontRaleway = (props: TextProps) => {
  return <Text as="span" fontFamily={raleway.style.fontFamily} {...props} />
}

export default TextFontRaleway
