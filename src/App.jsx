import {GoogleLogin} from "react-google-login"
import {gapi} from "gapi-script"
import { useEffect } from "react"
import Components from "./test"
import Input from "./input"

function App() {
const url  = "http://localhost:5173/line-callback?token=123&user=mek&email=m@outlook.com&password=5555"
const searchParams = new URLSearchParams(url)
for(const p of searchParams){
  console.log(p)
}



  const arr = [
    {name:"mek",age:26},
    {name:"tee",age:26},
    {name:"ice",age:26},
    {name:"jame",age:26},
    {name:"rita",age:26},
    {name:"non",age:26},

  ]
  const clientId = "25769644481-it9q9s3alpf30c274qlqgepm7tppqr07.apps.googleusercontent.com"
  useEffect(()=>{
    const initClient = () =>{
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    }
    gapi.load("client:auth2",initClient)
  },[])
  const onSuccess = (res) => {
    console.log("success!",res)
  }
  const onfail = (res) => {
    console.log("failed...",res)
  }


  return 
  // (
  
  // <div>
   
  // <GoogleLogin 
  //   clientId={clientId}
  //   buttonText="sign in with google"
  //   onSuccess={onSuccess}
  //   onFailure={onfail}
  //   cookiePolicy={'single_host_origin'}
  //   isSignedIn={true}
  //   /> 
  //   </div>
  //   )
}

export default App
