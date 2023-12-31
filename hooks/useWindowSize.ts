import { useEffect, useState } from "react"

type WindowSizeType = {
    width: number
    height: number
}

export default function useWindowSize() {
    const isSSR = typeof window === "undefined"
    const [windowSize, setWindowSize] = useState<WindowSizeType>({
        width: isSSR ? 1200 : window.innerWidth,
        height: isSSR ? 800 : window.innerHeight
    })

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize)

        return () => {
            window.removeEventListener("resize", changeWindowSize)
        }
    }, [])

    return windowSize
}
