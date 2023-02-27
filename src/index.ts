export * from "./list"
import { list, type Option } from "./list"
import "./index.scss"
import down from "./assets/down.svg?raw"
export const imgs = import.meta.glob(["./img/**/*.png", "./img/**/*.svg"], {
  eager: true,
})

const imgKeys = Object.keys(imgs)

const getSrc = (fileName = "") => {
  const path = imgKeys.find(path => path.endsWith(fileName))
  if (!path) return
  return (imgs[path] as any).default
}

export type Config = {
  onInput?: (latex: string, option: Option) => void
}

export class KLatexTemplate {
  el: HTMLElement

  onInput: Config["onInput"]

  constructor(el: string | any, public config?: Config) {
    if (typeof el === "string") this.el = document.querySelector(el) as any
    else this.el = el

    this.onInput = config?.onInput

    this.init()
  }

  async init() {
    this.el.setAttribute("class", "k-latex-template")
    this.el.innerHTML = ""

    this.render(list, this.el)
  }

  render(list: Option[], target: HTMLElement, defaultWidth?: string) {
    list.forEach(item => {
      const el = document.createElement("div")

      this.addImg(el, item, item.width || defaultWidth!)

      const text = document.createElement("p")
      text.innerText = item.name!
      el.appendChild(text)
      el.innerHTML += down

      el.addEventListener("mouseenter", () => {
        const container = el.querySelector(".group-container") as HTMLElement
        container.style.display = "block"
        const { x } = container.getBoundingClientRect()
        if (x + container.offsetWidth > document.documentElement.clientWidth) {
          container.style.left = "unset"
          container.style.right = "0"
        } else {
          container.style.right = "unset"
          container.style.left = "0"
        }
      })
      el.addEventListener("mouseleave", () => {
        const container = el.querySelector(".group-container") as HTMLElement
        container.style.display = "none"
      })

      target.appendChild(el)
      this.renderGroup(item.children!, el, item.width || defaultWidth!)
    })
  }

  renderGroup(list: Option[], target: HTMLElement, defaultWidth?: string) {
    const groupContainer = document.createElement("div")
    groupContainer.className = "group-container"
    list.forEach(item => {
      if (item.groupName) {
        const group = document.createElement("p")
        group.innerText = item.groupName
        groupContainer.appendChild(group)
      }
      item.children?.forEach(i => {
        this.addImg(groupContainer, i, i.width || item.width || defaultWidth!)
      })
      this.addImg(groupContainer, item, item.width || defaultWidth!)
    })

    target.appendChild(groupContainer)
  }

  addImg(el: HTMLElement, item: Option, width: string) {
    const button = document.createElement("button")
    item.name && (button.title = item.name)
    button.style.width = width

    if (item.imgPath) {
      const img = document.createElement("img")
      img.src = getSrc(item.imgPath)
      button.appendChild(img)
      el.appendChild(button)
    }

    button.addEventListener("click", () => {
      this.onInput?.(item.latex!, item)
    })
  }
}
