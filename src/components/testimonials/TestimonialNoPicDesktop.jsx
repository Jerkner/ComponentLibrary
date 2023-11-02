import React from "react"

export default function TestimonialNoPicDesktopComponent() {
    return (
        <div className="testimonial-nopic">
            <div className="testimonial-nopic-text">
                <img src="src/assets/Logo.png" />
                <h3>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo expedita voluptas culpa sapiente alias molestiae.
                    Numquam corrupti in laborum sed rerum et corporis.”
                </h3>
                <div className="nopic-signature">
                    <p className="bold">May Andersons</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M11 0H14L9 20H6L11 0Z"
                            fill="#2E59F3"
                        />
                    </svg>
                    <p>Workcation, CTO</p>
                </div>
            </div>
        </div>
    )
}
