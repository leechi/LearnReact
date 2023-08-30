import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import bg from './profile.jpeg'
import { Button , Container, Navbar, Nav } from 'react-bootstrap';
import data from './data';
import { useState } from 'react'
import {Routes,Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/Detail';
import styled from 'styled-components'
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data)
  let [count, setCount] = useState(2)
  let navigate = useNavigate()
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>홈</Nav.Link>
            {/* navigate(-1) 하면 뒤로가기 */}
            <Nav.Link onClick={() => { navigate('/detail') }}>상세페이지</Nav.Link>
            
          </Nav>

        </Container>
      </Navbar>    
      <Routes>
        <Route path="/" element={<div>
          <img className='main-bg' src={process.env.PUBLIC_URL + '/bg.png'} /> 
            <div className="container">
              <div className="row">
                
                {/* props 사용법 작명={state명} */}
                {shoes.map((data,i) => (
                  <Product shoes={shoes[i]} number={i} />
                ))}
              </div>
          </div>
          {/* 리엑트에서는 거의 ajax로 서버와 통신한다. */}
          
          <button onClick={() => {

            setCount(count + 1)
            console.log(count)
            axios.get( `https://codingapple1.github.io/shop/data${count}.json` )
              .then((result) => {
                
                let data = [...shoes,...result.data]  
                setShoes(data)
              
              }).catch(() => {
                alert('더이상 없슴둥')
                console.log(
                  'connection failed'

              )
            })
          }}>버튼</button>
        </div>} ></Route>

        
        
        {/* nested routes */}
        <Route path="/about" element={ <About/> } > 
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} ></Route>
       

      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
