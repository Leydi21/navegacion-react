import React, { Component }  from 'react';
import Form from "react-bootstrap/Form";
export default function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Form.Select aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
      </main>
    );
  }