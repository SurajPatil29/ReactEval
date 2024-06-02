import {Link} from "react-router-dom"
import { Flex } from '@chakra-ui/react'

function Navbar(){
   let links = [
     {
       to:"/",
       label:"Home"
     },
     {
       to:"/product",
       label:"Product"
     },
     {
       to:"login",
       label:"Login"
     }
   ]

  return(
    <>
      <Flex
        justify= "space-evenly"
        p= "3"
        bg= "teal"
        color="white"
        >
        {links.map((obj)=>(
          <Link key={obj.to} to={obj.to}>{obj.label}</Link>
        ))}
      </Flex>
      
    </>
  )
}

export { Navbar }