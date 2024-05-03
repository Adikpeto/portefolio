import React, { useRef, useEffect, useLayoutEffect } from 'react'
import "./style.scss"
import { useAppContext } from '../../contexts/appContext'
import { Plane } from "curtainsjs"
import { fs, vs } from './shaders'
import url from "../../images/new/3.jpg"
import Canvas from '../Canvas/Canvas'
function ImageCpn() {
    const planeRef = useRef()
    const { state } = useAppContext()
    const { scrollEffect } = state
    const someRef = useRef({ scrollEffect: 0 })

    useLayoutEffect(() => {
        const curtains = state.curtains
        if (state.container) {
            const planeParams = {
                vertexShader: vs,
                fragmentShader: fs,
                widthSegments: 40,
                heightSegments: 40,
                uniforms: {
                    direction: {
                        name: "uDirection",
                        type: "1f",
                        value: 0
                    },
                    time: {
                        name: "uTime",
                        type: "1f",
                        value: 0,
                    }
                }
            }
            const plane = new Plane(curtains, planeRef.current, planeParams)
            plane.onRender(() => {
                plane.uniforms.time.value++
            })
            return () => {
                plane.remove()
            };
        }

    }, [state.container, state.curtains])
    useEffect(() => {
        someRef.current.scrollEffect = scrollEffect
    }, [scrollEffect])
    return (
        <>
            <div className='img-divider' style={{ width: "20vw", height: "20vh" }} ref={planeRef}>
                <img className="img" src={url} data-sample="planeTexture" alt='plane' crossOrigin="anonymous" />
            </div>
            
        </>

    )
}

export default ImageCpn