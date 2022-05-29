import React, { Component }  from 'react';
import { Button, Container  } from 'react-bootstrap';

export default function Home() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Home</h2>
        <Container>
        <Button variant="primary" size="lg">
    Block level button
  </Button>
  </Container>
      </main>
      
    );
  }