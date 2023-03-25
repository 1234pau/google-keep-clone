import { handleDisplay } from "../script.js"
const iconToShow = document.querySelector(".beckgroundIcon")
const parentDiv = document.querySelector(".parentDivNote")
export const handleSections = (iconNav, containerNotes, containerReminder, containerLabel, containerArchive, containerDelete, AddCard) => {
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