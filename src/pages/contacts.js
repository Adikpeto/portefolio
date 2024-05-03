import * as React from "react"
import { useLayoutEffect, useReducer, useState, useRef } from "react"
import Layout from "../components/layout/layout"
import gsap from "gsap"
import "./contacts.scss"
import CusorCustom from "../components/CusorCustom"
import Strong from "../components/Strong/Strong"




const initialState = {

   parallaxPos: { x: 0, y: 0 },
   parallaxPosCtn: { x: 0, y: 0 }


}

function reducer(state, action) {
   switch (action.type) {


      case "CHANGE/COORDINATES":
         return { ...state, parallaxPos: action.payload }
         break;
      case "CHANGE/COORDINATESCTN":
         return { ...state, parallaxPosCtn: action.payload }
         break;

      default:
         throw new Error("Message")

   }
}



const ContactsPage = () => {
   const [state, dispatch] = useReducer(reducer, initialState)
   const app = useRef()
   const grobalTimeline = useRef()
   const containerref = useRef()
   const [contactemail, setcontactemail] = useState(false)
   const [contactlinked, setcontactlinked] = useState(false)



   // Parallax Container
   const parallaxCtn = (event) => {
      const speed = 5
      const x = (window.innerWidth - event.pageX * speed) / 100
      const y = (window.innerHeight - event.pageY * speed) / 100


      dispatch({
         type: "CHANGE/COORDINATESCTN",
         payload: { x: x, y: y }
      })
   }


   // Parallax Btn

   const parallax = (event) => {
      const speed = -2
      const x = (window.innerWidth - event.pageX * speed) / 100
      const y = (window.innerHeight - event.pageY * speed) / 100


      dispatch({
         type: "CHANGE/COORDINATES",
         payload: { x: x, y: y }
      })
   }


   // Mouse handle  Btn function


   const handleMouseEnter = () => {
      app.current.addEventListener("mousemove", parallax)
   }
   const handleMouseLeave = () => {
      app.current.removeEventListener("mousemove", parallax)

      dispatch({
         type: "CHANGE/COORDINATES",
         payload: initialState.parallaxPos
      })

   }



   // Mouse handle Container
   const handleMouseEnterCtn = () => {
      containerref.current.addEventListener("mousemove", parallaxCtn)
   }
   const handleMouseLeaveCtn = () => {
      containerref.current.removeEventListener("mousemove", parallaxCtn)

      dispatch({
         type: "CHANGE/COORDINATESCTN",
         payload: initialState.parallaxPosCtn
      })

   }



   useLayoutEffect(() => {

      const ctx = gsap.context(() => {
         grobalTimeline.current = gsap.timeline()
            .from(".contacts-text-top-title", {
               delay: 0.5,
               duration: 0.8,
               y: 200,
               skewY: 20,
               opacity: 0
            }).from(".contacts-from-title", {
               duration: 0.8,
               y: 200,
               skewY: 20,
               opacity: 0
            }, '-=1.5')

      }, app)



      return () => {
         ctx.revert()
      };
   }, [app])


   return (
      <>
         <CusorCustom entercontactemail={contactemail} entercontactlinked={contactlinked} />
         <Layout>
            <div ref={app} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className="contacts-container">
               <div className="contacts-form-container">
                  <div className="contacts-form">
                     <div className="contacts-hidden">
                        <div className="contacts-from-title">Envoyez moi un message.</div>
                     </div>
                     <div className="contacts-from-text">
                           N'hésite pas à me contacter en m'envoyant un message par email. Merci d'être professionnel et concis dans votre message et merci à vous.</div>
                     <input className="contacts-from-input" placeholder="Votre mail " />
                     <input className="contacts-from-input" placeholder="Objet " />
                     <textarea className="contacts-from-input" placeholder="Message" />
                     <div style={{ transform: `translate3D(${state.parallaxPos?.x}px , ${state.parallaxPos?.y}px, 0px)` }} className="btn-form">Envoyer</div>
                  </div>
               </div>
               <div className="contacts-text-container" ref={containerref} onMouseEnter={() => handleMouseEnterCtn()} onMouseLeave={() => {
                  handleMouseLeaveCtn()
                  setcontactemail(false)
                  setcontactlinked(false)
               }}>
                  <div className="contacts-text-top">
                     <div className="contacts-hidden transition" style={{ transform: `translate3D(${state.parallaxPosCtn?.x * 1.5}px , ${state.parallaxPosCtn?.y * 1.5}px, 0px)` }}>
                        <div className="contacts-text-top-title" >me contacter</div>
                     </div>
                     <div className="contacts-text-top-text transition" style={{ transform: `translate3D(${state.parallaxPosCtn?.x * 1.1}px , ${state.parallaxPosCtn?.y * 0.9}px, 0px)` }}>Avez-vous un projet en cours de réalisation ou un projet de rêve que vous aimeriez concrétiser? Êtes vous une <Strong color="#F8F7F8">entreprise</Strong> à la cherche de développeur pour un travail vite fait et bien fait ? Veuillez me contacter grâce à mes contacts tel que mon mail mon compte <Strong color="#F8F7F8">LinkedIn</Strong> ou mon <Strong color="#F8F7F8">numéro téléphonique</Strong>. Vous pouvez en plus si vous voulez me contacter en m'envoyant votre message par main avec le formulaire situé en droit. je suis totalement à votre écoute et prêt à vous <Strong color="#F8F7F8">offrir mes services et mes qualités.</Strong> </div>
                     <div className="contacts-text-top-other-contacts transition" style={{ transform: `translate3D(${state.parallaxPosCtn?.x * 0.3}px , ${state.parallaxPosCtn?.y * 0.3}px, 0px)` }}>autre contacts</div>
                     <div className="contacts-other-container transition" style={{ transform: `translate3D(${state.parallaxPosCtn?.x}px , ${state.parallaxPosCtn?.y}px, 0px)` }}>
                        <a target="__blank" href="https://linkedin.com/adikpeto-aristide-878757" className="contacts-other"
                           onMouseEnter={() => {
                              setcontactlinked(true)
                              setcontactemail(false)
                           }}
                        >linkedin</a>
                     </div>
                     <div className="contacts-other-container transition" style={{ transform: `translate3D(${state.parallaxPosCtn?.x * 0.5}px , ${state.parallaxPosCtn?.y * 0.5}px, 0px)` }}>
                        <a href="mailto:adikpetoaristidezeus@gmail.com" className="contacts-other"
                           onMouseEnter={() => {
                              setcontactlinked(false)
                              setcontactemail(true)
                           }}
                        >email</a>
                     </div>
                  </div>
                  <div className="contacts-text-footer">
                     <div className="contacts-text-num">+229 54 17 26 84</div>
                  </div>
               </div>
            </div>
         </Layout>
      </>

   )
}

export const Head = () => <title>Contacts page</title>
export default ContactsPage