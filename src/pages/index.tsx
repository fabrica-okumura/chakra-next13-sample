import LayoutTopPage from "@/components/LayoutTopPage"
import { NextSeo } from "next-seo"
import Image from "next/image"
import { Box, Heading, Text } from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"
import TextFontRaleway from "@/components/parts/TextFontRaleway"

const Page = () => {
  return (
    <LayoutTopPage>
      <NextSeo
        description="Logo CompanyのWebサイトへようこそ。"
        openGraph={{
          type: "website",
        }}
      />
      <Heading as="h1">トップページです</Heading>
      <Box className="cw">
      <Text>
        Google fontsを読み込んで使用しています。サイト全体に日本語フォント（Noto Sans
        Japanese）を使用しています。
        <br />
        個別にフォントを使用する：英字フォント(Raleway)コンポーネントの使用例は以下です。
        <br />
        <TextFontRaleway color="red">
          Whereas disregard and contempt for human rights have resulted
        </TextFontRaleway>
        <br />
        <TextFontRaleway color="green" fontWeight="bold" fontSize="2xl">
          Whereas disregard and contempt for human rights have resulted
        </TextFontRaleway>
        <br />
        <Text as="span" fontWeight="bold">
          太字です。
        </Text>
      </Text>

      <Heading>next/image</Heading>
      <Text>
        next/imageで外部ドメインの画像を表示する場合はnext.config.jsにドメイン設定が必要です。<br />
        priorityを設定するとlazyloadしないようになります。
      </Text>

      <Box as="figure" mb="10">
        <Image
          src="https://www.renault.jp/images/banners/2021/2105_twg/2212_bnr_twingo_3200.jpg"
          alt="サンプル画像"
          width={600}
          height={340}
          style={{
            width: "100%",
          }}
          priority
        />
      </Box>

      <Box as="figure" mb="10">
        <Image
          src="/images/ogp.jpg"
          alt="OGP画像"
          width={600}
          height={340}
          style={{
            width: "100%",
          }}
        />
      </Box>

      <Text mb="20">
        <Link href="/message/" bg="purple.500" display="block" color="white">
          next/linkとChakra
          linkの両方の機能を合わせ持つリンクコンポーネントを作成しています。
        </Link>
      </Text>

      <Box h="1000px" bg="gray.100">
        <Text>コンテンツが続きます。</Text>
      </Box>
      </Box>


    </LayoutTopPage>
  )
}

export default Page
