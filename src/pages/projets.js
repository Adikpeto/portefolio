import React, { useRef, useLayoutEffect, useEffect, useReducer } from 'react'
import "./projet.scss"
import Layout from '../components/layout/layout'
import { gsap } from 'gsap'
import { motion, MotionConfig } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const initialState = {

  parallaxPos: { x: 90, y: 0 },

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


function Projet() {
  const projets = useRef()
  const imageProjet = useRef()
  const timelineCaptures = useRef()
  const [state, dispatch] = useReducer(reducer, initialState)


  const parallax = (event) => {
    const speed = -10
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100


    dispatch({
      type: "CHANGE/COORDINATES",
      payload: { x: x, y: y }
    })
  }

  const handleMouseEnter = () => {
    imageProjet.current.addEventListener("mousemove", parallax)
  }
  const handleMouseLeave = () => {
    imageProjet.current.removeEventListener("mousemove", parallax)

    dispatch({
      type: "CHANGE/COORDINATES",
      payload: initialState.parallaxPos
    })

  }


  useLayoutEffect(() => {



    const ctx = gsap.context(() => {
      timelineCaptures.current = gsap.timeline()
        .to(".capture-container", {
          duration: 100,
          xPercent: -100,
          ease: "power2.easeIn"
        }).paused(true)

    }, projets)


    return () => {
      ctx.revert()
    };
  }, [projets])

  return (

    <>
      <div className="fixed-back">


        <div className="fixed-back-blur">
          <div className="fixed-back-blur-img"></div>
        </div>

      </div>
      <Layout>
        <div ref={projets} className='container-projet'>
          <div className='header-projet'>
            <div className='header-top'>
              <div className='header-top-text'>
                <div className='header-top-title'>Ma contribution dans ce projet</div>
                <div className='header-top-small-text'>Développeur web front-end Développeur back end </div>
              </div>
            </div>

            <div className='header' style={{ marginTop: 0,marginBottom: "5rem"}}>
              <div className='header-text-container'>
                <div className='header-text-date'>2020-2023</div>
                <div className='header-text-title'>Fashion -
                  Développement web.</div>
              </div>
              {/* <MotionConfig transition={{ type: "spring", duration: 1 }}>
          <AnimatePresence>
            <motion.div style={{transform:'translateX(100%)'}} className='header-img-transform'
              initial={{ scale: 0.8, rotate: "5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 2 }}


            ></motion.div>
          </AnimatePresence>

        </MotionConfig> */}
              <div ref={imageProjet} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()} className='header-img-transform'

                style={{ transform: `translate3D(${state.parallaxPos?.x}px , ${state.parallaxPos?.y}px, 0px)` }}
              ></div>

            </div>
          </div>


          <div className='body-projet'>

            <div className='text-container'>
              <div className='title-container'>
                <div className='projet-date'>2022 - 2023</div>
                <div className='h1'>Objectif du projet</div>
              </div>
              <div className='text-small-container'>
                {/* <div className='text-title'>Dans plusieurs langages de développement web. Je souhaite évoluer </div> */}
                <div className='header-text-poste-custom'>La création d’un site web de commerce en ligne demande du temps de développement et un grand budget de développement. Pour pallier à ce problème j’ai développé un Template web de site e-commerce de vente de produit électronique.</div>
              </div>
            </div>


            <div className='text-container margin-top'>
              <div className='title-container'>
                <div className='h2'>Histoire du projet</div>
              </div>
              <div className='text-small-container'>
                <div className='text-small'>Dans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma condans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement frondans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement fronnaissance du développement frontend et backend, mais aussi de ma capacité à comprend</div>
              </div>
            </div>



            <div className='text-container margin-top'>
              <div className='title-container'>
                <div className='h2'>Competences utilisés pour ce projet</div>
              </div>
              <div className='text-small-container'>
                <div className='text-small'>Dans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma condans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement frondans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement fronnaissance du développement frontend et backend, mais aussi de ma capacité à comprendDans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma condans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement frondans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement fronnaissance du développement frontend et backend, mais aussi de ma capacité à comprend</div>
              </div>
            </div>



            <div className='capture-text-container'>
              <div className='capture-text'>
                <div className='h1'>Projet <br /> Capture</div>
                <div className='text-bold'>Dans plusieurs langages de développement web. Je souhaite évoluer dans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance .</div>
              </div>
            </div>

            <div className='capture-container'>

              <div className='carousel-track'>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>

                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>

                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
              </div>




            </div>




            <div className='capture-container'>

              <div className='carousel-track'>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
              </div>




            </div>

            <div className='capture-container'>

              <div className='carousel-track'>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>

                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
                <div className='capture-img-container'>
                  <div className='img-capture'></div>
                </div>
              </div>




            </div>







            <div className='next-projet'>

              <div className='next-projet-container-width'>
                <div className='next-projet-container'>
                  <div className='next-projet-text-container'>
                    <div className='h2' style={{ color: "#161616" }}>
                      Template Commerce
                    </div>
                    <div className='text-small' style={{ color: "#161616", marginBottom: "2rem", marginTop: "1rem" }}>
                      Dans plusieurs langages de développement web. Je souhaite évoluer dans votre entreprise et travailler sur vos projets dans le domaine du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance .
                    </div>

                    {/* <div className='next-projet-img-container'>

                    <div className='next-projet-img'></div>
                    <div className='next-projet-img'></div>
                    <div className='next-projet-img'></div>
                    <div className='next-projet-img'></div>
                  </div> */}

                  </div>
                  <div className='next-projet-btn-container'>
                    <div className='next-projet-btn'>
                      <div className='next-projet-btn-back'>

                      </div>
                      <div className='next-projet-btn-svg'>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>

        </div>
      </Layout>
    </>

  )
}


export const Head = () => <title>Projet page</title>
export default Projet