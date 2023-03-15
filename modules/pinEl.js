const template = document.createElement("template")
template.innerHTML = `
<style>
.containerPinIcon{
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
  margin-top: -20px;
  float:right;
  position:relative;
  z-index: 999;
  
}
.containerPinIcon:hover{
  background-color: var(--myHoverNavColor);
}
  svg{
    color: var(--myBorderColor);
    width: 25px;
    height: 25px;
  }
  .pinIconChecked{
    display: none;
  }
</style>

<div class="containerPinIcon">
  <svg class="pinIcon" viewBox="0 0 24 24">
    <path fill="currentColor" d="m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1v7Zm-7.15 2h6.3L14 12.85V5h-4v7.85L8.85 14ZM12 14Z"/>
  </svg>
  <svg class="pinIconChecked" viewBox="0 0 24 24">
    <path fill="currentColor" d="m16 12l2 2v2h-5v6l-1 1l-1-1v-6H6v-2l2-2V5H7V3h10v2h-1Z"/>
  </svg>
</div>
`

export class PinNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    change(condition) {
        const checkPin = this.shadowRoot.querySelector(".pinIconChecked")
        const pinIcon = this.shadowRoot.querySelector(".pinIcon")

        if (condition == true) {
            this.parentElement.classList.add("pinned")
            pinIcon.style.display = "none"
            checkPin.style.display = "block"
            condition = false
        } else {
            this.parentElement.classList.remove("pinned")
            pinIcon.style.display = "block"
            checkPin.style.display = "none"
        }
    }
    connectedCallback() {
        const checkPin = this.shadowRoot.querySelector(".pinIconChecked")
        const pinIcon = this.shadowRoot.querySelector(".pinIcon")
        this.shadowRoot.querySelector(".pinIcon").addEventListener("click", () => {
            this.change(true)
        })
        this.shadowRoot.querySelector(".pinIconChecked").addEventListener("click", () => {
                this.change(false)
            })
            // make pin icon full color if parentDiv has class pinned
        if (this.parentElement.classList.contains("pinned")) {
            pinIcon.style.display = "none"
            checkPin.style.display = "block"
        } else {
            pinIcon.style.display = "block"
            checkPin.style.display = "none"
        }
    }
}
customElements.define("pin-note", PinNote)