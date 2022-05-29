import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from './routes/invoice';
import Home from './routes/home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar expand="lg" bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">UniverseCode</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="/">App</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="expenses">Action</NavDropdown.Item>
          <NavDropdown.Item href="invoices">Another action</NavDropdown.Item>
          <NavDropdown.Divider />  
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <Routes>
    
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>  
        <Route  
        index  
        element={  
        <main style={{ padding: "1rem" }}>  
        <p>Select an invoice</p>  
        </main>  }  
        />
        <Route path=":invoiceId" element={<Invoice />} />  
        </Route> 
        <Route  
        path="*"  
        element={  
        <main style={{ padding: "1rem" }}>  
        <p>There's nothing here!</p>  
        </main>  
        }  
        />    
        </Route> 
      </Routes>
  </BrowserRouter>
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
