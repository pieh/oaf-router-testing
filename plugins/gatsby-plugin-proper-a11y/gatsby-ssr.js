import React from "react"

console.log("test")

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
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
      ></div>
    </>
  )
}
