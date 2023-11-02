import React, { createRef } from "react"
import { NavLink, Outlet } from "react-router-dom"
import BadgeBlueRectangleComponent from "../components/badges/BadgeBlueRectangle"
import BadgeGrayRectangleComponent from "../components/badges/BadgeGrayRectangle"
import BadgeGreenRectangleComponent from "../components/badges/BadgeGreenRectangle"
import BadgeIndigoRectangleComponent from "../components/badges/BadgeIndigoRectangle"
import BadgePinkRectangleComponent from "../components/badges/BadgePinkRectangle"
import BadgePurpleRectangleComponent from "../components/badges/BadgePurpleRectangle"
import BadgeRedRectangleComponent from "../components/badges/BadgeRedRectangle"
import BadgeYellowRectangleComponent from "../components/badges/BadgeYellowRectangle"
import BadgeBluePillComponent from "../components/badges/BadgeBluePill"
import BadgeGrayPillComponent from "../components/badges/BadgeGrayPill"
import BadgeGreenPillComponent from "../components/badges/BadgeGreenPill"
import BadgeIndigoPillComponent from "../components/badges/BadgeIndigoPill"
import BadgePinkPillComponent from "../components/badges/BadgePinkPill"
import BadgePurplePillComponent from "../components/badges/BadgePurplePill"
import BadgeRedPillComponent from "../components/badges/BadgeRedPill"
import BadgeYellowPillComponent from "../components/badges/BadgeYellowPill"

export default function Badges() {
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
            <h1>Badges</h1>

            <div className="container">
                <div className="groups-badges">
                    <nav className="group-badges">
                        <NavLink
                            to={"blue/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeBlueRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"gray/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeGrayRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"green/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeGreenRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"indigo/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeIndigoRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"pink/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgePinkRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"purple/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgePurpleRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"red/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeRedRectangleComponent />
                        </NavLink>
                        <NavLink
                            to={"yellow/rectangle"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeYellowRectangleComponent />
                        </NavLink>
                    </nav>
                    <nav className="group-badges">
                        <NavLink
                            to={"blue/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeBluePillComponent />
                        </NavLink>
                        <NavLink
                            to={"gray/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeGrayPillComponent />
                        </NavLink>
                        <NavLink
                            to={"green/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeGreenPillComponent />
                        </NavLink>
                        <NavLink
                            to={"indigo/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeIndigoPillComponent />
                        </NavLink>
                        <NavLink
                            to={"pink/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgePinkPillComponent />
                        </NavLink>
                        <NavLink
                            to={"purple/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgePurplePillComponent />
                        </NavLink>
                        <NavLink
                            to={"red/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeRedPillComponent />
                        </NavLink>
                        <NavLink
                            to={"yellow/pill"}
                            onClick={() => handleNavLinkClick()}
                        >
                            <BadgeYellowPillComponent />
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
