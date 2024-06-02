import { useContext } from "react"
import { useState } from "react"
import { AuthLog } from "../Componants/AuthContext"
import axios from "axios"


function Login(){
  let {login} = useContext(AuthLog)
  let [email, setEmail] = useState("")
  let [password, setPass] =useState("")

  async function fetchData(){
    
    let datalog= {
            a:email,
            b:password
      }
    console.log(datalog)
    try{
      let res = await axios({
        method:"post",
        url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
        data: {
          email:email,
          password:password
        }
      })
      login(res.data.token)
    }catch(err){
      console.log(err)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    fetchData()
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
      Email:
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} /><br/> <br />
      </label>
      <label>
       Password :
        <input type="password" placeholder="Enter Password" value={password} onChange={(e)=> setPass(e.target.value)} /><br/> <br />
      </label>
      
      <input type="submit" />
    
    </form>
  )
}

export { Login }