import {Home} from "../Pages/Home"
import {Product} from "../Pages/Product"
import {Login} from "../Pages/Login"
import {Routes, Route} from "react-router-dom"
import { PrivateRoute} from "./PrivateRoute"

function AllRouts(){

  return(
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute> } />

        <Route path="/product" element={ <PrivateRoute> <Product /></PrivateRoute>} />

        <Route path="/login" element={<Login />} />


      </Routes>
    </>
    
  )
}

export { AllRouts }