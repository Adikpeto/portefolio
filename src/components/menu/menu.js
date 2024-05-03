import React, { useReducer } from 'react'
import { useRef, useLayoutEffect, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import "./menu.scss"
import { itemsList } from './dataItem'
import Item from './Item'







function Menu({nameTransparent}) {
  
  const [menuState, setmenuState] = useState(false)
  

  const menuContainer = useRef()
  const timelineSvg = useRef()
  const timelinerevesed = useRef()


  useLayoutEffect(() => {
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
    const initial = "M0,1005S175,995,500,995s500,5,500,5V0H0Z"

    
    const curveinsersed = "M0 -12S175 230 500 230s500 -230 500 -230V0H0Z"
    const ctx = gsap.context(() => {
      timelinerevesed.current = gsap.timeline()
      .to("#svg",{
        duration: 0.8,
        attr: { d: curveinsersed },
        ease: "power2.easeIn"
      })
      .to("#svg",{
        duration: 0.8,
        attr: { d: flat },
        ease: "linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)"
      }).paused(true)

      timelineSvg.current = gsap.timeline()
        .to(".menu-logo", {
          duration: 0.8,
          yPercent: -100,
          skewY: 10,
          ease: "power2.easeIn"
        })
        .to("#svg", {
          duration: 0.8,
          attr: { d: curve },
          ease: "linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)"
        })
        .to("#svg", {
          duration: 0.5,
          attr: { d: initial },
          ease: "linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)"
        }).to(".menu-body", {
          // clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          // ease:"power2.easeIn"
          duration: 0.8,
          opacity: 1,
          ease: "power2.easeIn"
        }, "-=0.2").from(".menu-link", {
          duration: 0.8,
          y: 200,
          skewY: 10,
          stagger: {
            amount: 0.5
          }
        })
        .paused(true)

    }, menuContainer)


    return () => {
      ctx.revert()
    };
  }, [menuContainer])




  useEffect(() => {
    return () => {
      if (!menuState)
        timelineSvg.current.play()
      else
        timelineSvg.current.reversed(true)


    };
  }, [menuState])



  return (

    <div ref={menuContainer} className='menu-container'>
      <div className='menu-top'>
        <div className='hidden'><div className='menu-logo' style={{opacity:nameTransparent ? 0 : 1}}>adikpeto aristide</div></div>
        <div className='menu-burger-container'>
          <div className='menu-burger'>
            <div className='menu-burger-text'>MENU</div>
            <div className='menu-burger-svg' onClick={() => setmenuState(menuState ? false : true)}></div>
          </div>
        </div>
      </div>
      <div className='menu'>

        <svg style={{ position: "absolute", width: "100%", height: "110%", zIndex: "-1" }} fill='#0c0f0a' viewBox='0 0 1000 1000' preserveAspectRatio='none'>
          <path id='svg' style={{ transform: "translateY(-5px)" }} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
        </svg>
        <div className='menu-body'>
        
          <div className='menu-links-container'>
            <div className='menu-links'>
              <ul className='menu-links-liste'>
                {itemsList.map((item,key)=>{
                   return <Item urlKey={item.imgUrl} timeLineFunc={()=>timelineSvg.current.reversed(true)} title={item.title} route={item.route}/>
                })}
             
              </ul>
            </div>
            <div className='menu-links-footer'>
              <div className='menu-footer-descript-contacts'>
                <div className='menu-small-title'>Contactez moi</div>
                <div className='menu-small-text'>
                  Contactez moi directement en m'envoyant un message par gmail en m'appelant directement sur 
                  mon numéro ou en m'ecrivant sur whatsapp. Merci pour votre compréhension.
                </div>
              </div>

              <div className='menu-footer-contacts'>
                adikpetoaristidezeus@gmail.com <br />
                +229 54 17 26 84
              </div>
            </div>
          </div>
          <div className='menu-descriptions'>
            <div className='menu-descriptions-name'>adikpeto aristide site web</div>
            <div className='menu-descriptions-small-profil'>
              <div className='menu-small-title'>Ma pensée</div>
              <div className='menu-small-text'>
                Développeur chevronné dans plusieurs langages de
                développement web. Je souhaite évoluer dans votre entreprise et écloppements web. Je souhaite évoluer dans votre entreprise et
                travailler sur vos projets.
              </div>
            </div>
            <div className='menu-competence'>
              <div className='menu-competence-title'>
                développeur web;m<div className='menu-competence-sticker'></div>bile et desktop
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Menu