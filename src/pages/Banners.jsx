import React, { createRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import BannerSuccessSingleComponent from "../components/banners/BannerSuccessSingle"
import BannerSuccessMultiComponent from "../components/banners/BannerSuccessMulti"
import BannerWarningSingleComponent from "../components/banners/BannerWarningSingle"
import BannerWarningMultiComponent from "../components/banners/BannerWarningMulti"
import BannerErrorSingleComponent from "../components/banners/BannerErrorSingle"
import BannerErrorMultiComponent from "../components/banners/BannerErrorMulti"
import BannerNeutralSingleComponent from "../components/banners/BannerNeutralSingle"
import BannerNeutralMultiComponent from "../components/banners/BannerNeutralMulti"

export default function Banners() {
    const outletRef = createRef()

    function handleNavLinkClick() {
        setTimeout(() => {
            if (outletRef.current) {
                outletRef.current.scrollIntoView({ behavior: "smooth" })
            }
        }, 100) // Delay for 100 milliseconds
    }
    return (
        <section className="content">
            <h1>Banners</h1>

            <div className="container">
                <div className="groups-banners">
                    <nav className="group-banners">
                        <NavLink
                            to={"success/multi"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerSuccessMultiComponent />
                        </NavLink>
                        <NavLink
                            to={"success/single"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerSuccessSingleComponent />
                        </NavLink>
                    </nav>
                    <nav className="group-banners">
                        <NavLink
                            to={"warning/multi"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerWarningMultiComponent />
                        </NavLink>
                        <NavLink
                            to={"warning/single"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerWarningSingleComponent />
                        </NavLink>
                    </nav>
                    <nav className="group-banners">
                        <NavLink
                            to={"error/multi"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerErrorMultiComponent />
                        </NavLink>
                        <NavLink
                            to={"error/single"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerErrorSingleComponent />
                        </NavLink>
                    </nav>
                    <nav className="group-banners">
                        <NavLink
                            to={"neutral/multi"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerNeutralMultiComponent />
                        </NavLink>
                        <NavLink
                            to={"neutral/single"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BannerNeutralSingleComponent />
                        </NavLink>
                    </nav>
                </div>
                <div
                    className="outlet"
                    ref={outletRef}
                >
                    <Outlet />
                </div>
            </div>
        </section>
    )
}
