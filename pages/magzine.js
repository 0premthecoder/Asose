import React from 'react'
import Script from 'next/script'
import { useEffect } from 'react'
import  Router from 'next/router'
export default function magzine() {
    
    useEffect(() => {
        // Perform localStorage action
        if(localStorage.getItem('mail')){
            console.log("Logined")
        }
        else{
            Router.push('/')
        }
      }, [])
    return (
    <>

    <a href="https://online.flippingbook.com/view/651093132/" className="fbo-embed" data-fbo-id="17d71b5e67" data-fbo-ratio="3:2" data-fbo-lightbox="yes" data-fbo-width="100%" data-fbo-height="auto" data-fbo-version="1" style={{maxWidth: "100%"}}>magzine </a>
    <Script src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=651093132"></Script>
    </>
    )
}
