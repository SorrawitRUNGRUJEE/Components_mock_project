import {GoogleLogin} from "react-google-login"
import {gapi} from "gapi-script"
import { useEffect } from "react"
import Components from "./test"
import Input from "./input"

function App() {

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

  const click = () =>{
    console.log("click")
  }
  return (
  
  <div>
    {arr.map((el,id)=>{
       return (
        <>
        <Components onClick={click} name={el.name} age={el.age} id={el.id}/>    
        <Input onClick={2} placeholder={el.name}  />  
        </>
          )
      
    })}
  <GoogleLogin 
    clientId={clientId}
    buttonText="sign in with google"
    onSuccess={onSuccess}
    onFailure={onfail}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
    /> 
    </div>
    )
}

export default App
