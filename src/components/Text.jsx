import { createElement } from "react"

function Text({ as, text }) {
  return (
    createElement(as, { children: text })
  )
}

export default Text