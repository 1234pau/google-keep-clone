const template = document.createElement("template")
template.innerHTML = `
<style>

.containerRestoreIc{
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
}
.containerRestoreIc:hover{
  background-color: var(--myHoverNavColor);
}
  .restoreIcon{
    color: var(--myBorderColor);
    width: 25px;
    height: 25px;
  }
</style>

<div class="containerRestoreIc">
<svg class="restoreIcon" viewBox="0 0 24 24"><path fill="currentColor" d="M14 14h2l-4-4l-4 4h2v4h4v-4M6 7h12v12c0 .5-.2 1-.61 1.39c-.39.41-.89.61-1.39.61H8c-.5 0-1-.2-1.39-.61C6.2 20 6 19.5 6 19V7m13-3v2H5V4h3.5l1-1h5l1 1H19Z"/></svg>
</div>
`

export class RestoreNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }


}
customElements.define("restore-note", RestoreNote)