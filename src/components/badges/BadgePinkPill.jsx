import React from "react"
import styled from "styled-components"

const BadgePinkPill = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 24px;
    padding: 2px 12px;
    margin: 1rem;
    border-radius: 12px;
    text-decoration: none;
    background-color: #fce7f3;
    color: #9d174d;
    p {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
`
export default function BadgePinkPillComponent() {
    return (
        <BadgePinkPill>
            <p>Badge</p>
        </BadgePinkPill>
    )
}
