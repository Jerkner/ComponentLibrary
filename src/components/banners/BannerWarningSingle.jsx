import React from "react"
import styled from "styled-components"

const BannerWarningSingle = styled.div`
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    gap: 12px;
    background-color: #fffbeb;
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
        color: #92400e;
    }
    p {
        color: #b45309;
    }
`
export default function BannerWarningSingleComponent() {
    return (
        <BannerWarningSingle>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z"
                    fill="#FBBF24"
                />
            </svg>
            <div className="text">
                <h4>Attention!</h4>
            </div>
        </BannerWarningSingle>
    )
}
