const Tabs = {
  variants: {
    unstyled: {
      tablist: {
        borderBottom: "1px solid",
        borderColor: "gray.400",
        px: { base: "2", lg: "1" },
        position: "relative",
        _after: {
          content: `""`,
          w: "100%",
          h: "8px",
          bg: "linear-gradient(to bottom, rgba(51,51,51,0) 0%, rgba(51,51,51,0.05) 100%)",
          position: "absolute",
          left: "0",
          bottom: "0",
          zIndex: "1",
        },
      },
      tab: {
        border: "1px solid",
        borderColor: "gray.400",
        bg: "gray.50",
        width: { base: "50%", lg: "30%" },
        mx: "1",
        fontWeight: "bold",
        lineHeight: "1.2",
        paddingInlieStart: "5",
        px: "1",
        py: "3",
        position: "relative",
        mb: "-1px",
        cursor: "pointer",
        _focus: {
          boxShadow: "none",
        },
        _selected: {
          bg: "white",
          borderBottomColor: "white",
          zIndex: "3",
          cursor: "default",
          _after: {
            content: `""`,
            w: "calc(100% + 2px)",
            h: "3px",
            bg: "red.500",
            position: "absolute",
            top: "-1px",
          },
        },
      },
      tabpanel: {
        px: { base: "3", lg: "0" },
        py: "3",
      },
    },
  },
  sizes: {
    md: {
      tab: {
        fontSize: { base: "xs", lg: "sm" },
      },
    },
  },
  defaultProps: {
    variant: "unstyled",
  },
}

export default Tabs
