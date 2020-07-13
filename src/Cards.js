import React from "react";
import './index.css';
import "./Cards.css";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";


const Cards = () => {
        return <div className="busca">
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{}</Card.Title>
                  <Card.Text>Possui {}km de ciclofaixa</Card.Text>
                  <Card.Text>A {} possui {}km de extensão e {}km de ciclofaixa</Card.Text>
                  <Button variant="primary" onClick="#">Remover</Button>
              </Card.Body>
</Card> 
</div>  
    } 

   
export default Cards;