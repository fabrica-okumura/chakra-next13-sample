const Radio = {
  baseStyle: {
    container: {
      span: {
        // PC版Chrome、デバイス検証モードでタップの際"Unable to preventDefault inside passive event listener invocation."エラーが出るのを回避。
        pointerEvents: "none",
        fontSize:"sm"
      },
    },
    control: {
      _checked: {
        bg: "red.500",
        border: "none",
      },
      _focus: {
        boxShadow: "none",
      },
    },
  },
}

export default Radio
