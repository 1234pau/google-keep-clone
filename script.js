// elements
const containerSearch = document.querySelector(".containerSearch")
const closeIcon = document.querySelector(".closeIcon")
const searchIcon = document.querySelector(".searchIcon")
const searchBox = document.querySelector(".searchBox")
const body = document.querySelector("body")
const menuIcon = document.querySelector(".menuIcon")
const LeftBar = document.querySelector(".LeftBar")
const MidleContent = document.querySelector(".MidleContent")
const AddCard = document.querySelector(".AddCard")
const textNote = document.querySelector(".textNote")
const textNoteImput = document.querySelector(".textNoteImput") // textarea imput
const titleInput = document.querySelector(".titleInput") // title imput
const titleAndPinIcon = document.querySelector(".titleAndPinIcon")
const iconsAction = document.querySelector(".iconsAction")
const iconsBtn = document.querySelector(".iconsBtn")
const closeBtn = document.querySelector(".closeBtnItself")
const checkBox = document.querySelector(".checkBox")
const labelIc = document.querySelector(".labelIc")
const containerNotes = document.querySelector(".containerNotes")
const iconNav = [...document.querySelectorAll(".iconNav")]

// make search bar styling
containerSearch.addEventListener("click", (e) => {
    e.stopPropagation()
    containerSearch.style.backgroundColor = "white"
    containerSearch.style.borderRadius = "5px"
    searchIcon.style.color = "black"
    closeIcon.style.visibility = "visible"
    searchBox.classList.add("changeColorClass")
    searchBox.classList.remove("searchBox")
})

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
let cond2 = true
textNote.addEventListener("click", (e) => {
    e.stopPropagation()
    titleAndPinIcon.style.display = "flex"
    iconsAction.style.display = "flex"
    cond2 = false
})
document.addEventListener("click", (e) => {
    // e.stopPropagation()
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
    createCardNote()
    textNoteImput.value = ""
    titleInput.value = ""
})
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