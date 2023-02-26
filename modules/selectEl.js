const template = document.createElement("template")
template.innerHTML = `
<style>
.containerSelectIcon{
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: -25px;
  margin-left: -20px;
  
}

  .selectIcon{
    color: white;
    width: 25px;
    height: 25px;
  }
</style>

<div class="containerSelectIcon">
  <svg class="selectIcon" viewBox="0 0 24 24">
    <path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7t.275.7L9.9 15.9q.275.275.7.275t.7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
  </svg>
</div>
`

export class SelectNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}
customElements.define("select-note", SelectNote)