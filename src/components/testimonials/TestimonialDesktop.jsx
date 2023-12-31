import React from "react"
import styled from "styled-components"
import QuotationMark from "../../assets/QuotationMark.svg"
import ProfileImage from "../../assets/profilepic1.jpeg"

const backgroundColor = "#2545b8"
const textColor = "#fff"
const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
const profileName = "May Andersons"
const profileWorkplace = "Workcation, CTO"

const quotationMark = QuotationMark
const profilePic = ProfileImage

const TestimonialDesktop = styled.div`
    .background {
        background-color: ${backgroundColor};
        width: 1216px;
        height: 400px;
        position: relative;
        display: flex;
        align-items: center;
    }

    .image {
        background-image: url(${profilePic});
        width: 384px;
        height: 464px;
        background-size: cover;
        background-position: center;
        border-radius: 12px;
        position: absolute;
        left: 71px;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
        color: ${textColor};
        margin-left: 487px;
    }

    .text img {
        width: 48px;
        height: 48px;
    }

    .text h3 {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2rem;
    }

    .profile-name {
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5;
    }

    .profile-workplace {
        font-weight: 500;
        line-height: 1.5;
    }
`

function TestimonialDesktopComponent() {
    return (
        <TestimonialDesktop>
            <div className="background">
                <div className="image"></div>
                <div className="text">
                    <img src={quotationMark} />
                    <h3>{text}</h3>
                    <div>
                        <p className="profile-name">{profileName}</p>
                        <p className="profile-workplace">{profileWorkplace}</p>
                    </div>
                </div>
            </div>
        </TestimonialDesktop>
    )
}

export { TestimonialDesktopComponent, TestimonialDesktop }
