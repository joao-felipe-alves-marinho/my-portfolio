import type React from 'react'

type AnchorClickEvent = React.MouseEvent<HTMLAnchorElement>

export function handleHashLinkClick(
  e: AnchorClickEvent,
  onClick?: (event: AnchorClickEvent) => void,
) {
  onClick?.(e)

  if (e.defaultPrevented) {
    return
  }

  const targetUrl = new URL(e.currentTarget.href, window.location.origin)
  const currentUrl = new URL(window.location.href)
  const hasHash = targetUrl.hash.length > 1
  const isSamePath = targetUrl.pathname === currentUrl.pathname
  const isSameHash = targetUrl.hash === currentUrl.hash

  if (!hasHash || !isSamePath || !isSameHash) {
    return
  }

  e.preventDefault()

  const elementId = decodeURIComponent(targetUrl.hash.slice(1))
  const element = document.getElementById(elementId)

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
