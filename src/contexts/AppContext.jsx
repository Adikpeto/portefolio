import React from 'react'
import { Curtains } from "curtainsjs"

const initialValues = {
    opacity: 0,
    parallaxPos: { x: 0, y: -20 },
    scale: 0.8,
    rotationPosition: 0,
    curtains:new Curtains({
        pixelRatio:Math.min(1.5,window.devicePixelRatio)
    }),
    container:null,
    scrollEffect:0,
  
}

const Context = React.createContext({
    state: initialValues,
    dispath: () => { }
})

function reducer(state, action) {
    switch (action.type) {
        case "SET_CURTAINS_CONTAINER":

            return { ...state, container: action.payload }
            break;

        case "SET_SCROLL_EFFECT":

            return { ...state, scrollEffect: action.payload }
            break;

        case "CHANGE/OPACITY":

            return { ...state, opacity: action.payload }
            break;
        case "MOUSE/COORDINATES":
            console.log("MOUSE/COORDINATES");
            return { ...state, parallaxPos: action.payload }
            break;

        case "CHANGE/ROTATION":

            return { ...state, rotationPosition: action.payload }
            break;

        case "CHANGE/SCALE":

            return { ...state, scale: action.payload }
            break;

        default:
            throw new Error("Message")

    }
}


const parallax = (event) => {
    const speed = 5
    const x = (window.innerWidth - event.pageX * speed) / 100
    const y = (window.innerHeight - event.pageY * speed) / 100
    // dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } })
}

const AppContext = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialValues)

    const contextValue = React.useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch])


    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

AppContext.propTypes = {}

export const useAppContext = () => React.useContext(Context)
export default AppContext