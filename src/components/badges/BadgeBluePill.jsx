import React from "react"
import styled from "styled-components"

const BadgeBluePill = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 24px;
    padding: 2px 12px;
    margin: 1rem;
    border-radius: 12px;
    text-decoration: none;
    background-color: #dbeafe;
    color: #1e40af;
    p {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
`
export default function BadgeBluePillComponent() {
    return (
        <BadgeBluePill>
            <p>Badge</p>
        </BadgeBluePill>
    )
}
