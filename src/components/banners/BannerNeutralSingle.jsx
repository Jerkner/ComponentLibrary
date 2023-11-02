import React from "react"
import styled from "styled-components"

const BannerNeutralSingle = styled.div`
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    gap: 12px;
    background-color: #eff6ff;
    margin: 1rem;
    svg {
        min-width: 20px;
        min-height: 20px;
    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    h4 {
        color: #1e40af;
    }
`
export default function BannerNeutralSingleComponent() {
    return (
        <BannerNeutralSingle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55229 6.44772 9 7 9V12C7 12.5523 7.44772 13 8 13H9C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11V8C9 7.44772 8.55228 7 8 7H7Z"
                    fill="#60A5FA"
                />
            </svg>
            <div className="text">
                <h4>Update available</h4>
            </div>
        </BannerNeutralSingle>
    )
}
