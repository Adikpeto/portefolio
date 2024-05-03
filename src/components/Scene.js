import React from 'react'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
// import obj from "../model/lamps.obj"

function Scene() {
    const obj = useLoader(OBJLoader, "../model/lamps.obj")
    return <primitive object={obj} />
}

export default Scene