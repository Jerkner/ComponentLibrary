import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import Home from "./pages/Home.jsx"
import Badges from "./pages/Badges.jsx"
import BadgeDetails from "./components/badges/BadgeDetails.jsx"
import Banners from "./pages/Banners.jsx"
import BannerDetails from "./components/banners/BannerDetails.jsx"
import Cards from "./pages/Cards.jsx"
import Testimonials from "./pages/Testimonials.jsx"
import Tooltips from "./pages/Tooltips.jsx"
import Toasts from "./pages/Toasts.jsx"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/badges"
                        element={<Badges />}
                    >
                        <Route
                            path="/badges/:color/:style"
                            element={<BadgeDetails />}
                        />
                    </Route>
                    <Route
                        path="/banners"
                        element={<Banners />}
                    >
                        <Route
                            path="/banners/:color/:style"
                            element={<BannerDetails />}
                        />
                    </Route>
                    <Route
                        path="/cards"
                        element={<Cards />}
                    />
                    <Route
                        path="/testimonials"
                        element={<Testimonials />}
                    ></Route>
                    <Route
                        path="/tooltips"
                        element={<Tooltips />}
                    />
                    <Route
                        path="/toasts"
                        element={<Toasts />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
