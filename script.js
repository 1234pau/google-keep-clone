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
const textNoteImput = document.querySelector(".textNoteImput")
const titleAndPinIcon = document.querySelector(".titleAndPinIcon")
const titleInput = document.querySelector(".titleInput")
const iconsAction = document.querySelector(".iconsAction")
const iconsBtn = document.querySelector(".iconsBtn")
const closeBtn = document.querySelector(".closeBtnItself")
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

        cond2 = true
        if (e.target == AddCard ||
            e.target == titleAndPinIcon ||
            e.target == iconsAction ||
            e.target == textNoteImput ||
            e.target == titleInput ||
            e.target == iconsBtn
        ) {

            return
        }
        console.log(e.target)
        if (e.target == closeBtn || cond2) {
            titleAndPinIcon.style.display = "none"
            iconsAction.style.display = "none"
            console.log(cond2)
            console.log(e.target)
        }
        // if (e.target == closeBtn || cond2) {
        //     titleAndPinIcon.style.display = "none"
        //     iconsAction.style.display = "none"
        //     console.log(cond2)
        //     console.log(e.target)
        // }

        // console.log(e.target)

    }, true)
    // closeBtn.addEventListener("click", () => {
    //     titleAndPinIcon.style.display = "none"
    //     iconsAction.style.display = "none"
    // })