import { Text, TextProps } from "@chakra-ui/react"
import Image from "next/image"
import Link from "@/components/parts/ChakraNextLink"

const HeaderLogo = (props: TextProps) => {
  return (
    <Text {...props}>
      <Link
        href="/"
        sx={{
          img: {
            w: { lg: "178px" },
            h: { lg: "47px" },
          },
        }}
      >
        <Image
          src="/images/common/logo.png"
          alt="LOGO Company"
          width={100}
          height={26}
          priority
        />
      </Link>
    </Text>
  )
}

export default HeaderLogo
