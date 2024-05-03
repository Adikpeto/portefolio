import React, { useRef, useReducer } from 'react'
import { gsap } from 'gsap'
import { motion, MotionConfig } from 'framer-motion'
import { navigate } from 'gatsby'
import "./workCard.scss"
import { AnimatePresence } from 'framer-motion'


const initialState = {

    parallaxPos: { x: 0, y: 0 },

}

function reducer(state, action) {
    switch (action.type) {


        case "CHANGE/COORDINATES":
            return { ...state, parallaxPos: action.payload }
            break;



        default:
            throw new Error("Message")

    }
}

function WorkCard({ projet }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const svgContainer = React.useRef(<div></div>)
    const workContainer = React.useRef(<div></div>)
    const timelineSvg = React.useRef()
    const container = React.useRef()

    const parallax = (event) => {
        const speed = 3
        const x = (window.innerWidth - event.pageX * speed) / 100
        const y = (window.innerHeight - event.pageY * speed) / 100


        dispatch({
            type: "CHANGE/COORDINATES",
            payload: { x: x, y: y }
        })
    }

    const handleMouseEnter = () => {
        workContainer.current.addEventListener("mousemove", parallax)
    }
    const handleMouseLeave = () => {
        workContainer.current.removeEventListener("mousemove", parallax)

        dispatch({
            type: "CHANGE/COORDINATES",
            payload: initialState.parallaxPos
        })

    }


    React.useEffect(() => {
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        const initial = "M0,1005S175,995,500,995s500,5,500,5V0H0Z"

        const ctx = gsap.context(() => {

            timelineSvg.current = gsap.timeline()


                .to("#svg", {
                    duration: 0.8,
                    attr: { d: curve },
                    ease: "power2.easeIn"
                })
                .to("#svg", {
                    duration: 0.5,
                    attr: { d: initial },
                    ease: "power2.easeIn"
                })
                .to(".work-svg-hover", {
                    opacity: 1,
                    ease: "power2.easeIn"
                }, "-=0.5").from(".work-title-custome", {
                    y: 250,
                    skewY: 10,
                    ease: "power2.easeIn"
                }, "-=0.4").paused(true)




        }, workContainer)





    }, [workContainer])



    React.useEffect(() => {
        function resizeSvgConatiner() {
            const sizeFunc = () => {
                try {
                    const infosContainerBounding = document.querySelector(".work-infos-container")?.getBoundingClientRect()
                    svgContainer.current.style.width = `${infosContainerBounding.width}px`
                    svgContainer.current.style.height = `${infosContainerBounding.height}px`
                } catch (error) {
                    console.log(error);
                }
             

            }
            sizeFunc()

            window.addEventListener("resize", () => sizeFunc())


        }
        resizeSvgConatiner()
    }, [])
    return (
        <div onMouseLeave={() => {
            timelineSvg.current.reversed(true)
            handleMouseLeave()
        }} onMouseEnter={() => {
            timelineSvg.current.play()
            handleMouseEnter()
        }} ref={workContainer} style={{ transform: `translate3D(${state.parallaxPos?.x}px , ${state.parallaxPos?.y}px, 0px)` }} className='work-container'>
            <div ref={svgContainer} className='work-svg-container'>
                <div className='work-svg-hover'>
                    <div className='work-date'>{projet.date}</div>
                    <div className='hidden-text'> <div className='work-title work-title-custome'>{projet.title}</div></div>
                    <div className='work-small-text'>{projet.descriptionProjet}</div>
                    <div className='work-svg-btn' onClick={() => navigate("/projets/")}>VOIR TOUT</div>
                </div>
                <div className='work-svg'>
                    <svg fill='#000' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
                        <path id='svg' style={{ transform: "translateY(-4px)" }} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
                    </svg>
                </div>


            </div>
            <div className='work-infos-container'>
                <div className='work-text'>
                    <div className='work-date'>{projet.date}</div>
                    <div className='hidden-text'><div className='work-title work-title-custome-infos'>{projet.title}</div></div>
                    <div className='work-small-title'>{projet.titleProjet}</div>
                    <div className='work-small-text'>{projet.descriptionProjet}</div>
                </div>

                <div className='work-img'>
                    <div className='work-img-tab work-img-back'></div>


                    <MotionConfig transition={{ type: "spring", duration: 2, delay: 2 }}>

                        <motion.div
                            className='work-img-laptop work-img-back'
                            animate={{ scale: 1.2 }}
                            exit={{ scale: 3 }}

                        >

                        </motion.div>


                    </MotionConfig>


                    <div className='work-img-phone work-img-back'></div>
                </div>
            </div>


        </div>
    )
}

export default WorkCard