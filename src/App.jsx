import {GoogleLogin} from "react-google-login"
import {gapi} from "gapi-script"
import { useEffect } from "react"
import Components from "./test"
import Input from "./input"
import { useState } from "react"

function App() {



const [active,setActive] = useState(false)



  
  return (

    <div className="">
      <h1 className={active?"text-red-500":"text-blue-500"}>hello</h1>
      <button onClick={()=>setActive(!active)} className=" p-4 bg-slate-600">change state</button>
    </div>
  
    )
}

export default App
