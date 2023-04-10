const Modal = {
  baseStyle: {
    dialog: {
      borderRadius: 0,
      // PCChromeでモーダル内radioをタップした際にモーダルのposition(top)が変わってしまうバグ対応。
      position:"fixed",
      // モバイルlandscapeでFullにする対応。myとminHeight設定。
      my: 0,
      minHeight: "-webkit-fill-available",
      "@media screen and (min-width: 62em)":{
        borderRadius: ".75rem",
        minHeight: "auto",
      }
    },
    header: {
      px: { base: "2.5", lg: "7" },
      py: { base: "2.5", lg: "3" },
      fontSize: { base: "md", lg: "xl" },
      textAlign: "center",
      borderRadius: { base: "0", lg: ".75rem .75rem 0 0" },
      bg: { base: "gray.50", lg: "red.200" },
      boxShadow: { base: "0 0 3px rgba(0,0,0,.3)", lg: "none" },
    },
    closeButton: {
      color:"gray.600",
      top: { base: "2", lg: "3" },
      insetEnd: 2,
      _hover: {
        bg: "none",
        opacity: ".6",
      },
      _focus: {
        boxShadow: "none",
        bg: "transparent"
      },
      svg: {
        w: "1.4em",
        h: "1.4em",
      },
    },
    body: {
      px: { base: "3", lg: "6" },
      py: { base: "4", lg: "5" },
    },
  },
}

export default Modal
