import React, { Component }  from 'react';
import './App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ReactDOM from "react-dom/client";
import { Outlet,Link  } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './routes/home'
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';

export default function App() {
  return (
    
      <div className="App">
        <h1>UniverseCode</h1>
          <h3>Lady</h3>
          <nav
        style={{
          borderBottom: "solid 2px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home">Home</Link> |{" "}
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      </div>
      
  );
};