import {useEffect, useState} from "react"
import axios from "axios"


function Product(){
  let [data, setData] = useState([])
  async function fetchData(){
    try {
      let res = await axios({
        method : "get",
        url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
      })
      console.log(res)
    } catch (error) {
      console.log()
    }
  }
  
  useEffect(()=>{
    fetchData()
  },[])
  return(
    <h3>Product</h3>
  )
}

export { Product }