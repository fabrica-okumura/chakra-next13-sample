import { useDisclosure, Box, List, ListItem } from "@chakra-ui/react"
import Link from "@/components/parts/ChakraNextLink"

function HeaderMenuSP() {
  const { getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()

  return (
    <>
      <Box
        {...buttonProps}
        className="sp_menu_btn"
        display="grid"
        placeContent="center"
        zIndex="2"
        w="50px"
        h="50px"
      >
        <Box
          position="relative"
          w="22px"
          h="16px"
          sx={{
            "& > div": {
              w: "22px",
              h: "2px",
              bg: "gray.400",
              borderRadius: "99rem",
              position: "absolute",
              left: "0",
              transition: "all .2s ease-in",
              "&:nth-of-type(1)": {
                top: "0",
              },
              "&:nth-of-type(2)": {
                top: "calc(50% - 1px)",
              },
              "&:nth-of-type(3)": {
                bottom: "0",
              },
              // タップ時のボーダーアニメーション
              "[aria-expanded=true] &:nth-of-type(1)": {
                w: "28px",
                transform: "translateX(-3px) translateY(7px) rotate(-45deg)",
              },
              "[aria-expanded=true] &:nth-of-type(2)": {
                left: "50%",
                opacity: "0",
              },
              "[aria-expanded=true] &:nth-of-type(3)": {
                w: "28px",
                transform: "translateX(-3px) translateY(-7px) rotate(-135deg)",
              },
            },
          }}
        >
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
      <Box
        position="fixed"
        left="0"
        top="50px"
        zIndex="999"
        w="100%"
        // メニュー初期状態
        h="0"
        overflow="hidden"
        bg="#fff"
        transition="height .2s ease-in-out"
        sx={{
          // ボタンをタップしたとき
          "[aria-expanded=true] + &": {
            h: "calc(100vh - 50px)",
            overflow: "auto",
            li: {
              opacity: "1",
            },
          },
        }}
      >
        <Box as="nav">
          <List
            mb="6"
            sx={{
              li: {
                borderBottom: "1px solid",
                borderBottomColor: "gray.50",
                opacity: "0",
                a: {
                  display: "flex",
                  alignItems: "center",
                  px: "6%",
                  py: "3",
                  fontWeight: "bold",
                  position: "relative",
                  overflow: "hidden",
                },
              },
            }}
          >
            <ListItem>
              <Link href="/" {...buttonProps}>
                トップ
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about/" {...buttonProps}>
                当社について
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact/" {...buttonProps}>
                お問い合わせ
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default HeaderMenuSP
