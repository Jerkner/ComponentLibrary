import React from "react"
import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to="/">Badges</NavLink>
                <NavLink to="/banners">Banners</NavLink>
                <NavLink to="cards">Cards</NavLink>
                <NavLink to="/testimonials">Testimonials</NavLink>
                <NavLink to="tooltips">Tooltips</NavLink>
                <NavLink to="toasts">Toasts</NavLink>
            </nav>
        </header>
    )
}
