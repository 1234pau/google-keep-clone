const containerSearch = document.querySelector(".containerSearch")
const closeIcon = document.querySelector(".closeIcon")
const searchIcon = document.querySelector(".searchIcon")
const searchBox = document.querySelector(".searchBox")
const body = document.querySelector("body")
const menuIcon = document.querySelector(".menuIcon")
const LeftBar = document.querySelector(".LeftBar")
const iconNav = [...document.querySelectorAll(".iconNav")]

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
let cond = true
menuIcon.addEventListener("click", () => {
    if (cond) {
        LeftBar.style.width = "85px"
        for (const icon of iconNav) {
            icon.classList.remove("iconNav")
            icon.classList.add("iconNavClass")
        }
        cond = false
        console.log(cond)
    } else if (cond === false) {
        cond = true
        LeftBar.style.width = "250px"
        for (const icon of iconNav) {
            icon.classList.remove("iconNavClass")
            icon.classList.add("iconNav")
        }
        console.log(cond)
    }
})