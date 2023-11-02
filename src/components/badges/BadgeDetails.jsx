import React from "react"
import { useParams } from "react-router-dom"
import { badgeStyles } from "../../pages/variants"

export default function BadgeDetails() {
    const { color, style } = useParams()
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1)
    const capitalizedType = style.charAt(0).toUpperCase() + style.slice(1)
    const borderRadius = style === "rectangle" ? "4px" : "12px"

    const code = `
    const Badge${capitalizedColor}${capitalizedType} = styled.div\`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        // width: 67px;
        height: 24px;
        padding: 2px 12px;
        margin: 1rem;
        border-radius: ${borderRadius};
        text-decoration: none;
        background-color: ${badgeStyles[color].backgroundColor};
        color: ${badgeStyles[color].color};
        p {
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
        }
    \`;

        return (
        <Badge${capitalizedColor}${capitalizedType}>
            <p>Badge</p>
        </Badge${capitalizedColor}${capitalizedType}>
    )
  `
    const handleCopy = async () => {
        const badgeCode = document.getElementById("code")

        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(badgeCode.innerText)
                console.log("Code copied successfully!")
            } catch (err) {
                console.error("Failed to copy code.", err)
            }
        } else {
            const range = document.createRange()
            range.selectNode(badgeCode)
            window.getSelection().addRange(range)

            try {
                document.execCommand("copy")
                console.log("Code copied successfully!")
            } catch (err) {
                console.error("Failed to copy code.", err)
            }

            window.getSelection().removeAllRanges()
        }
    }

    return (
        <>
            <h2>
                Chosen badge: {capitalizedColor} {capitalizedType}
            </h2>
            <div
                id="code"
                contentEditable={false}
            >
                {code}
            </div>
            <button onClick={handleCopy}>Copy</button>
        </>
    )
}
