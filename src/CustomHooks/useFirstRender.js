import { useRef } from "react"

export default function useFirstRender() {
  const render = useRef(true)
  const isFirstRender = render.current
  render.current = false
  return isFirstRender
}