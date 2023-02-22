import { useEffect, useState } from "react";
import { Container,Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  jsonData from './data.json'


export default function DetailUser(){
    
    const params = useParams()
    const json = jsonData
    const selectedJson = json[params.id]
    
    return(
        <>
        <Container fluid
        style={{
            backgroundColor:"#808080"
        }}>
        <Container   className="d-grid w-25 m-auto justify-content-center p-5">
            <div className="m-auto">
            <img className="w-100 rounded-circle" src={selectedJson.image} alt="" />
            <h1 className="justify-content-center w-100">{selectedJson.username}</h1>
            </div>
            <div className="d-flex">
            <Col>
                <p className="m-0">{selectedJson.follower}</p>
                <p>Followers</p>
            </Col>
            <Col>
                <p className="m-0"> {selectedJson.following}</p>
                <p>Following</p>
            </Col>
            </div>
        </Container>   
        </Container>
        </>
    )

}