const containerSearch = document.querySelector(".containerSearch")
const closeIcon = document.querySelector(".closeIcon")
const searchIcon = document.querySelector(".searchIcon")
const searchBox = document.querySelector(".searchBox")
const body = document.querySelector("body")

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