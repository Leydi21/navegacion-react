import React, { Component }  from 'react';
import Form from "react-bootstrap/Form";
import { Stack, Button } from 'react-bootstrap';
export default function Expenses() {
    return (
      <main style={{ padding: "1rem 0" }}>
          
        <Stack gap={2} className="col-md-5 mx-auto">
        <Form.Select variant="outline-primary" aria-label="Default select example">
  <option>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
</Stack>
      </main>
    );
  }