const template = document.createElement("template")
template.innerHTML = `
<style>
.containerDeleteForever{
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: transparent;
  cursor: pointer;
}
.containerDeleteForever:hover{
  background-color: var(--myHoverNavColor);
}

  .deleteForever{
    color: var(--myBorderColor);
    width: 25px;
    height: 25px;
  }
</style>

<div class="containerDeleteForever">
<svg class="deleteForever" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/></svg>
</div>
`

export class DeleteForeverNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

}
customElements.define("deleteforever-note", DeleteForeverNote)