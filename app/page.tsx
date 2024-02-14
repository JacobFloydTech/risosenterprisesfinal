'use client'

import Products from "./products";

import '../public/globals.css'
import Header from "./header";
import ThreeJSBackground from "./background/sceneBackground";
import { useState } from "react";
import Loading from "./loading";

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div id='main' className="flex flex-col items-center jutify-center pt-24  h-auto w-full">
     

      <ThreeJSBackground setLoaded={setLoaded}/>
      {loaded ? 
      <div>
        <Header/>
        <Products/>
      </div>  
      :
      <Loading/>
      }
    </div>
  )
}