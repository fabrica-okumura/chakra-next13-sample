const Input = {
  variants: {
    default: {
      field: {
        bg: "gray.50",
        border: "1px solid",
        borderColor: "gray.400",
        borderRadius: "4px",
        fontSize: "sm",
      },
      icon:{
        w:"2rem",
        right:0,
        bg:"url('/images/icon/select_arrow.svg') no-repeat center",
        "> *":{
          display:"none",
        }

      }
    },
  },
  defaultProps: {
    variant: "default",
  },
}

export default Input
