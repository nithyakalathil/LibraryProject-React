import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

  const [data,changedata]=useState
  (

    [
     
    ]

  )

const fetchdata=()=>{
  axios.get("http://localhost:8080/view").then(
    (response)=>{
      changedata(response.data)
    }
  )
}

useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">TITLE</th>
      <th scope="col">AUTHOR</th>
      <th scope="col">PUBLISHEDYEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
   {data.map((value,index)=>{return  <tr>
      <td scope="row">{value.name}</td>
      <td>{value.AuthorName}</td>
      <td>{value.year}</td>
      
      <td>{value.price}</td>
    </tr>}
  )
  }
    
    
    
    
   
    
   
  </tbody>
</table>

        </div>
    </div>
</div>

    </div>
  )
}

export default Viewall