import { Box, Image } from "@chakra-ui/react"
// import { Link as Scroll } from "react-scroll"
import { useEffect, useState } from "react"

const LinktoPageTop = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow)
    return () => {
      window.removeEventListener("scroll", scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 3000
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: "0.3s",
    pointerEvents: "none",
  }
  const activeStyle = {
    opacity: 1,
    transition: "0.3s",
  }

  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <Box
      sx={{
        transition: "opacity .3s var(--chakra-easein)",
        _hover: {
          opacity: {lg:".7"},
        },
        a: {
          display: "grid",
          placeContent: "center",
          w: "64px",
          h: "64px",
          bg:"white",
          border:"2px solid var(--chakra-color_primary)",
          borderRadius: "50%",
          filter: "drop-shadow(0 3px 6px var(--chakra-shadow))",
          img: {
            transform: "rotate(270deg)",
          },
        },
      }}
    >
      ページトップへ
      {/* <Scroll to="top" href="#top" smooth={true} duration={400} style={style}>
        <Image
          width="16px"
          height="28px"
          src="/images/common/icon_arrow_primary.svg"
          alt="ページトップへ"
        />
      </Scroll> */}
    </Box>
  )
}

export default LinktoPageTop
