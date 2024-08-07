import React, { useEffect, useRef, useState } from "react"
import Container from "@/components/global/Container/Container"
import classes from "./FixedHeader.module.scss"
import Select from "@/components/ui/Select/Select"
import Link from "next/link"
import Image from "next/image"
import headerLogo from "@/images/header/headerLogo.svg"
import classNames from "classnames"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { openModal } from "@/store/reducers/modalSlice"
import PhoneIcon from "@/images/header/phoneIcon.svg"

const FixedHeader = () => {
    const [showFixedHeader, setShowFixedHeader] = useState(false)
    const { scroll } = useAppSelector((state) => state.scrollReducer)
    const dispatch = useAppDispatch()

    const prevScrollRef = useRef(0)
    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = scroll
            setShowFixedHeader(currentScroll < prevScrollRef.current && currentScroll > 150)
            prevScrollRef.current = currentScroll
        }
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scroll])

    return (
        <div>
            <Container>
                <div className={classNames(classes.Header, { [classes.show]: showFixedHeader })}>
                    <div className={classes.Left}>
                        <div className={classes.BurgerContainer}>
                            <div className={classes.BurgerItems}>
                                <div className={classes.Line}></div>
                                <div className={classes.Line}></div>
                                <div className={classes.Line}></div>
                            </div>
                            <div className={classes.Burger}>Меню</div>
                        </div>
                        <div className={classes.DesktopSelect}>
                            <Select />
                        </div>
                    </div>

                    <div
                        className={classes.TabletPhone}
                        onClick={() => dispatch(openModal("CallbackForm"))}
                    >
                        <Image
                            src={PhoneIcon}
                            alt={""}
                        />
                    </div>

                    <Link
                        href={"/"}
                        className={classes.Logo}
                    >
                        <Image
                            src={headerLogo}
                            alt=""
                        />
                        <Image
                            src={headerLogo}
                            alt=""
                        />
                    </Link>

                    <div className={classes.Right}>
                        <div className={classes.Link}>
                            <a href="tel:+74955272121">+7 495 527 21 21</a>
                            <a href="tel:+74955272121">+7 495 527 21 21</a>
                        </div>

                        <div
                            className={classes.Link}
                            onClick={() => dispatch(openModal("CallbackForm"))}
                        >
                            <span>ЗАКАЗАТЬ ЗВОНОК</span>
                            <span>ЗАКАЗАТЬ ЗВОНОК</span>
                        </div>
                    </div>

                    <div className={classes.TabletSelect}>
                        <Select />
                    </div>

                    <div
                        className={classes.MobilePhone}
                        onClick={() => dispatch(openModal("CallbackForm"))}
                    >
                        {/*<Image*/}
                        {/*    src={PhoneIcon}*/}
                        {/*    alt={""}*/}
                        {/*/>*/}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.4816 0.666977C13.6456 0.694321 13.755 0.776352 13.8644 0.885727C13.9464 1.02245 14.0011 1.15916 14.0011 1.29588C14.0011 3.59276 13.4269 5.72557 12.2785 7.69432C11.13 9.60838 9.62611 11.1396 7.71205 12.2607C5.7433 13.4092 3.61048 13.9834 1.31361 13.9834C1.14955 13.9834 1.01283 13.956 0.903452 13.8467C0.766733 13.7646 0.684702 13.6279 0.684702 13.4639L0.0284517 10.6201C-0.0262358 10.4834 0.00110792 10.3467 0.0831392 10.1826C0.137827 10.0459 0.247202 9.93651 0.411264 9.88182L3.47376 8.56932C3.58314 8.51463 3.71986 8.51463 3.85658 8.54198C3.9933 8.59666 4.13001 8.65135 4.23939 8.76073L5.57923 10.4014C6.64564 9.90916 7.60267 9.25291 8.42298 8.40526C9.2433 7.58495 9.92689 6.62791 10.4191 5.56151L8.77845 4.22166C8.66908 4.11229 8.58705 4.00291 8.5597 3.8662C8.50501 3.72948 8.53236 3.59276 8.58705 3.45604L9.89955 0.39354C9.95423 0.256821 10.0363 0.147446 10.2003 0.0654146C10.337 0.0107271 10.4738 -0.0166167 10.6378 0.0107271L13.4816 0.666977Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FixedHeader
