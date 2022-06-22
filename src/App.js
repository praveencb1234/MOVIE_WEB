import React, { useState } from 'react'
import './App.css'
import Mainpage from './Componenets/Mainpage'
import {original,action} from "././Componenets/url"
import { Movie, SavedSearch } from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ChaletIcon from '@mui/icons-material/Chalet';

function App(props) {

  console.log(props)
const [search, setSearch] = useState('')

  return (
    <div>
 
<div className="top">
<img  className="icon" src='/icons.png'></img>

<img  className="icons" src='/icons.png'></img>
<h2 className='head'>MOVIEFLEX</h2>



<div className="searchbutton">
  <div className='homes'><ChaletIcon className='home'/></div>

  <input onChange={(e)=>setSearch(e.target.value)} className='input'type='text' placeholder='search movies'></input>
</div>
<div className="search-icon">
   <SavedSearch/>
   
 
</div>

<Mainpage  url={original}  />




<Mainpage  url={action} title= 'action' isSmall/>

</div>


    </div>
  )
}

export default App