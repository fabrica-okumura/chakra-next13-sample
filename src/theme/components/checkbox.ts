const Checkbox = {
  baseStyle: {
    container: {
      span: {
        // PC版Chrome、デバイス検証モードでタップの際"Unable to preventDefault inside passive event listener invocation."エラーが出るのを回避。
        pointerEvents: "none",
        fontSize: ".8rem",
        fontWeight: "bold",
      },
    },
    control: {
      border: "1px solid",
      borderColor: "gray.400",
      bg: "white",
      _checked: {
        bg: "red.500",
        border: "none",
      },
      _focus: {
        boxShadow: "none",
      },
    },
    label: {},
  },
}

export default Checkbox
