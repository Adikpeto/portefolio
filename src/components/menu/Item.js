import React,{useReducer} from 'react'
import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import animate from './animate'
import Image from './Image'
import "./menu.scss"


const initialState = {
    opacity: 0,
    parallaxPos: { x: 0, y: -20 },
    scale: 0.8,
    rotationPosition: 0
}

function reducer(state, action) {
    switch (action.type) {

        case "CHANGE/OPACITY":

            return { ...state, opacity: action.payload }
            break;
        case "CHANGE/COORDINATES":
            return { ...state, parallaxPos: action.payload }
            break;

        case "CHANGE/ROTATION":

            return { ...state, rotationPosition: action.payload }
            break;

        case "CHANGE/SCALE":

            return { ...state, scale: action.payload }
            break;

        default:
            throw new Error("Message")

    }
}


function Item({ title, route, timeLineFunc ,urlKey}) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const listItem = useRef(null)
    const easeMethod = "linear"


    // Function
    
  const parallax = (event) => {
    const speed = -5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100


    dispatch({
      type: "CHANGE/COORDINATES",
      payload: { x: x, y: y }
    })
  }

  const handleMouseEnter = () => {
    handleScale(0.8,1,500)
    handleOpacity(0,1,500)
    handleRotation(state.rotationPosition,500)
    listItem.current.addEventListener("mousemove", parallax)
  }
  const handleOpacity = (initialOpacity,newOpacity,duration)=>{
     animate({
      fromValue:initialOpacity,
      toValue:newOpacity,
      onUpdate:(newOpacity,callback)=>{
            dispatch({type:"CHANGE/OPACITY",payload:newOpacity})
            callback()
      },
      onComplete:()=>{},
      duration:duration,
      easeMethod:easeMethod
     })
  }

  const handleScale = (initialScale,newScale,duration)=>{
    animate({
     fromValue:initialScale,
     toValue:newScale,
     onUpdate:(newScale,callback)=>{
           dispatch({type:"CHANGE/SCALE",payload:initialScale})
           callback()
     },
     onComplete:()=>{},
     duration:duration,
     easeMethod:easeMethod
    })
 }

 const handleRotation = (currentRotation,duration)=>{
  const newRotation = Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1)
  animate({
   fromValue:currentRotation,
   toValue:newRotation,
   onUpdate:(newOpacity,callback)=>{
         dispatch({type:"CHANGE/ROTATION",payload:newOpacity})
         callback()
   },
   onComplete:()=>{},
   duration:duration,
   easeMethod:easeMethod
  })
}
  const handleMouseLeave = () => {
    listItem.current.removeEventListener("mousemove", parallax)
    handleOpacity(1,0,800)
    handleRotation(state.rotationPosition,500)
    handleScale(1,initialState.scale,500)
    dispatch({
      type: "CHANGE/COORDINATES",
      payload: initialState.parallaxPos
    })
    
  }

    return (
        <>
            <Image parallaxPos={state.parallaxPos} opacity={state.opacity} scale={state.scale} rotationPosition={state.rotationPosition} urlKey={urlKey}/>
            <li className='menu-link-hidden' ref={listItem} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}><div className='menu-link' onClick={() => { 
              setTimeout(() => {
                navigate(`${route}`)
              }, 3400);
              timeLineFunc() 
            }}>{title}</div></li>
        </>
    )
}

export default Item