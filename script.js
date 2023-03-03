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
    iconNav,
    pinIcon,
    pinIconChecked,
    pinIconContainer,
    pinnedContainer,
    actualePinnedContainer,
    selectedItemsDrop,
    TopBar,
    lengthOfItems
} from "./modules/elements.js"
import { ReminderNote } from "./modules/reminderEl.js"
import { PaleteNote } from "./modules/paleteEl.js"
import { ArchiveNote } from "./modules/archiveEl.js"
import { DeleteNote } from "./modules/deleteEl.js"
import { ImageNote } from "./modules/imageEl.js"
import { PinNote } from "./modules/pinEl.js"
import { SelectNote, parentDivLength } from "./modules/selectEl.js"
import { selectFuture } from "./modules/selectFuture.js"


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
const setModeSearcBar = (item) => {
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

        // if there is nothing in the imputs do not create the card
        if (textNoteImput.value !== "" || titleInput.value !== "") {
            createCardNote()
            pinIconContainer.classList.remove("pinnedIcon")
            pinIcon.style.display = "block"
            pinIconChecked.style.display = "none"
        } else {
            pinIcon.style.display = "block"
            pinIconChecked.style.display = "none"
            return
        }
        // clear the imputs
        textNoteImput.value = ""
        titleInput.value = ""
    })
    // create card function
let n = 1
const createCardNote = () => {
        const parentDiv = document.createElement("div")
        parentDiv.classList.add("parentDivNote")
        parentDiv.id = n++;

        const selectIcon = document.createElement("select-note", SelectNote)
        selectIcon.style.visibility = "hidden"
        parentDiv.appendChild(selectIcon)

        const titleValue = document.createElement("h2")
        titleValue.classList.add("titleValue")
        titleValue.innerHTML = titleInput.value


        const noteValue = document.createElement("p")
        noteValue.classList.add("noteValue")
        noteValue.innerHTML = textNoteImput.value

        const textDiv = document.createElement("div")
        textDiv.classList.add("textNoteContainer")
        textDiv.appendChild(titleValue)
        textDiv.appendChild(noteValue)
        parentDiv.appendChild(textDiv)

        const pinIcon = document.createElement("pin-note", PinNote)
        pinIcon.style.visibility = "hidden"
        parentDiv.appendChild(pinIcon)

        const divBottomIconsNote = document.createElement("div")
        divBottomIconsNote.classList.add("divBottomIconsNote")
        parentDiv.appendChild(divBottomIconsNote)

        const reminderBel = document.createElement("reminder-note", ReminderNote)
        divBottomIconsNote.appendChild(reminderBel)

        const paleteIcon = document.createElement("palete-note", PaleteNote)
        divBottomIconsNote.appendChild(paleteIcon)

        const imageIcon = document.createElement("image-note", ImageNote)
        divBottomIconsNote.appendChild(imageIcon)

        const archiveIcon = document.createElement("archive-note", ArchiveNote)
        divBottomIconsNote.appendChild(archiveIcon)

        const deleteIcon = document.createElement("delete-note", DeleteNote)
        divBottomIconsNote.appendChild(deleteIcon)

        // handle hover effect on card
        if (parentDiv) {
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
        } else {
            return
        }

        // pin the card 🟥
        pinIcon.addEventListener("click", () => {
                // show the pinnedContainer
                pinnedContainer.classList.remove("none")
                    // if card has a class pinned attach it to actualePinnedContainer
                if (parentDiv.classList.contains("pinned")) {
                    actualePinnedContainer.appendChild(parentDiv)

                } else { // else attach it to containerNotes
                    containerNotes.appendChild(parentDiv)
                }
                // if actualePinnedContainer has no children make it display none
                if (actualePinnedContainer.children.length === 0) {
                    pinnedContainer.classList.add("none")
                }
            })
            // if pin icon from AddNote.titleAndPinIcon is full color add class pinned to parentDiv
        if (pinIconContainer.classList.contains("pinnedIcon")) {
            parentDiv.classList.add("pinned")
        }
        // handle selectIcon and function 🟥
        selectIcon.addEventListener("click", () => {
            parentDivLength.push(parentDiv.id)
            selectFuture(parentDivLength, parentDiv, TopBar, lengthOfItems, selectIcon, pinIcon, divBottomIconsNote)
        })

        // if parentDiv has a class of pinned append parentDiv to pinnedContainer.actualePinnedContainer
        if (parentDiv.classList.contains("pinned")) {
            pinnedContainer.classList.remove("none")
            actualePinnedContainer.appendChild(parentDiv)
            return actualePinnedContainer.appendChild(parentDiv)
        } else { // if not append to containerNotes
            return containerNotes.appendChild(parentDiv)
        }

    }
    // handle display mode of pages when click the left bar icons
const handleSections = () => {
    for (const icon of iconNav) {
        icon.addEventListener("click", () => {
            if (icon.classList.contains("note")) {
                if (containerNotes) {
                    AddCard.style.display = "block"
                    handleDisplay(containerNotes)
                }
            } else if (icon.classList.contains("reminder")) {
                if (containerReminder) {
                    AddCard.style.display = "block"
                    handleDisplay(containerReminder)
                }
            } else if (icon.classList.contains("label")) {
                if (containerLabel) {
                    AddCard.style.display = "block"
                    handleDisplay(containerLabel)
                }
            } else if (icon.classList.contains("archive")) {
                if (containerArchive) {
                    AddCard.style.display = "none" // make AddCard disapear when click archive button in left bat
                    handleDisplay(containerArchive)
                }
            } else if (icon.classList.contains("delete")) {
                if (containerDelete) {
                    AddCard.style.display = "none" // make AddCard disapear when click delete button in left bat
                    handleDisplay(containerDelete)
                }
            } else {
                return
            }
        })
    }
}
handleSections()
    // handle display for sections
const handleDisplay = (curentEl) => {
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
    // add class pinnedIcon to pin icon from AddNote.titleAndPinIcon
const change = (condition) => {
        if (condition == true) {
            pinIconContainer.classList.add("pinnedIcon")
            pinIcon.style.display = "none" // empty icon
            pinIconChecked.style.display = "block" // full icon
            condition = false
        } else {
            pinIconContainer.classList.remove("pinnedIcon")
            pinIcon.style.display = "block"
            pinIconChecked.style.display = "none"
        }
    }
    // handle click event acording to change function
pinIcon.addEventListener("click", () => {
    change(true)
})
pinIconChecked.addEventListener("click", () => {
    change(false)
})