import React from 'react'
import "./Strong.scss"

function Strong({children,color = "#161616"}) {
  return (
    <spann className="strong" style={{color}}>{children}</spann>
  )
}

export default Strong