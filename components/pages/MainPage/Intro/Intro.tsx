import React from "react"
import classes from "./Intro.module.scss"
import Banner from "@/components/pages/MainPage/Intro/Banner/Banner"
import Image from "next/image"
import inchapLogo from "@/images/MainPage/inchapLogo.svg"

const Intro = () => {
    return (
        <section className={classes.Intro}>
            <Banner />
            <div className={classes.Top}>
                <div className={classes.LeftText}>
                    <span>Дом бизнес-класса</span>
                    <br />
                    <span>для ценителей роскоши</span>
                </div>

                <div className={classes.InchapLogo}>
                    {/*<Image*/}
                    {/*    src={inchapLogo}*/}
                    {/*    alt=""*/}
                    {/*/>*/}
                    <svg
                        width="718"
                        height="114"
                        viewBox="0 0 718 114"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M204.169 114C223.452 114 236.525 104.748 245.677 92.191L234.074 85.748C227.865 95.165 216.589 101.774 204.169 101.774C180.31 101.774 162.171 83.1043 162.171 57C162.171 30.7304 180.31 12.2261 204.169 12.2261C216.589 12.2261 227.865 19 234.074 28.2522L245.513 21.8087C236.852 9.4174 223.452 0 204.169 0C172.793 0 148.117 23.1304 148.117 57C148.117 90.8697 172.793 114 204.169 114Z"
                            fill="black"
                        />
                        <path
                            d="M353.823 112.018V1.81836H340.259V49.2357H276.526V1.81836H262.963V112.018H276.526V61.4618H340.259V112.018H353.823Z"
                            fill="black"
                        />
                        <path
                            d="M472.612 112.018L428.653 1.81836H411.821L368.025 112.018H383.549L393.191 87.5663H447.446L457.087 112.018H472.612ZM443.36 75.3401H397.113L420.318 16.027L443.36 75.3401Z"
                            fill="black"
                        />
                        <path
                            d="M500.353 112.018V68.2358H530.584C552.155 68.2358 564.738 53.0358 564.738 35.0271C564.738 17.0183 552.482 1.81836 530.584 1.81836H486.789V112.018H500.353ZM528.95 56.0097H500.353V14.0444H528.95C541.86 14.0444 550.685 22.6358 550.685 35.0271C550.685 47.4184 541.86 56.0097 528.95 56.0097Z"
                            fill="black"
                        />
                        <path
                            d="M13.5635 112.018V1.81836H0V112.018H13.5635Z"
                            fill="black"
                        />
                        <path
                            d="M129.303 112.018V1.81836H115.74V87.8966L52.9882 1.81836H39.0977V112.018H52.6612V24.1227L116.23 112.018H129.303Z"
                            fill="black"
                        />
                        <path
                            d="M595.214 112.018V1.81836H581.65V112.018H595.214Z"
                            fill="black"
                        />
                        <path
                            d="M710.954 112.018V1.81836H697.39V87.8966L634.639 1.81836H620.748V112.018H634.312V24.1227L697.88 112.018H710.954Z"
                            fill="black"
                        />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Intro
