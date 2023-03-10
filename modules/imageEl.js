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
label{
  display: flex;
  align-items: center;
  justify-content: center;
}
  .imageIcon{
    color: var(--myBorderColor);
    width: 20px;
    height: 20px;
  }
  .containerImageIcon>input{
    display:none;
  }
</style>

<div class="containerImageIcon">
<label for="file-input">
  <svg class="imageIcon"viewBox="0 0 24 24">
    <path fill="currentColor" d="M7 17h10q.3 0 .45-.275t-.05-.525l-2.75-3.675q-.15-.2-.4-.2t-.4.2L11.25 16L9.4 13.525q-.15-.2-.4-.2t-.4.2l-2 2.675q-.2.25-.05.525T7 17Zm-2 4q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
  </svg>
  </label>
  <input id="file-input" type="file" name="img"/>
</div>
`

export class ImageNote extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
        const file = this.shadowRoot.querySelector("#file-input")
            // handle file select button
        file.addEventListener("change", () => {
            console.log("file added")
            const contIm = this.parentElement.parentElement.parentElement.children[1] // containerImage
            contIm.style.display = "block"
            contIm.children[0].src = "" // containerImage.image
                // loop through each file
            for (let i = 0; i < file.files.length; i++) {
                // create an url for the selected file
                contIm.children[0].src = URL.createObjectURL(file.files[i]);
                // let the browser know not to keep the reference to the file any longer
                contIm.children[0].onload = () => {
                    URL.revokeObjectURL(contIm.children[0].src);
                }
            }
        }, false)
    }
}
customElements.define("image-note", ImageNote)