import React from "react"
import styled from "styled-components"

const BadgeIndigoPill = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 24px;
    padding: 2px 12px;
    margin: 1rem;
    border-radius: 12px;
    text-decoration: none;
    background-color: #e0e7ff;
    color: #3730a3;
    p {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
`
export default function BadgeIndigoPillComponent() {
    return (
        <BadgeIndigoPill>
            <p>Badge</p>
        </BadgeIndigoPill>
    )
}
