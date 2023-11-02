import React from "react"
import { TestimonialMobile } from "../components/testimonials/TestimonialMobile"
import { TestimonialDesktop } from "../components/testimonials/TestimonialDesktop"

export default function Testimonials() {
    return (
        <section className="testimonial-content content">
            <TestimonialMobile />
            <TestimonialDesktop />
        </section>
    )
}
