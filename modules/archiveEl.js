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
</style>

<div class="containerArchiveIcon">
  <svg class="archiveIcon"viewBox="0 0 24 24">
    <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h5a1 1 0 0 1 .707.293L11.414 6H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm6.586 0H4v12h16V8h-9a1 1 0 0 1-.707-.293L8.586 6zM12 9.5a1 1 0 0 1 1 1v2.586l.293-.293a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414l.293.293V10.5a1 1 0 0 1 1-1z"/>
  </svg>
</div>
`

export class ArchiveNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define("archive-note", ArchiveNote)