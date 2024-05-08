import * as React from "react"
import { useRef, useLayoutEffect, useState, useReducer } from "react"
import Layout from "../components/layout/layout"
import { dataCompetence } from "../components/competence/dataCompetence"
import { useInView } from "react-intersection-observer"
import { gsap } from "gsap"
import "./home.scss"
import Competence from "../components/competence/Competence"
import { useEffect } from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { navigate } from "gatsby"
import CusorCustom from "../components/CusorCustom"
import Strong from "../components/Strong/Strong"


const initialState = {

  parallaxPos: { x: 0, y: 0 },
  parallaxPosProjet: { x: 0, y: 0 },
  parallaxPosAP1: { x: -35, y: 200 }

}

function reducer(state, action) {
  switch (action.type) {


    case "CHANGE/COORDINATES":
      return { ...state, parallaxPos: action.payload }
      break;
    case "CHANGE/COORDINATESPROJECT":
      return { ...state, parallaxPosProject: action.payload }
      break;

    case "CHANGE/COORDINATESAP1":
      return { ...state, parallaxPosAP1: action.payload }
      break;



    default:
      throw new Error("Message")

  }
}


const Home = () => {
  const app = React.useRef()
  const animeTimeLine = useRef()
  const aproposcardimgtimeline = useRef()
  const [state, dispatch] = useReducer(reducer, initialState)
  const timelinetitle = useRef()
  const imgprofilRef = useRef(null)
  const targetRef = useRef(null)
  const projectsRef = useRef(null)
  const ap1ref = useRef(null)
  const [cananime, setcananime] = React.useState(true)
  const [nameOpacity, setnameOpacity] = React.useState(false)
  const [activecmp, setactivecmp] = useState(1)
  const [activecmptitle, setactivecmptitle] = useState("")
  const [isactive, setisactive] = useState(false)
  const [activecmpinfo, setactivecmpinfo] = useState([])
  const [activeclass, setactiveclass] = useState(false)

  const [mousevisible, setmousevisible] = useState(false)
  const [cursorentry, setcursorentry] = useState(false)
  const [mouselarge, setmouselarge] = useState(false)
  const [infosend, setinfosend] = useState(false)





  const { ref: titleRef, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const { ref: titlesmallref, inView: titlesmallview, entry: titlesmallrentry } = useInView({
    threshold: 0.8,
    delay: 500
  })

  const { ref: dividerRef, inView: dividerView, entry: dividerEnty } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const { ref: btnprojetref, inView: btnprojetview, entry: btnprojetentry } = useInView({
    /* Optional options */
    threshold: 0,
  });



  // Func Img

  const parallax = (event) => {
    
    const speed = 5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100
    dispatch({
      type: "CHANGE/COORDINATES",
      payload: { x: x, y: y }
    })
   

  }

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined') {
      imgprofilRef.current.addEventListener("mousemove", parallax)
    }
    
  }
  const handleMouseLeave = () => {
    if (typeof window !== 'undefined') {
      imgprofilRef.current.removeEventListener("mousemove", parallax)
    }
   

    dispatch({
      type: "CHANGE/COORDINATES",
      payload: initialState.parallaxPos
    })

  }





  // Func Img

  const parallaxProject = (event) => {
    const speed = -1.5

    const x = (window.innerWidth - event.pageX * speed) / 110
    const y = (window.innerHeight - event.pageY * speed) / 110


    dispatch({
      type: "CHANGE/COORDINATESPROJECT",
      payload: { x: x, y: y }
    })
  }

  const handleMouseEnterProject = () => {
    if (typeof window !== 'undefined') {
      projectsRef.current.addEventListener("mousemove", parallaxProject)
    }
   
  }
  const handleMouseLeaveProject = () => {
    
    if (typeof window !== 'undefined') {
      projectsRef.current.removeEventListener("mousemove", parallaxProject)
    }
    dispatch({
      type: "CHANGE/COORDINATESPROJECT",
      payload: initialState.parallaxPosProjet
    })

  }

  // Paralax AP1


  const parallaxAP1 = (event) => {
    const speed = 5

    const x = (window.innerWidth - event.pageX) / 10
    const y = (window.innerHeight - event.pageY) / 10


    dispatch({
      type: "CHANGE/COORDINATESAP1",
      payload: { x: x, y: y }
    })
  }

  const handleMouseEnterAP1 = () => {
    if (typeof window !== 'undefined') {
      ap1ref.current.addEventListener("mousemove", parallaxAP1)
    }
    
  }
  const handleMouseLeaveAP1 = () => {
    if (typeof window !== 'undefined') {
      ap1ref.current.removeEventListener("mousemove", parallaxAP1)
    }
   

    dispatch({
      type: "CHANGE/COORDINATESAP1",
      payload: initialState.parallaxPosAP1
    })

  }






  // useLayoutEffect(() => {

  //   const ctx = gsap.context(() => {
  //     timelinetitle.current = gsap.timeline()
  //       .from(".competence-title", {
  //         duration: 0.8,
  //         y: 200,
  //         skewY: 10,
  //         opacity: 0
  //       }).paused(true)

  //   }, app)



  //   return () => {
  //     ctx.revert()
  //   };
  // }, [app])


  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      animeTimeLine.current = gsap.timeline()
        .to(".header-btn-border", {
          duration: 2,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
          ease: "power2.easeIn"

        }).from(".header-text-name", {
          // height: "260px",
          duration: 0.7,
          y: 250,
          skewY: 10,
          opacity: 0,
          ease: "power4.easeIn"
        }, "-=1.6")
        .from(".header-text-poste", {

          opacity: 0,
          ease: "power2.easeIn"
        }, "-=1.3")




    }, app)



    return () => {
      ctx.revert()
    };
  }, [app])




  useEffect(() => {
    function scrollview() {
    
      const fixedExpreiencestextStyle = document.querySelector(".fixed-experiences-text").style
      if (titlesmallview) {
        fixedExpreiencestextStyle.opacity = 1

      }

      else {
        fixedExpreiencestextStyle.opacity = 0

      }

    }
    scrollview()
  }, [titlesmallview])


  useEffect(() => {
    function cursorviewfunc() {
      if (btnprojetview) {
        setcursorentry(true)
      } else {
        setcursorentry(false)
      }
    }
    cursorviewfunc()
  }, [btnprojetview])



  useEffect(() => {
    function start() {

      const competence = document.querySelector(".competence-title")
      const fixedExpreiencestextStyle = document.querySelector(".fixed-experiences-text").style
      if (inView === true) {

        fixedExpreiencestextStyle.opacity = 0

        if (cananime === true) {
          competence.style.opacity = 1
          competence.style.transform = "translateY(-50px) skewY(0deg)"
          setcananime(false)
        }


      } else {
        fixedExpreiencestextStyle.opacity = 0
        if (cananime === true) {
          competence.style.opacity = 0
          competence.style.transform = "translateY(100px) skewY(10deg)"
        }

      }
      console.log(inView);
    }
    start()
  }, [inView])

  useEffect(() => {
    function start() {
      const projetContainer = document.querySelector(".projet-container")
      const divider = document.querySelectorAll(".img-divider")[0]

      if (dividerView === true) {


        setnameOpacity(true)

        // divider.style.width = "100vw"
        // divider.style.height = "500vh"
        // divider.style.transform = "translateY(-40vh)"
        setmousevisible(true)

        // setTimeout(() => {
        //   projetContainer.style.opacity = "1"
        // }, 500);




      } else {
        setmousevisible(false)
        setnameOpacity(false)
        // divider.style.position = "static"
        // divider.style.width = "60%"
        // divider.style.height = "500px"
        // divider.style.transform = "translateY(0%)"
        // projetContainer.style.opacity = "0"

      }
      console.log(dividerView);
    }

    start()
  }, [dividerView])


  useEffect(() => {
    function startanimecmp() {
      if (isactive === true) {
        setactiveclass(false)
        setTimeout(() => {
          setactiveclass(true)
          setisactive(true)
        }, 500);
      } else {
        setactiveclass(false)
      }
    }
    startanimecmp()
  }, [isactive])

  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  let x = 0
  if (typeof window !== 'undefined') {
    x = useTransform(scrollYProgress, [0, 1], [window.innerWidth > 767 ? "30%" : "40%", window.innerWidth > 767 ? "-50%" : "-110%"])
  }

  // const x = useTransform(scrollYProgress, [0, 1], ["30%", "-50%"])

  useEffect(() => {
    console.log(x);
  }, [x?.current])
  return (
    <div ref={app}>
      <CusorCustom mouselarge={mouselarge} infosend={infosend} />

      <div className="fixed-back">
        <div className="fixed-experiences-text"><div className="fixed-experience-im"></div>my profil</div>
        <div className={activeclass ? "fixed-experience-info is-active" : "fixed-experience-info"}>
          <div className="title-info">#{activecmp} {activecmptitle}</div>
          {activecmpinfo.map((item, key) => {
            return <div key={key} className="info-hidden">
              <div className="info-text">{item}</div>
            </div>
          })}

        </div>


        <div className="fixed-back-blur">
          <div className="fixed-back-blur-img" style={{ transform: `translate3D(${state.parallaxPosAP1?.x}px , ${state.parallaxPosAP1?.y}px, 0px)` }}></div>
        </div>

      </div>
      <Layout nameTransparent={nameOpacity}>

        <div ref={ap1ref} onMouseEnter={() => handleMouseEnterAP1()} onMouseLeave={() => handleMouseLeaveAP1()}>
          <div ref={imgprofilRef} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className="header">
            <div className="header-text" onMouseEnter={() => setmouselarge(true)} onMouseLeave={() => setmouselarge(false)}>
              <div className="hidden-layer-custom"><div className="header-text-name">adikpeto m.aristide</div></div>
              <div className="header-text-poste">Développeur web mobile and desktop</div>
              <div className="header-btn-container"><div className="header-btn" onClick={() => navigate(`/contacts`)}>contacts us</div><div className="header-btn-border">contacts</div></div>
            </div>
            <div className="header-img">
              <div className="img-profil" style={{ transform: `rotate(-5deg) translate3D(${state.parallaxPos?.x}px , ${state.parallaxPos?.y}px, 0px)` }}></div>
              <svg id="visual" style={{ visibility: "hidden" }} viewBox="0 0 900 600" width="500" height="500" version="1.1"><g transform="translate(464.24159891029103 305.632296685166)"><path d="M132 -137.5C161.6 -102.3 169.8 -51.1 179.6 9.8C189.4 70.7 200.8 141.4 171.1 166.4C141.4 191.4 70.7 170.7 10.5 160.2C-49.7 149.7 -99.5 149.5 -142.1 124.5C-184.8 99.5 -220.4 49.7 -218.6 1.8C-216.9 -46.2 -177.7 -92.4 -135.1 -127.6C-92.4 -162.7 -46.2 -186.9 2.5 -189.3C51.1 -191.8 102.3 -172.6 132 -137.5" fill="#000"></path></g></svg>
            </div>
          </div>

          <div className="container-body">

            <div className="a-propos-container" ref={titlesmallref} style={{ maxWidth: "80%", lineHeight: "1rem" }}>
              <div className="a-propos-card">
                <div className="a-propos-title">A propos de moi.</div>
                <div className="a-propos-text">
                  Depuis que je suis tout petit , j'ai toujours été fasciné par la <Strong>technologie</Strong>. Dans mon enfance ma curiosité m'a poussé à avoir un engouement démesuré au documentaire scientifique tourné vers la technologie. J'ai découvert le code <Strong>( développement informatique ; programmation )</Strong> depuis la classe de seconde du second cycle et je m'y suis attaché. Grâce à mon père qui était instituteur, j'ai pu apprendre les vertus de <Strong>la persévérance, de la patience et de la confiance en soi</Strong>.
                  {/* Toutefois, mon vilain défaut qui a toujours été ma curiosité m'a poussé à m'intéresser également à la littérature, plus précisément à la mythologie grecque. Enfin, je suis une personne dynamique, confiante en elle-même, persévérante et curieuse. */}
                </div>
                <div className="a-propos-card-img-container" onMouseEnter={() => setmouselarge(true)} onMouseLeave={() => setmouselarge(false)}>
                  <div className="a-propos-card-img img-2"></div>
                </div>
              </div>
              <div className="a-propos-card">
                <div className="a-propos-title">Mon objectif de développeur.</div>
                <div className="a-propos-text">

                  Vous êtes une <Strong>entreprise</Strong> à la recherche du travail bien fait dans le domaine du <Strong>développement web du développement mobile et du desktop</Strong> je vous aide à réaliser vos projets en apportant ma pierre à l'édifice en travaillant d'arrache-pied et en vous accompagnant dans de nouvelles aventures. En tant que <Strong>développeur full-stack</Strong>, je propose aussi mes services à toute personne ayant des projets personnels à réaliser en un temps record.
                </div>
                <div className="a-propos-card-img-container" onMouseEnter={() => setmouselarge(true)} onMouseLeave={() => setmouselarge(false)}>
                  <div className="a-propos-card-img img-3"></div>
                </div>
              </div>
              <div className="a-propos-card">
                <div className="a-propos-title">Mes autres passions.</div>
                <div className="a-propos-text">
                  Notre monde n'a pas besoin d'âmes tièdes mais de cœur brûlant et passionnée.
                  Pour ma part ma  passion première est tournée vers la <Strong>technologie</Strong>.C'est pourquoi je suis passionné par tout ce qui touche à la science et à la technologie, y compris les <Strong>jeux vidéo</Strong>. Cependant tout homme ne peux rester sans avoir une passion dans le domaine du sport ce qui m'as fait tourner vers le <Strong>basket ball</Strong>. En pratiquant le basket ball je me sens épanouie et dynamique. Enfin j'éprouve aussi grande passion à la <Strong>lecture</Strong>. Une passion que j'ai gardé depuis mon enfance.

                </div>
                <div className="a-propos-card-img-container" onMouseEnter={() => setmouselarge(true)} onMouseLeave={() => setmouselarge(false)}>
                  <div className="a-propos-card-img"></div>
                </div>
              </div>
            </div>
            {/* <div className="header-text-poste-custom" ref={titlesmallref} style={{ maxWidth: "30%",fontSize:"0.8rem",lineHeight: "1rem", marginTop: "11rem" }}>J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma frontend. mes experiences
            Développeur et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi.</div> */}
            <div className="hidden-exp">
              <div className="competence-title title-big" ref={titleRef}>meilleurs experiences</div>
            </div>



            <div className="text-container">

              <div className="header-text-poste">
                {dataCompetence.map((item, key) => {
                  const activefunc = () => {
                    setactivecmpinfo(item.info)
                    setactivecmp(key + 1)
                    setactivecmptitle(item.skill)
                    setisactive(true)

                  }
                  const notactivefunc = () => {
                    setisactive(prev => {
                      if (prev === true && key + 1 !== activecmp) {
                        return true
                      } else {
                        return false
                      }
                    })
                  }
                  return <Competence key={key} notactive={() => notactivefunc()} active={() => activefunc()} title={item.skill} description={item.description} />
                })}

              </div>

              <div className="competence-title title-big" style={{ marginTop: "4rem", marginBottom: "7rem" }}>Quelsques recents projets</div>


            </div>



            <section ref={targetRef} className="fixed-projet-container">


              <div className="fixed-projet-carousel">
                <motion.div style={{ x }} className="fixed-card-container">

                  <div className="fixed-card-projet" onMouseEnter={() => setinfosend(true)} onMouseLeave={() => setinfosend(false)}>
                    <div className="fixed-projet-img">

                      <div ref={projectsRef} className="fixed-card-img-container">



                      </div>
                    </div>
                    <div className="fixed-projet-text">
                      <div className="fixed-projet-date">2022 - 2023 Novembre</div>
                      <div>
                        <div className="fixed-projet-name">Sell Pigs - <br /> Projet form seller pigs.</div>
                        <div className="fixed-projet-description">Réalisation de vos sites, pages et applications à l’aide de ma frontend. mes experiences Développeur et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi.</div>
                      </div>

                      <div className="fixed-projet-btn-container">
                        <div className="fixed-projet-btn">voir plus</div>
                      </div>


                    </div>
                  </div>

                  <div className="fixed-card-projet" onMouseEnter={() => setinfosend(true)} onMouseLeave={() => setinfosend(false)}>
                    <div className="fixed-projet-img">

                      <div ref={projectsRef} onMouseEnter={() => handleMouseEnterProject()} onMouseLeave={() => handleMouseLeaveProject()} style={{ transform: `rotate(15deg) translate3D(${state.parallaxPosProject?.x}px , ${state.parallaxPosProject?.y}px, 0px)` }} className="fixed-card-img-container">



                      </div>
                    </div>
                    <div className="fixed-projet-text">
                      <div className="fixed-projet-date">2022 - 2023 Novembre</div>
                      <div>
                        <div className="fixed-projet-name">Farm Pigs - <br /> Projet form farou pigs.</div>
                        <div className="fixed-projet-description">Réalisation de vos sites, pages et applications à l’aide de ma frontend.  pages et applications à l’aide de ma frontend. mes experiences Développeur et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi.</div>
                      </div>
                      <div className="fixed-projet-btn-container">
                        <div className="fixed-projet-btn">voir plus</div>
                      </div>


                    </div>
                  </div>


                  <div className="fixed-card-projet" onMouseEnter={() => setinfosend(true)} onMouseLeave={() => setinfosend(false)}>
                    <div className="fixed-projet-img">

                      <div ref={projectsRef} onMouseEnter={() => handleMouseEnterProject()} onMouseLeave={() => handleMouseLeaveProject()} style={{ transform: `rotate(15deg) translate3D(${state.parallaxPosProject?.x}px , ${state.parallaxPosProject?.y}px, 0px)` }} className="fixed-card-img-container">


                      </div>
                    </div>
                    <div className="fixed-projet-text">
                      <div className="fixed-projet-date">2022 - 2023 Novembre</div>
                      <div>
                        <div className="fixed-projet-name">Pigs - <br />Form farou pigs.</div>
                        <div className="fixed-projet-description">Pages et applications à l’aide de ma frontend. mes experiences Développeur et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi.</div>
                      </div>
                      <div className="fixed-projet-btn-container">
                        <div className="fixed-projet-btn">voir plus</div>
                      </div>


                    </div>
                  </div>



                  <div className="fixed-card-projet" onMouseEnter={() => setinfosend(true)} onMouseLeave={() => setinfosend(false)}>
                    <div className="fixed-projet-img">

                      <div className="fixed-card-img-container">


                      </div>
                    </div>
                    <div className="fixed-projet-text">
                      <div className="fixed-projet-date">2022 - 2023 Novembre</div>
                      <div>
                        <div className="fixed-projet-name">Commerce Projection - <br />Form farou pigs.</div>
                        <div className="fixed-projet-description">A l’aide de ma frontend. pages et applications à l’aide de ma frontend. mes experiences Développeur et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi.</div>
                      </div>
                      <div className="fixed-projet-btn-container">
                        <div className="fixed-projet-btn" ref={btnprojetref}>voir plus</div>
                      </div>


                    </div>
                  </div>

                </motion.div>


              </div>

            </section>


            {/* <div ref={dividerRef} className="img-divider">
          
          </div> */}

          </div>
        </div>

      </Layout>
    </div>

  )
}

export const Head = () => <title>Home page</title>
export default Home