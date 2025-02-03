import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nativeplanet from './Images/Nativeplanet.jpg';
import GlobalCard from './commonents/GlobalCard';



function App() {
  return (
    <div className='container py-5'>

      <h2 className='text-center py-5'>Heaven Beautiful Places In India</h2>

      <div className='row'>
        <div className='col-md-4'>
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
        <div className='col-md-4'>
          <Card style={{ width: '18rem' }}>
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
        <div className='col-md-4'>
          <Card style={{ width: '18rem' }}>
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
        <div className='col-md-4'>
          <Card style={{ width: '18rem' }}>
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
        <div className='col-md-4'>
          <Card style={{ width: '18rem' }}>
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
        <div className='col-md-4'>
          <Card style={{ width: '18rem' }}>
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
      </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='row'>
        <div className='col-md-4'>
          <GlobalCard />
        </div>
      </div>
    </div> 
  );
}

export default App;
