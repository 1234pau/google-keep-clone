export const selectFuture = (parentDivLength, parentDiv, TopBar, lengthOfItems, selectIcon, pinIcon, divBottomIconsNote) => {
    const seen = new Map()

    for (let i = 0; i < parentDivLength.length; i++) {
        if (seen.has(parentDivLength[i])) {
            seen.delete(parentDivLength[i])
            parentDiv.classList.remove("selected")
        } else {
            seen.set(parentDivLength[i], parentDivLength[i])
            parentDiv.classList.add("selected")

        }
    }
    if (seen.size >= 1) {
        TopBar.classList.add("zIndexMinus")
    } else {
        TopBar.classList.remove("zIndexMinus")
    }
    lengthOfItems.innerHTML = `${seen.size} selected`
    if (parentDiv.classList.contains("selected")) {

        parentDiv.style.border = "1px solid white"

        parentDiv.addEventListener("mouseout", () => {
            selectIcon.style.visibility = "visible"
            pinIcon.style.visibility = "visible"
            divBottomIconsNote.style.visibility = "hidden"
        })
        parentDiv.addEventListener("mouseover", () => {
            divBottomIconsNote.style.visibility = "hidden"
        })

    } else {
        parentDiv.style.border = "1px solid rgb(180, 180, 180)"
        parentDiv.addEventListener("mouseover", () => {
            selectIcon.style.visibility = "visible"
            pinIcon.style.visibility = "visible"
            divBottomIconsNote.style.visibility = "visible"
        })
        parentDiv.addEventListener("mouseout", () => {
            selectIcon.style.visibility = "hidden"
            pinIcon.style.visibility = "hidden"
            divBottomIconsNote.style.visibility = "hidden"
        })
        return
    }
    return seen
}