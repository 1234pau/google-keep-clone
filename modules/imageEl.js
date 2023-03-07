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
        const containerImage = document.querySelector(".containerImage")
        const file = this.shadowRoot.querySelector("#file-input")
        file.addEventListener("change", () => {
            console.log("file added")
            const containerImage = document.createElement("div")
            containerImage.classList.add("containerImage")
            const divDelete = document.createElement("div")
            divDelete.classList.add("divDelete")
            divDelete.innerHTML = `
              <svg class="deleteImage" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"/></svg>
            `
            containerImage.appendChild(divDelete)
            this.parentElement.parentElement.parentElement.appendChild(containerImage)
            this.parentElement.parentElement.parentElement.insertBefore(containerImage, this.parentElement.parentElement.parentElement.children[1])
            if (file.files.length) {
                // containerImage.innerHTML = ""

                for (let i = 0; i < file.files.length; i++) {
                    const image = document.createElement("img")
                    image.classList.add("imageForCardNote")
                        // image.width = '220px'
                    image.height = 70
                    image.src = URL.createObjectURL(file.files[i]);

                    image.onload = () => {
                        URL.revokeObjectURL(this.src);
                    }
                    containerImage.appendChild(image)
                }
            } else {
                return
            }
            divDelete.addEventListener("click", () => {
                containerImage.remove()
                console.log("file removed")
            })
        }, false)
    }
}
customElements.define("image-note", ImageNote)