import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg from './profile.jpeg'
import { Button , Container, Navbar, Nav } from 'react-bootstrap';
import data from './data';
import{ useState} from 'react'


function App() {
  let [shoes] = useState(data)
  
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">1</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img className='main-bg' src={process.env.PUBLIC_URL + '/bg.png'} /> 
      <div className="container">
        <div className="row">
          
          {/* props 사용법 작명={state명} */}
          {shoes.map((data,i) => (
            <Product shoes={shoes[i]} number={i} />
          ))}
        </div>
        </div>
    </div>
  );
}

const Product = (props) => {
  
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.number + 1}.jpg`} width="80%" />
      {/* props.작명 */}
            <h4>{props.shoes.title}</h4>
            <p>{ props.shoes.content }</p>
    </div>
  )
}


export default App;
