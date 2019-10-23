import React, { useEffect, useState } from "react"

let listener = null

const AnnouncementComponent = () => {
  const [announcement, setAnnouncement] = useState(``)

  useEffect(() => {
    listener = location => {
      requestAnimationFrame(() => {
        setAnnouncement(`Navigated to ${document.title} - ${location.href}`)
      })
    }

    // cleanup
    return () => {
      listener = null
    }
  })

  return (
    <div
      id="announcement"
      style={{
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: 0,
      }}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {announcement}
    </div>
  )
}

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <AnnouncementComponent />
    </>
  )
}

export const onRouteUpdate = ({ location }) => {
  if (listener) {
    listener(location)
  }
}
