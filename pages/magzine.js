import React, { useState } from 'react'
import { useEffect } from 'react'
import  Router from 'next/router'
import Magzinecomponent from './components/Magzinecomponent'

export default function magzine() {
    // const [login, setLogin] = useState(false)
    // useEffect(() => {
    //     // Perform localStorage action
    //     if(localStorage.getItem('mail')){
    //         setLogin(true)
    //     }
    //     else{
    //         Router.push('/')
    //         setLogin(false)
    //     }
    //   }, [])
    //   if(login){
    //     return <Magzinecomponent/>
    //   }else{
    //     return <h1>Please Login</h1>
    //   }
    <Magzinecomponent/>
    
}
