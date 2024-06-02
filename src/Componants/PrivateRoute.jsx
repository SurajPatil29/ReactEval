import { useContext } from "react"
import { AuthLog } from "./AuthContext"
import { Navigate } from "react-router-dom"



function PrivateRoute({children}){
  
  let {logDeatils}= useContext(AuthLog)
  if(!logDeatils.status==true){
    return <Navigate to="/login" />
  }
  return children
}

export { PrivateRoute }