import { ReactNode } from "react"
import HeaderTopPage from "@/components/layouts/header/HeaderTopPage"
import Footer from "@/components/layouts/footer/Footer"
import { Box } from "@chakra-ui/react"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <HeaderTopPage />
      <Box as="main">
        {/* パンくずある場合ここに設定 */}
        {children}
      </Box>
      <Footer />
    </>
  )
}

export default Layout
