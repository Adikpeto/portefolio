import React, { useRef, useLayoutEffect } from 'react'
import Menu from '../menu/menu'
import { gsap } from 'gsap'
import "./layout.scss"
import Canvas from '../Canvas/Canvas'

function Layout({ children,nameTransparent = false }) {


  const app = React.useRef()
  const animeTimeLine = useRef()

  useLayoutEffect(() => {


    const ctx = gsap.context(() => {
      animeTimeLine.current = gsap.timeline()
        .to(".header-btn-border", {
          duration: 2,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          ease: "power2.easeIn"

        }).to(".hidden-layer", {
          height: "260px",
          ease: "power2.easeIn"
        }, "-=1.6")
    }, app)


    return () => {
      ctx.revert()
    };
  }, [app])









  const scrollContainer = React.useRef(<div></div>)

  const skewConfigs = {
    ease: 0.05,
    rounded: 0,
    current: 0,
    previous: 0,
  }




  React.useEffect(() => {
    document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  }, [])

  React.useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  }, [])


  const skewScrolling = () => {
    scrollContainer.current = document.querySelector('.scroll-container')


    skewConfigs.current = window.scrollY
    skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100
    const difference = skewConfigs.current - skewConfigs.rounded
    const acceleration = difference / window.screen.width
    const velocity = +acceleration
    const skew = velocity * (window.innerWidth > 767 ? 7.5 : 0.4)

    scrollContainer.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, ${skew * -.000008}, 0, 0, 1, 0, 0, 0, 0, 1) translate3d(0,-${skewConfigs.rounded}px,0) skewX(${skew / 4}deg) skewY(${skew * 2}deg)`




    requestAnimationFrame(() => skewScrolling())
  }


  return (
    
      <div className='layout-container'>
        
        <Menu nameTransparent={nameTransparent}/>
        <main>
          <main ref={app} className="container">
            <div ref={scrollContainer} style={{minWidth:"100vw",maxWidth:"100vw"}} className="scroll-container">
              {children}
            </div>
          </main>
        </main>
      </div>

   

  )
}

export default Layout