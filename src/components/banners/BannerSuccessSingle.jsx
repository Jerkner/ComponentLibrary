import React from "react"
import styled from "styled-components"

const BannerSuccessSingle = styled.div`
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    gap: 12px;
    background-color: #ecfdf5;
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
        color: #065f46;
    }
`
export default function BannerSuccessSingleComponent() {
    return (
        <BannerSuccessSingle>
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
                    d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                    fill="#34D399"
                />
            </svg>
            <div className="text">
                <h4>Congratulations!</h4>
            </div>
        </BannerSuccessSingle>
    )
}
