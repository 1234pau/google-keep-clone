const template = document.createElement("template")
template.innerHTML = `
<style>
.containerImageIcon{
  width: 35px;
    height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
}
.containerImageIcon:hover{
  background-color: var(--myHoverNavColor);
}
  .imageIcon{
    color: var(--myBorderColor);
    width: 20px;
    height: 20px;
  }
</style>

<div class="containerImageIcon">
  <svg class="imageIcon"viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17Zm-2 4q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
  </svg>
</div>
`

export class ImageNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define("image-note", ImageNote)