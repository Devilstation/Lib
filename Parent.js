import React, { useState } from 'react'
const Context=React.createContext()
const Parent = (props) => {
    const [books,setBooks]=useState([])
    const [filter,setFilter]=useState([])
    const [theme,setTheme]=useState([])
    const [langs,setLangs]=useState([])
    const [activeLang,setActiveLang]=useState('')    
    return (
    <Context.Provider value={{
        books:[books,setBooks],
        filter:[filter,setFilter],
        theme:[theme,setTheme],
        langs:[langs,setLangs],
        active:[activeLang,setActiveLang]
    }}>
    {props.children}
    </Context.Provider>
  )
}

export {Parent,Context}