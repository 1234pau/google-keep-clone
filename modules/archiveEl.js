const template = document.createElement("template")
template.innerHTML = `
<style>
.containerArchiveIcon{
  width: 35px;
    height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
}
.containerArchiveIcon:hover{
  background-color: var(--myHoverNavColor);
}
  .archiveIcon{
    color: var(--myBorderColor);
    width: 20px;
    height: 20px;
  }
  .unarchiveIcon{
    color: var(--myBorderColor);
    width: 20px;
    height: 20px;
    display:none;
  }
</style>

<div class="containerArchiveIcon">
  <svg class="archiveIcon" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 19h14V8H5v11Zm7-1.425q.2 0 .375-.063t.325-.212l2.6-2.6q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-.9.9V11q0-.425-.288-.713T12 10q-.425 0-.713.288T11 11v3.2l-.9-.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l2.6 2.6q.15.15.325.212t.375.063ZM5 19V8v11Z"/></svg>
  <svg class="unarchiveIcon" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.35.125-.663t.325-.587l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.588T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM5 19h14V8H5v11Zm7-2q.425 0 .713-.288T13 16v-3.2l.9.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-2.6-2.6q-.15-.15-.325-.212T12 9.425q-.2 0-.375.063T11.3 9.7l-2.6 2.6q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l.9-.9V16q0 .425.288.713T12 17Zm-7 2V8v11Z"/></svg>
</div>
`

export class ArchiveNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    switchTheIcon(cond) {
        const archiveIcon = this.shadowRoot.querySelector(".archiveIcon")
        const unarchiveIcon = this.shadowRoot.querySelector(".unarchiveIcon")
        if (cond == true) {
            this.parentElement.parentElement.parentElement.classList.add("archived")
            archiveIcon.style.display = "none"
            unarchiveIcon.style.display = "block"
            cond = false
        } else {
            this.parentElement.parentElement.parentElement.classList.remove("archived")
                // this.parentElement.parentElement.classList.add("unarchived")
            archiveIcon.style.display = "block"
            unarchiveIcon.style.display = "none"
        }
    }
    connectedCallback() {
        this.shadowRoot.querySelector(".archiveIcon").addEventListener("click", () => {
            this.switchTheIcon(true)
        })
        this.shadowRoot.querySelector(".unarchiveIcon").addEventListener("click", () => {
            this.switchTheIcon(false)
        })
    }
}
customElements.define("archive-note", ArchiveNote)