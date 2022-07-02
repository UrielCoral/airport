import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";
import Vuelos from "./Vuelos";

import ConsultarVuelo from "./ConsultarVuelo";

import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    
    <Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Aeropuerto Internacional de Mérida
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
           
            
            <Route path="/consultarVuelo/:id/:clase" element={<ConsultarVuelo/>} />
            <Route exact path='/' element={<Vuelos />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>

  );
}

export default App;
