import React from "react"
import styled from "styled-components"

const Card1 = styled.div`
    height: 176px;
    width: 384px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;

    .svg-container {
        position: relative;
        top: -24px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3f75fe;
        width: 48px;
        height: 48px;
    }
    svg {
        width: 24px;
        height: 24px;
    }

    .text {
        width: 336px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h3 {
        color: #111827;
        text-align: center;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 28px;
    }

    p {
        align-self: stretch;
        color: #6b7280;
        text-align: center;
        font-weight: 400;
        line-height: 24px;
    }

    &:hover {
        box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);
    }
`
export default function Card1Component() {
    return (
        <Card1>
            <div className="svg-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#3F75FE"
                >
                    <path
                        d="M7 16C4.79086 16 3 14.2091 3 12C3 10.0929 4.33457 8.4976 6.12071 8.09695C6.04169 7.74395 6 7.37684 6 7C6 4.23858 8.23858 2 11 2C13.4193 2 15.4373 3.71825 15.9002 6.00098C15.9334 6.00033 15.9666 6 16 6C18.7614 6 21 8.23858 21 11C21 13.419 19.2822 15.4367 17 15.9M15 13L12 10M12 10L9 13M12 10L12 22"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className="text">
                <h3>Easy Deployment</h3>
                <p>
                    Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis.
                </p>
            </div>
        </Card1>
    )
}
