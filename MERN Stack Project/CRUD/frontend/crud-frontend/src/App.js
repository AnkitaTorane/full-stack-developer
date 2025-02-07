import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div>
      <h1 className='text-center my-5'><b>CRUD MERN Stack</b></h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
          <h3 className='text-center my-5'><b>Add Employee</b></h3>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type="text" placeholder="Mobile No" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

          </div>
          <div className='col-md-6'>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Mobile No</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zip</th>
                  <th>Action</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ankita T</td>
                  <td>8600527795</td>
                  <td>Vanwasmachi</td>
                  <td>karad</td>
                  <td>Maharashtra</td>
                  <td>415124</td>
                  <td><p>Edit</p><p>Delete</p></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ankita T</td>
                  <td>8600527795</td>
                  <td>Vanwasmachi</td>
                  <td>karad</td>
                  <td>Maharashtra</td>
                  <td>415124</td>
                  <td><p>Edit</p><p>Delete</p></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
