import React from 'react';
import ReactDOM from 'react-dom/client';
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
