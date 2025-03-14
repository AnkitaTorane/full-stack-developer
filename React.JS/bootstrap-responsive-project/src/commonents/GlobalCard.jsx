import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nativeplanet from './../Images/Nativeplanet.jpg';


const GlobalCard = () => {
  return (
    <div>
       <Card>
            <Card.Img variant="top" src={Nativeplanet} />
            <Card.Body>
              <Card.Title>Chikmagalur</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
    </div>
  )
}

export default GlobalCard
