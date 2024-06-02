import { createContext, useState } from "react"

export let AuthLog = createContext()

function AuthContext({children}){
  let [logDeatils, setLogDetails] = useState({
    status: false,
    token: null,
  })
  let login = (token)=>{
    setLogDetails({
      status: true,
      token:{token}
    })
  }

  let logout = ()=>{
    setLogDetails({
      status: false,
      token:null
    })
  }
  
  return(
    <AuthLog.Provider value={{login, logout, logDeatils}}>
      {children}
    </AuthLog.Provider>
  )
}

export { AuthContext }