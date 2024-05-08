import React from 'react'
import Layout from '../../components/layout/layout'
import "./porteFolio.scss"
import WorkCard from '../../components/workCard/workCard'
import { motion } from "framer-motion"



const data = [
    {
        date: "2015-2018",
        title: "Moon light - UI/UX Développement.",
        titleProjet: "Dans plusieurs langages à las aussi de ma capacité à comprend.",
        descriptionProjet: "du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi de ma capacité à comprend."
    },
    {
        date: "2020-2023",
        title: "Fashion - Développement web.",
        titleProjet: "Dans plusieurs langages à las aussi de ma capacité à comprend.",
        descriptionProjet: "du développement web car c’est ce qui me passionne. J’aimerais contribuer à la réalisation de vos sites, pages et applications à l’aide de ma connaissance du développement frontend et backend, mais aussi de ma capacité à comprend."
    }
]

function index() {
    return (
        <>
            <div className="fixed-back">


                <div className="fixed-back-blur">
                    <div className="fixed-back-blur-img"></div>
                </div>

            </div>
            <Layout>


                <div className='header-container'>

                    {/* <div className='title' style={{ color: "#110B11" }}>traveaux recents</div> */}
                    {/* <Canvas
                  style={{ width: "50%", height: "50%", backgroundColor: 'dodgerblue' }} camera={
                      {
                          position: [
                              -5, 2, 10
                          ],
                          fov: 60,
                       
                      }
                  }

              >
                   <OrbitControls/>
                   <ambientLight intensity={0.5} color={"white"} />
                 
                   <Scene />
                  
              </Canvas> */}
                    <div className='small-text-container'>
                        {/* <div className='small-text-title'>Dans plusieurs langages de développement web.</div> */}
                        <div className='title'>TRAVEAUX RECENTS</div>

                        <motion.div
                            className='header-text-poste'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}

                        > Nouveau projet mobile , web et desktop.
                        </motion.div>


                    </div>

                </div>
                <div className='works-container'>
                    {data.map((infos) => {
                        return <WorkCard projet={infos} />
                    })}
                </div>

                <div className='header-container' style={{ marginTop: "1rem" }}>
                    <div className='title' style={{ marginTop: "1rem" }}>Mobile projets</div>
                    <div className='small-text-container'>
                        {/* <div className='small-text-title'>Dans plusieurs langages de développement web.</div> */}
                        <div className='header-text-poste'> Projets mobiles les plus recents.</div>
                    </div>

                </div>
                <div className='works-container'>
                    {data.map((infos) => {
                        return <WorkCard projet={infos} />
                    })}
                </div>


            </Layout>
        </>


    )
}


export const Head = () => <title>Portefolio page</title>
export default index