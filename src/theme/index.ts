import { extendTheme } from "@chakra-ui/react"

// Global style overrides
import styles from "./styles"

// Foundational style overrides
import colors from "./foundations/colors"

// Component style overrides
import Button from "./components/button"
import Link from "./components/link"
import Tabs from "./components/tabs"
import Input from "./components/input"
import Select from "./components/select"
import Modal from "./components/modal"
import Checkbox from "./components/checkbox"
import Radio from "./components/radio"
import Divider from "./components/divider"
import Table from "./components/table"
import Switch from "./components/switch"

// Font loading
import { Noto_Sans_JP } from "next/font/google"
const notoSansJp = Noto_Sans_JP({
  //使用するweightを指定します。
  weight: ["500"],
  //fallbackフォントを指定します。
  fallback: ["sans-serif"],
  //サブセットが可能な場合指定します。
  //subsets: ["latin"],
  //サブセット化できないときはこの指定が必要です。
  preload: false,
  //font-displayを指定します。デフォルトはswapとなります。
  //display: "block"
})


const overrides = {
  styles,
  colors,
  fonts: {
    heading: notoSansJp.style.fontFamily,
    body: notoSansJp.style.fontFamily,
  },
  components: {
    Button,
    Link,
    Tabs,
    Input,
    Select,
    Modal,
    Checkbox,
    Radio,
    Divider,
    Table,
    Switch,
  },
}

export default extendTheme(overrides)
