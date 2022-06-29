import React, {createContext, useContext, useState } from 'react';
const StateContext = createContext();

const initialState ={
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState();

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true});
        console.log('hi');
    }

    return (
        <StateContext.Provider 
         value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, initialState, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);