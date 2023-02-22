import React, { useState } from "react";
import "./App.css";
import  jsonData from './data.json'
import {Row, Col, Container, Card} from 'react-bootstrap'
import {Routes,Route,Link,useNavigate} from 'react-router-dom'


export default function Lists(){

    
    const [id, setId] = useState(0)
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        
        navigate("/detail-user/"+id)
     }
    

  
return(
    <>
        <Container className="p-5">
        {jsonData.map((data, index) => (
          
            <Row role="button" onClick={() => {handleNavigate(index);}}  style={{
                backgroundColor:"#2B2D42",
                color:"#ffffff"
            }} className="mb-3 justify-content-center m-auto align-items-center d-flex" key={index}>    
           
                <Col md="1" >
                <img  
                src={data.image} className="w-100 rounded-circle" alt="" />
                </Col>
                <Col className="d-grid">
                <div>
                    <h1>@{data.username}</h1>
                </div>
                <div className="d-flex">
                    <p className="me-2">Follower: {data.follower}</p>
                    <p>Following: {data.following}</p>
                </div>
                </Col>
            </Row>
          
        ))}
        </Container>
    </>
)
};