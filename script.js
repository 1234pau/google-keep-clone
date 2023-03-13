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
    lengthOfItems,
    imageIc,
    file,
    iconsSelected
} from "./modules/elements.js"
import { ReminderNote } from "./modules/reminderEl.js"
import { PaleteNote } from "./modules/paleteEl.js"
import { ArchiveNote } from "./modules/archiveEl.js"
import { DeleteNote } from "./modules/deleteEl.js"
import { ImageNote } from "./modules/imageEl.js"
import { PinNote } from "./modules/pinEl.js"
import { SelectNote, parentDivLength } from "./modules/selectEl.js"
import { selectFuture } from "./modules/selectFuture.js"
import { RestoreNote } from "./modules/restoreEl.js"
import { DeleteForeverNote } from "./modules/deleteForeverEl.js"
import { handleSections } from "./modules/handleSections.js"


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
textNoteImput.focus()
    // create card function
let n = 1
let lengthOfParent
const createCardNote = () => {
    const parentDiv = document.createElement("div") // create the parent div
    parentDiv.classList.add("parentDivNote")
    parentDiv.id = n++;

    const selectIcon = document.createElement("select-note", SelectNote) // create select icon (web component)
    selectIcon.style.visibility = "hidden"
    parentDiv.appendChild(selectIcon)

    const containerImage = document.createElement("div") // create image div (this is display none until you select a file)
    containerImage.classList.add("containerImage")
    const divDelete = document.createElement("div") // div for trash icon
    divDelete.classList.add("divDelete")
    divDelete.innerHTML = ` 
      <svg class="deleteImage" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"/></svg>
    `
    const image = document.createElement("img") // image tag
    image.classList.add("imageForCardNote")
    image.height = 70
    image.src = ""
    containerImage.appendChild(image)
    containerImage.appendChild(divDelete)
    parentDiv.appendChild(containerImage)
    if (getSrcImage() === undefined) {
        image.src = ""
    } else {
        containerImage.style.display = "block"
        image.src = getSrcImage()
        image.onload = () => {
            URL.revokeObjectURL(getSrcImage());
        }
        file.value = ''
    }


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

    const pinIconNote = document.createElement("pin-note", PinNote)
    pinIconNote.style.visibility = "hidden"
    parentDiv.appendChild(pinIconNote)

    const divBottomIconsNote = document.createElement("div")
    divBottomIconsNote.classList.add("divBottomIconsNote")
    parentDiv.appendChild(divBottomIconsNote)

    const divBottomIconsNoteContainer = document.createElement("div")
    divBottomIconsNoteContainer.classList.add("divBottomIconsNoteContainer")
    divBottomIconsNote.appendChild(divBottomIconsNoteContainer)

    const reminderBel = document.createElement("reminder-note", ReminderNote)
    divBottomIconsNoteContainer.appendChild(reminderBel)

    const paleteIcon = document.createElement("palete-note", PaleteNote)
    divBottomIconsNoteContainer.appendChild(paleteIcon)

    const imageIcon = document.createElement("image-note", ImageNote)
    divBottomIconsNoteContainer.appendChild(imageIcon)

    const archiveIcon = document.createElement("archive-note", ArchiveNote)
    divBottomIconsNoteContainer.appendChild(archiveIcon)

    const deleteIcon = document.createElement("delete-note", DeleteNote)
    divBottomIconsNoteContainer.appendChild(deleteIcon)

    const divBottomIconsDelete = document.createElement("div")
    divBottomIconsDelete.classList.add("divBottomIconsDelete")
    divBottomIconsNote.appendChild(divBottomIconsDelete)

    const restore = document.createElement("restore-note", RestoreNote)
    divBottomIconsDelete.appendChild(restore)

    const deleteForever = document.createElement("deleteforever-note", DeleteForeverNote)
    divBottomIconsDelete.appendChild(deleteForever)

    // make palete color div
    const containerPaleteColor = document.createElement("div")
    containerPaleteColor.classList.add("containerPaleteColor")
    containerPaleteColor.classList.add("noneColor") // make it display none
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'] // colors for divs
    for (let i = 0; i < 5, i < colors.length; i++) { // loop the colors
        const colorDiv = document.createElement("div"); // create the color cercle
        colorDiv.setAttribute("data-color", colors[i]) // set a date attribute and set the value of it
        colorDiv.style.backgroundColor = colorDiv.dataset.color // set the background color of cercle color
        containerPaleteColor.appendChild(colorDiv)
        colorDiv.addEventListener("click", (e) => { // set border color of parentDiv when you click a cercle(color)
            parentDiv.style.borderColor = e.target.dataset.color

        })
    }
    parentDiv.appendChild(containerPaleteColor)

    // handle hover effect on card
    if (parentDiv) {
        parentDiv.addEventListener("mouseover", () => {
            selectIcon.style.visibility = "visible"
            pinIconNote.style.visibility = "visible"
            divBottomIconsNote.style.visibility = "visible"
        })
        parentDiv.addEventListener("mouseout", () => {
            selectIcon.style.visibility = "hidden"
            pinIconNote.style.visibility = "hidden"
            divBottomIconsNote.style.visibility = "hidden"
        })
    } else {
        return
    }

    // pin the card 🟥
    pinIconNote.addEventListener("click", () => {
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
        // handle archiveIcon and function
    archiveIcon.addEventListener("click", () => {
            if (parentDiv.classList.contains("archived")) {
                containerArchive.appendChild(parentDiv)
            } else {
                containerNotes.appendChild(parentDiv)
                return
            }
            // if actualePinnedContainer has no children make it display none
            if (actualePinnedContainer.children.length === 0) {
                pinnedContainer.classList.add("none")
            }
            if (parentDiv.classList.contains("archived") && parentDiv.classList.contains("pinned")) {
                parentDiv.classList.remove("pinned")
            }
        })
        // handle deleteIcon and function 🟥
    deleteIcon.addEventListener("click", () => {
            if (parentDiv.classList.contains("deleted")) {
                containerDelete.appendChild(parentDiv)
                divBottomIconsNoteContainer.style.display = "none"
                divBottomIconsDelete.style.display = "flex"
                pinIconNote.style.display = "none"
            }
            if (parentDiv.classList.contains("deleted") && parentDiv.classList.contains("pinned")) {
                parentDiv.classList.remove("pinned")
            }
            // if actualePinnedContainer has no children make it display none
            if (actualePinnedContainer.children.length === 0) {
                pinnedContainer.classList.add("none")
            }
        })
        // redirect parentDiv to containerNotes 🟥
    restore.addEventListener("click", () => {
            if (parentDiv.classList.contains("deleted")) {
                parentDiv.classList.remove("deleted")
                containerNotes.appendChild(parentDiv)
                divBottomIconsNoteContainer.style.display = "flex"
                divBottomIconsDelete.style.display = "none"
                pinIconNote.style.display = "block"
            }
        })
        // remove the parentDiv from the DOM 🟥
    deleteForever.addEventListener("click", () => {
            parentDiv.remove()
        })
        // toggle palete color 🟥
    paleteIcon.addEventListener("click", () => {
            containerPaleteColor.classList.toggle("noneColor")
        })
        // delete image when click the trash button
    divDelete.addEventListener("click", () => {
        containerImage.style.display = "none"
        image.src = "" // clear the image source
        file.value = "" // clear the value of file in order to select the same file one each other
        console.log("file removed")
    })
    handleSelected(parentDiv, selectIcon, divBottomIconsNote, pinIcon, divBottomIconsNoteContainer, divBottomIconsDelete, pinIconNote, containerDelete)

    apendProperly(parentDiv, pinnedContainer, actualePinnedContainer, containerNotes)

}
const apendProperly = (parentDiv, pinnedContainer, actualePinnedContainer, containerNotes) => {
        if (parentDiv.classList.contains("pinned")) {
            pinnedContainer.classList.remove("none")
            actualePinnedContainer.appendChild(parentDiv)
            return actualePinnedContainer.appendChild(parentDiv)
        } else { // if not append to containerNotes
            return containerNotes.appendChild(parentDiv)
        }
    }
    // handle display for sections
handleSections(iconNav, containerNotes, containerReminder, containerLabel, containerArchive, containerDelete, AddCard)

export const handleDisplay = (curentEl) => {
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
    // get the url image
const getSrcImage = () => {
    for (let i = 0; i < file.files.length; i++) {
        const srcImage = URL.createObjectURL(file.files[i]);
        return srcImage
    }
}
file.addEventListener("change", getSrcImage, false)
    // add handleres on each icon in top bar
const handleSelected = (parentDiv, selectIcon, divBottomIconsNote, pinIcon, divBottomIconsNoteContainer, divBottomIconsDelete, pinIconNote, containerDelete) => {
    for (let i = 0; i < iconsSelected.length; i++) { // loop through each icon
        iconsSelected[i].addEventListener("click", () => {
            // if the icon is pin icon and parent div has a class of selected
            if (parentDiv.classList.contains("selected")) {
                if (iconsSelected[i].className === "pinIcon") {
                    // remove selected and add pinned
                    parentDiv.classList.remove("selected")
                    parentDiv.classList.add("pinned")
                        // apend parent div to actualePinnedContainer
                    apendProperly(parentDiv, pinnedContainer, actualePinnedContainer, containerNotes)
                        // show top bar
                    TopBar.classList.remove("zIndexMinus")
                    parentDiv.style.border = "1px solid var(--myBorderColor)"
                    selectIcon.style.visibility = "hidden"
                        // remove the content of parentDivLength in order to work properly when i select again
                    parentDivLength.splice(0, parentDivLength.length)
                        // handle mouseover and mouseout on parentDiv
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
                    console.log("pin icon")
                } else if (iconsSelected[i].className === "reminderBell") {
                    console.log("reminder bell")
                } else if (iconsSelected[i].className === "paleteIcon") {
                    console.log("palete icon")
                } else if (iconsSelected[i].className === "archiveIcon") {
                    parentDiv.classList.add("archived")
                    parentDiv.classList.remove("selected")
                    TopBar.classList.remove("zIndexMinus")
                    parentDiv.style.border = "1px solid var(--myBorderColor)"
                    selectIcon.style.visibility = "hidden"
                    parentDivLength.splice(0, parentDivLength.length)
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
                    if (parentDiv.classList.contains("archived")) {
                        containerArchive.appendChild(parentDiv)
                    } else {
                        containerNotes.appendChild(parentDiv)
                        return
                    }
                    console.log("archive icon")
                } else if (iconsSelected[i].className === "deleteIcon") {
                    parentDiv.classList.add("deleted")
                    parentDiv.classList.remove("selected")
                    TopBar.classList.remove("zIndexMinus")
                    parentDiv.style.border = "1px solid var(--myBorderColor)"
                    selectIcon.style.visibility = "hidden"
                    parentDivLength.splice(0, parentDivLength.length)
                    if (parentDiv.classList.contains("deleted")) {
                        containerDelete.appendChild(parentDiv)
                        divBottomIconsNoteContainer.style.display = "none"
                        divBottomIconsDelete.style.display = "flex"
                        pinIconNote.style.display = "none"
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
                    }
                    console.log("delete icon")
                } else {
                    return
                }
            }

        })
    }
}