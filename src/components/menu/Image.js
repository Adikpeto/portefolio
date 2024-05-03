import React,{useEffect, useState} from 'react'
import "./menu.scss"

function Image({opacity,parallaxPos,scale,rotationPosition,urlKey}) {
  const [imgclass, setimgclass] = useState('img_fixed img-acceuil')
  useEffect(() => {
    (function seturlKeyFunc() {
       if (urlKey === 1)
         setimgclass('img_fixed img-acceuil')
       if (urlKey === 2)
         setimgclass('img_fixed img-skills')
       if (urlKey === 3)
         setimgclass('img_fixed img-portefolio')
       if (urlKey === 4)
         setimgclass('img_fixed img-contacts')
    }())
  }, [urlKey])
  return (
    <div className={imgclass}
      style={{
        opacity:opacity,
        transform:`translate3D(${parallaxPos?.x}px , ${parallaxPos?.y}px, 0px) rotate(${rotationPosition}deg) scale(${scale})`,
       
      }}
    ></div>
  )
}

export default Image