import React, { useEffect, useRef, useState } from 'react'
import { motion, useTransform, useScroll } from "framer-motion"

function FolioCard() {

    const refscroll = useRef(null)
    const targetRef = useRef(null)

    const {scrollXProgress} = useScroll({
        target:targetRef
    })
    const x = useTransform(scrollXProgress,[0,1],["1%","-95%"])
    return (

        <div className="projet-text-container">
            {/* <div className="title-big" style={{ wordBreak: "keep-all", wordWrap: "normal", color: "#161616" }}>
                MY <br />PR <br />OJ <br />ET <br />S
            </div> */}
            <div className='projet-scroll' ref={targetRef}>
                <div className='projet-content'>
                    <motion.div style={{x}} className='projets'>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                        <div className='card-item-projet'></div>
                    </motion.div>
                </div>
            </div>
            {/* <div className="projet-container">
                <div className="projet m">

                </div>
                <div className="projet pm"></div>
                <div className="projet t">
                    <div className="small-title">This projet is my rencent projet.</div>
                    <div className="small">J’aimerais et applications à l’aide de ma frontend et backend, mais aussi.</div>
                </div>
                <div className="projet dp"></div>



            </div> */}
        </div>
    )
}

export default FolioCard