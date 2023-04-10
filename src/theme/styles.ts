const styles = {
  global: {
    ":root": {
      // windowからのデフォルト左右padding。20px相当。
      "--chakra-px": "1.2rem",
      // PCコンテンツ最大幅
      "--chakra-pc_maxw": "78.7rem",
      // オレンジグラデーション
      "--chakra-color_gradation":
        "linear-gradient(45deg, #FF7166 0%,#FF9933 100%)",
      // オレンジベタ塗り
      "--chakra-color_primary": "#FF7E10",
      // グレーは/theme/colors.tsにてgray.50,100,200,300,400まで設定中
      // グレーシャドウカラー
      "--chakra-shadow": "rgba(22,42,59,.14)",
      // イージング
      // 数値参考：https://ics.media/entry/18730/
      "--chakra-easein":
        "cubic-bezier(0.6, 0.04, 0.98, 0.335)" /* easeInCirc */,
      "--chakra-easeout":
        "cubic-bezier(0.075, 0.82, 0.165, 1)" /* easeOutCirc */,
      "--chakra-easeinout":
        "cubic-bezier(0.785, 0.135, 0.15, 0.86)" /* easeInOutCirc */,
      // セクションマージン 基準SP:80px,PC:150px
      "--chakra-section_margin_sp": "5rem",
      "--chakra-section_margin_pc": "9.5rem",
      // セクションマージン小
      // "--chakra-section_margin_sp_s": "5rem",
      "--chakra-section_margin_pc_s": "6.5rem",
    },
    body: {
      fontSize: "md",
      lineHeight: { base: "1.8", lg: "2" },
      color: "#333",
      overflowX: "hidden",
      // PCレイアウトでモーダルを開いたときmargin-rightが開いてしまうバグ対応。
      "&.mr0": {
        mr: "0px !important",
      },
      // SPメニュー表示時にスクロールを止める。firefox非対応。
      "&:has(.sp_menu_btn[aria-expanded=true])": {
        overflowY: { base: "hidden", lg: "auto" },
      },
    },
    ".cw": {
      px: "var(--chakra-px)",
      margin: "0 auto",
      // PCコンテンツ幅1220px相当。emはフォントサイズによりサイズが変わるので不可。
      maxWidth: { lg: "var(--chakra-pc_maxw)" },
    },
    ".w100": {
      // デフォルト左右paddingなしwindow100%のボックス
      w: "100vw",
      ml: {
        base: "calc(var(--chakra-px) * -1)",
        lg: "calc(((100vw - 100%)/2)*-1)",
      },
    },
    ".w100_only_sp": {
      // SPのみ、デフォルト左右paddingなしwindow100%のボックス
      mr: { base: "calc(var(--chakra-px) * -1)", lg: "0" },
      ml: { base: "calc(var(--chakra-px) * -1)", lg: "0" },
    },
    // show/hide
    ".show_only_sp": {
      display: { base: "inherit", lg: "none" },
    },
    ".show_only_pc": {
      display: { base: "none", lg: "inherit" },
    },
    // デフォルトセクションマージン
    ".section_mt": {
      mt: {
        base: "var(--chakra-section_margin_sp)",
        lg: "var(--chakra-section_margin_pc)",
      },
    },
    ".section_mb": {
      mb: {
        base: "var(--chakra-section_margin_sp)",
        lg: "var(--chakra-section_margin_pc)",
      },
    },
    ".center_only_pc": {
      textAlign: {
        lg: "center",
      },
    },
    ".bold": {
      fontWeight: "700",
    },
    ".exbold": {
      fontWeight: "900",
    },
    ".text_link": {
      color: "var(--chakra-color_primary) !important",
      position: "relative",
      _after: {
        content: `""`,
        w: "100%",
        h: "1px",
        bg: "var(--chakra-color_primary)",
        position: "absolute",
        left: "0",
        bottom: "0",
        transition: "opacity .3s var(--chakra-easeinout)",
      },
      _hover: {
        opacity: "1 !important",
        _after: {
          opacity: { lg: "0" },
        },
      },
    },
    ul: {
      listStyle: "none",
      margin: 0,
    },
    ".mb_xs": {
      mb: { base: "2", lg: "4" },
    },
    ".mb_sm": {
      mb: { base: "3", lg: "6" },
    },
    ".mb_md": {
      mb: { base: "6", lg: "12" },
    },
    ".mb_lg": {
      mb: { base: "8", lg: "16" },
    },
    ".mb_xl": {
      mb: { base: "10", lg: "20" },
    },
    ".mb_2xl": {
      mb: { base: "12", lg: "24" },
    },
  },
}

export default styles
