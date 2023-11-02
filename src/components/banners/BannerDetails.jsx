import React from "react"
import { useParams } from "react-router-dom"
import { bannerStyles } from "../../pages/variants"

export default function BannerDetails() {
    const { color, style } = useParams()
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1)
    const capitalizedType = style.charAt(0).toUpperCase() + style.slice(1)
    const display = style === "multi"

    const code = `
  const Banner${capitalizedColor}${capitalizedType} = styled.div\`
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    gap: 12px;
    background-color: ${bannerStyles[color].backgroundColor};
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
        color: ${bannerStyles[color].h4Color};
    }
    ${display ? `p { color: ${bannerStyles[color].pColor}; }` : ""}\`

    <Banner${capitalizedColor}${capitalizedType}>
            ${bannerStyles[color].svg}
            <div className="text">
                <h4>${bannerStyles[color].h4Text}</h4>
                ${
                    display
                        ? `<p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid pariatur, ipsum similique veniam.
                </p>`
                        : ""
                }</div>
        </Banner${capitalizedColor}${capitalizedType}>
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
                Chosen banner: {capitalizedType} Line {capitalizedColor} Banner
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
