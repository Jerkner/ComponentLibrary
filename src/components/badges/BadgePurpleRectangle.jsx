import React from "react"
import styled from "styled-components"

const BadgePurpleRectangle = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 67px;
    height: 24px;
    padding: 2px 12px;
    margin: 1rem;
    border-radius: 4px;
    text-decoration: none;
    background-color: #ede9fe;
    color: #5b21b6;
    p {
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
`
export default function BadgePurpleRectangleComponent() {
    return (
        <BadgePurpleRectangle>
            <p>Badge</p>
        </BadgePurpleRectangle>
    )
}
