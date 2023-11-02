import React from "react"
import { TestimonialMobileComponent } from "../components/testimonials/TestimonialMobile.jsx"
import { TestimonialDesktopComponent } from "../components/testimonials/TestimonialDesktop.jsx"

export default function Testimonials() {
    return (
        <section className="testimonial-content content">
            <TestimonialMobileComponent />
            <TestimonialDesktopComponent />
        </section>
    )
}
