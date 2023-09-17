// Import React modules
import React from 'react';

// Import npm packages
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <Container>
      <div className="hero-section">
        <h1>Welcome to PortfolioBase</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque illo corrupti libero optio adipisci recusandae nam molestias ratione sed aperiam?
        </p>
        <div>
          <Button variant="dark">Search</Button>
        </div>
      </div>
    </Container>
  )
}

export default Home