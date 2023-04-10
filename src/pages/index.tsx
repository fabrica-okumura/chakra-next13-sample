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
        <Box as="section" mb="20">
          <Heading>next/imageのサンプル</Heading>
          <Text>
            next/imageで外部ドメインの画像を表示する場合はnext.config.jsにドメイン設定が必要です。
            <br />
            priorityを設定するとlazyloadしないようになります。
          </Text>
          <Heading as="h3">外部ドメイン画像の例</Heading>
          <Box as="figure" mb="10">
            <Image
              src="https://as1.ftcdn.net/v2/jpg/03/86/65/00/1000_F_386650005_tVHRvZlWgUaeZWmuH9FjRxcvo5gS6SWp.jpg"
              alt="外部ドメインの画像"
              width={600}
              height={340}
              style={{
                width: "100%",
              }}
              priority
            />
          </Box>
          <Heading as="h3">通常の画像の例</Heading>
          <Box as="figure">
            <Image
              src="/images/sample.webp"
              alt="通常の画像"
              width={600}
              height={340}
              style={{
                width: "100%",
              }}
            />
          </Box>
        </Box>

        <Box as="section" mb="20">
          <Heading>next/linkのサンプル</Heading>
          <Text mb="10">
            <Link href="/about/" bg="purple.500" display="block" color="white">
              next/linkとChakra
              linkの両方の機能を合わせ持つリンクコンポーネントを作成しています。
            </Link>
          </Text>
          <Text>
            <Link
              href="https://dubdesign.net/web/marketing/rel-effect/"
              bg="blue.500"
              display="inline-block"
              color="white"
              target="_blank"
              rel="nofollow"
              sx={{
                span: {
                  fontWeight: "bold",
                  color: "red",
                },
              }}
            >
              target属性やrel属性も設定<span>できます</span>。
            </Link>
          </Text>
        </Box>

        <Box as="section" mb="20">
          <Heading>next/fontのサンプル</Heading>
          <Text>
            このサイトではGoogle
            fontsを読み込んで使用しています。サイト全体に日本語フォント（Noto
            Sans Japanese）を使用しています。
            <br />
            個別にフォントを使用する例：英字フォント(Raleway)コンポーネントの使用例は以下です。
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
        </Box>

        <Box h="1000px" bg="gray.100">
          <Text>コンテンツが続きます。</Text>
        </Box>
      </Box>
    </LayoutTopPage>
  )
}

export default Page
