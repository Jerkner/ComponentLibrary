import React from "react"
import { TestimonialMobile } from "../components/testimonials/TestimonialMobile.jsx"
import { TestimonialDesktop } from "../components/testimonials/TestimonialDesktop.jsx"

export default function Testimonials() {
    return (
        <section className="testimonial-content content">
            <TestimonialMobile />
            <TestimonialDesktop />
        </section>
    )
}
