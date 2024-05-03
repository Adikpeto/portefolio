import React, { useRef, useLayoutEffect } from 'react'
import "./style.scss"
import AppContext, { useAppContext } from '../../contexts/appContext'
function Canvas() {
    const container = useRef()

    const { state, dispatch } = useAppContext()
    const someRef = useRef({ scrollEffect: 0 })

    useLayoutEffect(() => {
        const {curtains} =  state 

        if (container.current && !curtains.container) {
            curtains.setContainer(container.current)
            curtains.onContextLost(() => { curtains.restoreContext() })?.onRender(() => {
                const newScrollEffect = curtains?.lerp(someRef.current.scrollEffect, 0, 0.075)
                someRef.current.scrollEffect = newScrollEffect
                dispatch({
                    type: "SET_SCROLL_EFFECT",
                    payload: newScrollEffect
                })
            })?.onScroll(()=>{
                const delta = curtains.getScrollDeltas()
                delta.y = -delta.y
                
                const newScrollEffect = curtains.lerp(
                    someRef.current.scrollEffect,
                    delta.y * 1.5,
                    0.5
                )

                someRef.current.scrollEffect = newScrollEffect
                dispatch({
                    type: "SET_SCROLL_EFFECT",
                    payload: newScrollEffect
                })
            })

            dispatch({
                type: "SET_CURTAINS_CONTAINER",
                payload: curtains.container
            })
        }
        return () => {
            curtains.dispose()
        }
    }, [container, state, dispatch])
    return (
        <div className='Canvas' style={{width:"100%",height:"100%",position:"fixed"}} ref={container}>Canvas</div>
    )
}

export default Canvas