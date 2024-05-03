import React from 'react'
import { useEffect, useRef } from 'react'
import './style.scss'
function CusorCustom({ entercontactlinked = false, entercontactemail = false, mouselarge = false, infosend = false }) {
     const maincusorRef = useRef(null)
     const minicusorRef = useRef(null)
     const imgprojet = useRef(null)
     const positionRef = useRef({
          mouseX: 0,
          mouseY: 0,
          destinationX: 0,
          destinationY: 0,
          distanceX: 0,
          distanceY: 0,
          key: 1,

     })


     useEffect(() => {

          if (maincusorRef.current !== null && minicusorRef.current !== null) {

               document.addEventListener("mousemove", (event) => {

                    const { clientX, clientY } = event
                    const mouseX = clientX
                    const mouseY = clientY


                    try {
                         positionRef.current.mouseX = mouseX - minicusorRef.current.clientWidth / 2
                         positionRef.current.mouseY = mouseY - minicusorRef.current.clientHeight / 2

                         maincusorRef.current.style.transform = `translate3d(${mouseX - maincusorRef.current.clientWidth / 2}px , ${mouseY - maincusorRef.current.clientWidth / 2}px, 0px)`
                       
                    } catch (error) {
                         console.log(error);
                    }





               })
          }







     }, [])











     useEffect(() => {

          const followMouse = () => {
               if (maincusorRef.current !== null && minicusorRef.current !== null) {

                    positionRef.current.key = requestAnimationFrame(followMouse)
                    const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current

                    if (!destinationX | !destinationY) {
                         positionRef.current.destinationX = mouseX
                         positionRef.current.destinationY = mouseY

                    } else {
                         positionRef.current.distanceX = (mouseX - destinationX) * 0.02
                         positionRef.current.distanceY = (mouseY - destinationY) * 0.02

                         if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
                              positionRef.current.destinationX = mouseX
                              positionRef.current.destinationY = mouseY
                         } else {

                              positionRef.current.destinationX += distanceX
                              positionRef.current.destinationY += distanceY


                         }
                    }



                    minicusorRef.current.style.transform = `translate3d(${destinationX}px , ${destinationY}px, 0px)`
               }
          }

          followMouse()

     }, [])


     return (
          <div>
               <div className='app-cusor' ref={minicusorRef}></div>
               <div className='app-minicusor' style={{mixBlendMode: infosend ? "normal" : "exclusion",backgroundColor:infosend ? "#00000000" : "white"   ,width: entercontactemail || entercontactlinked || mouselarge || infosend ? "400px" : "10px", height: entercontactemail || entercontactlinked || mouselarge || infosend ? "400px" : "10px" }} ref={maincusorRef}>
                    <div className="cursor-text" style={{ opacity: entercontactemail || entercontactlinked || infosend ? 1 : 0 }}>
                         {entercontactlinked && "linkedin/adikpeto-aristide"}
                         {entercontactemail && "adikpetoaristidezeus@gmail.com"}
                         {infosend &&
                              <div className='display-flex'>
                                 
                                   <div className='card-projet-cusor'></div>
                                 
                              </div>
                         }

                    </div>
               </div>
          </div>
     )
}

export default CusorCustom