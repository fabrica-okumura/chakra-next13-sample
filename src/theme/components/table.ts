const Table = {
  variants: {
    simple: {
      table: {
        // stickyの際、borderが消えるためcollapse→separateに変更。
        borderCollapse: "separate",
        borderSpacing: "0",
        borderLeft: "1px",
        borderLeftColor: "gray.200",
        borderTop: "1px",
        borderTopColor: "gray.200",
      },
      th: {
        fontFamily: "inherit",
        letterSpacing: "normal",
        color: "inherit",
        bg: "gray.50",
        borderRight: "1px",
        borderRightColor: "gray.200",
        borderBottom: "1px",
        borderBottomColor: "gray.200",
        textTransform: "none"
      },
      td: {
        bg: "white",
        borderRight: "1px",
        borderRightColor: "gray.200",
        borderBottom: "1px",
        borderBottomColor: "gray.200",
      },
    },
  },
  sizes: {
    md: {
      th: {
        px: "2",
        py: "2.5",
        lineHeight: "1.4",
        fontSize: "xs",
      },
      td: {
        px: "2",
        py: "2.5",
        lineHeight: "1.4",
        fontSize: "xs",
      },
    },
  },
}

export default Table
