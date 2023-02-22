import React from "react"
import Lists from "./Lists";
import {Routes,Route,Link} from 'react-router-dom'
import DetailUser from './DetailUser'

export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/detail-user/:id" element={<DetailUser />} />
      </Routes>
    </>

    
  )
}