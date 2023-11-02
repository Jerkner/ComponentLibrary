import React from "react"
import { TestimonialMobileComponent } from "../components/testimonials/TestimonialMobile"
import { TestimonialDesktopComponent } from "../components/testimonials/TestimonialDesktop"

export default function Testimonials() {
    return (
        <section className="testimonial-content content">
            <TestimonialMobileComponent />
            <TestimonialDesktopComponent />
        </section>
    )
}
