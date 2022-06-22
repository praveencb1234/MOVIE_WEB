import Rating from "./../Componenets/Rating"
import React, { useEffect, useState } from 'react'
import "./Mainpage.css"
import axios, { Axios } from "axios"
import { Api_Key } from "./Api_Key"
import { Image_url } from "./Image_url"



function Mainpage(props) {


  const [click, setClick] = useState([])
  const [movie, setMovie] = useState([])
useEffect(() => {

  

  axios.get(props.url).then((response=>{

  

  setMovie(response.data.results)

  
  }))
}, [])






  return (
    <div className='frame'>
  




        <div className='fr'>

          
        
          
        














          
{movie.map((obj)=> 
  <img  className={props.isSmall ? 'smallposter':'img'} src={`${ movie ? Image_url+obj.backdrop_path: ""}`}></img>

)}

        


        



</div>


<div className="info">

</div>
  

    </div>

    
  )
}

export default Mainpage