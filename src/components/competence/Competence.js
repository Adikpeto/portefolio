import React, { useState, useEffect, useReducer,useRef } from 'react'
import useDimensions from "react-use-dimensions";
import './Competence.scss'


function Competence({title,key,description,active = ()=>{},notactive=()=>{}}) {
    
  
    const [listItemref, listitemsize] = useDimensions()
    const titleref = useRef(null)
    // Function

    useEffect(() => {
        function compareheight() {
            const intervalend = listitemsize?.y - listitemsize?.height
            const intervalstart = listitemsize?.y
            const reduct = 10
            const middlescreen = ( window.screen.height * 20 ) / 100
            const intersectionitem = (intervalstart > middlescreen) && (middlescreen < intervalstart + reduct && middlescreen > intervalend + reduct)
            if (intersectionitem) {
                
                titleref.current.style.color = "#161616"
                titleref.current.style.fontFamily ='Poppins'
                titleref.current.style.fontSize = window.innerWidth > 767 ? '11rem' : "4.5rem"
                active()
              
                
            }
            if (!intersectionitem) {
                notactive()
                titleref.current.style.color = "rgb(197, 197, 197)"
                titleref.current.style.fontFamily ='Orbit'
                titleref.current.style.fontSize = window.innerWidth > 767 ? '10rem' : "4.5rem"
            }
            
        }
        compareheight()
      
    }, [listitemsize?.y,listitemsize?.height])

    return (
        <>
            <div key={key} ref={listItemref} className="competence"><div ref={titleref}>{title}</div></div>
        </>

    )
}

export default Competence