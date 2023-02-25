// get the elements from elements.js
import {
    containerSearch,
    closeIcon,
    searchIcon,
    searchBox,
    body,
    menuIcon,
    LeftBar,
    MidleContent,
    AddCard,
    textNote,
    textNoteImput,
    titleInput,
    titleAndPinIcon,
    iconsAction,
    iconsBtn,
    closeBtn,
    checkBox,
    labelIc,
    containerNotes,
    containerReminder,
    containerLabel,
    containerArchive,
    containerDelete,
    defoultLeyout,
    containerRight,
    linearLeyout,
    iconNav
} from "/elements.js"

// make search bar styling in white when click
containerSearch.addEventListener("click", (e) => {
        e.stopPropagation()
        containerSearch.style.backgroundColor = "white"
        containerSearch.style.borderRadius = "5px"
        searchIcon.style.color = "black"
        closeIcon.style.visibility = "visible"
        searchBox.classList.add("changeColorClass")
        searchBox.classList.remove("searchBox")
    })
    // make search bar close when click the document (except search bar itself) or close icon
function setModeSearcBar(item) {
    item.addEventListener("click", (e) => {
        e.stopPropagation()
        containerSearch.style.backgroundColor = "rgb(85, 83, 83)"
        closeIcon.style.visibility = "hidden"
        searchIcon.style.color = "white"
        searchBox.classList.add("searchBox")

    })
}
setModeSearcBar(document)
setModeSearcBar(closeIcon)

// make left nav actions
let cond1 = true // set a condition for styling
menuIcon.addEventListener("click", () => {
        if (cond1) {
            LeftBar.style.width = "85px"
            MidleContent.style.width = "90%" // resize the midle container when left bar expand
            for (const icon of iconNav) {
                icon.classList.remove("iconNav")
                icon.classList.add("iconNavClass")
            }
            cond1 = false
        } else if (cond1 === false) {
            cond1 = true
            LeftBar.style.width = "250px"
            MidleContent.style.width = "80%"
            for (const icon of iconNav) {
                icon.classList.remove("iconNavClass")
                icon.classList.add("iconNav")
            }
        }
    })
    // expand AddCart container when click textNote
textNote.addEventListener("click", (e) => {
        e.stopPropagation()
        titleAndPinIcon.style.display = "flex";
        iconsAction.style.display = "flex";
    })
    // handle closing and opening AddCard container
document.addEventListener("click", (e) => {
        const parentEl = e.target
        if ((parentEl == AddCard ||
                parentEl.parentNode.parentNode.parentNode.parentNode == AddCard ||
                parentEl.parentNode.parentNode.parentNode == AddCard ||
                parentEl.parentNode.parentNode == AddCard ||
                parentEl.parentNode == AddCard) && (parentEl !== closeBtn)) {
            return
        }
        titleAndPinIcon.style.display = "none"
        iconsAction.style.display = "none"
        if (textNoteImput.value !== "" || titleInput.value !== "") { // if there is nothing in the imputs do not create the card
            createCardNote()
        } else {
            return
        }
        // clear the imputs
        textNoteImput.value = ""
        titleInput.value = ""
    })
    // create card function
const createCardNote = () => {
        const parentDiv = document.createElement("div")
        parentDiv.classList.add("parentDivNote")

        const titleValue = document.createElement("h2")
        titleValue.classList.add("titleValue")
        titleValue.innerHTML = titleInput.value
        parentDiv.appendChild(titleValue)

        const noteValue = document.createElement("p")
        noteValue.classList.add("noteValue")
        noteValue.innerHTML = textNoteImput.value
        parentDiv.appendChild(noteValue)

        return containerNotes.appendChild(parentDiv)
    }
    // handle display mode of pages when click the left bar icons
const handleSections = () => {
    for (const icon of iconNav) {
        icon.addEventListener("click", () => {
            if (icon.classList.contains("note")) {
                if (containerNotes) {
                    handleDisplay(containerNotes)
                }
            } else if (icon.classList.contains("reminder")) {
                if (containerReminder) {
                    handleDisplay(containerReminder)
                }
            } else if (icon.classList.contains("label")) {
                if (containerLabel) {
                    handleDisplay(containerLabel)
                }
            } else if (icon.classList.contains("archive")) {
                if (containerArchive) {
                    handleDisplay(containerArchive)
                }
            } else if (icon.classList.contains("delete")) {
                if (containerDelete) {
                    handleDisplay(containerDelete)
                }
            } else {
                return
            }
        })
    }
}
handleSections()
const handleDisplay = (curentEl) => { // handle display for sections
        containerArchive.style.display = "none"
        containerLabel.style.display = "none"
        containerReminder.style.display = "none"
        containerDelete.style.display = "none"
        containerNotes.style.display = "none"
        curentEl.style.display = "flex"
    }
    // handle display flex for cards and change right top icon
containerRight.addEventListener("click", () => {
    const firstEl = containerRight.children[0]
    const secondEl = containerRight.children[1]

    if (firstEl.classList.contains("active")) {
        if (containerNotes.classList.contains("normalFlex")) {
            firstEl.classList.remove("active")
            firstEl.classList.add("inactive")
            secondEl.classList.remove("inactive")
            secondEl.classList.add("active")
            containerNotes.classList.add("columnFlex")
            containerNotes.classList.remove("normalFlex")
        }
    } else if (secondEl.classList.contains("active")) {
        secondEl.classList.remove("active")
        secondEl.classList.add("inactive")
        firstEl.classList.remove("inactive")
        firstEl.classList.add("active")
        containerNotes.classList.remove("columnFlex")
        containerNotes.classList.add("normalFlex")
    }
})