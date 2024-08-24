import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { Container, Row, Col, Button, Carousel, Card, Collapse } from 'react-bootstrap';
import "../styles/HomePage.css";

const HomePage = () => {
  const [userCount, setUserCount] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user-count'); // Update the URL if necessary
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        setUserCount(data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };
  
    fetchUserCount();
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Layout>
      <header className="hero-section">
        <Carousel
          nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
          prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
        >
          <Carousel.Item>
            <div
              className="hero-slide"
              style={{
                backgroundImage:
                  "url('https://media.istockphoto.com/id/1465188429/photo/business-performance-monitoring-concept-businessman-using-smartphone-online-survey-filling.jpg?s=612x612&w=0&k=20&c=7c47U-ZeTVL4H1_jPyO-8V3mKVPbeDb25oOxIV7NoEE=')",
              }}
            > 
              <Container>
                <Row className="align-items-center text-center text-md-left">
                  <Col md={6}>
                  <h1>DIGITAL BUSINESS GROUP</h1>
                  <p>નો આવો હેતુ છે કે આપણે બધા એકસાથે મળીને આગળ વધીએ</p>
                    <Button variant="primary" size="lg">Get Started</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/006/655/084/small/business-development-planning-inscription-on-3d-the-virtual-screen-photo.jpg')" }}
            >
              <Container>
                <Row className="align-items-center text-center text-md-left">
                  <Col md={6}>
                    <h1>DBP(DIGITAL BUSINESS PLAN)</h1>
                    <p>માં નાના માં નાનું ઇન્વેસ્ટમેન્ટ કરીને માત્ર રેફરન્સથી વધુમાં વધુ ઈન્કમ જનરેટ કરો.</p>
                    {/* <Button variant="primary" size="lg">Get Started</Button> */}
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/business-development-success-growth-banking-financial-global-network_34200-516.jpg')" }}
            >
              <Container>
                <Row className="align-items-center text-center text-md-left">
                  <Col md={6}>
                    <p>એક વાત યાદ રાખો કે પૈસા "માનવીનું સર્જન કરતો નથી, પરંતુ માનવી જ પૈસા નું સર્જન કરે છે..!!</p>
                    <Button variant="primary" size="lg">Get Started</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div
              className="hero-slide"
              style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/businessman-holding-arrow-up-with-graph-business-analysis-business-development-financial-plan-strategy_117255-1887.jpg')" }}
            >
              <Container>
                <Row className="align-items-center text-center text-md-left">
                  <Col md={6}>
                    <h1>Welcome to Our</h1>
                    <h1>Digital Business Plan</h1>
                    <p>Your one-stop solution for managing tasks efficiently.</p>
                    <Button variant="primary" size="lg">Get Started</Button>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </header>

      
    <section className="features-section py-5">
      <Container>
        <h2 className="text-center mb-5">Features</h2>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Feature One</Card.Title>
                <Card.Text>
                  Description of the first feature goes here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Feature Two</Card.Title>
                <Card.Text>
                  Description of the second feature goes here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Body>
                <Card.Title>Feature Three</Card.Title>
                <Card.Text>
                  Description of the third feature goes here.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <Button 
            variant="primary" 
            onClick={handleClick}
            className="toggle-button"
          >
           કેવી રીતે જોડાવું ?
          </Button>
        </div>

        <div className={`overlay ${open ? 'active' : ''}`}>
          <div className="overlay-content">
            <h4>Details:</h4>
            <p>અમારી વેબસાઇટ DIGITALBUSINESSPLAN.IN પર જાઓ અને ફોર્મ ભરો.</p>
            <p>અમારા સુરક્ષિત પેમેન્ટ ગેટવે દ્વારા ₹1100 ની જોડાવાની ફી ચૂકવો</p>
            <p>પેમેન્ટ કન્ફર્મ થાય પછી, તમને તમારું લોગિન વિગત અને આગળના નિર્દેશો સાથે એક ઇ-મેઇલ મળશે</p>
            <Button variant="secondary" onClick={handleClick}>Close</Button>
          </div>
        </div>
      </Container>
    </section>


      <section className="user-count-section py-5">
  <Container>
    <Row className="justify-content-center">
      <Col md={6}>
        <Card className="text-center p-4 shadow-lg rounded-4 border-0" style={{
          background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
          boxShadow: '20px 20px 50px #b3b3b3, -20px -20px 50px #ffffff',
          transition: 'transform 0.3s ease-in-out',
          maxWidth: '400px',
          margin: '0 auto'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <Card.Body>
            <Card.Title className="mb-3" style={{
              fontFamily: "'Roboto', sans-serif",
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#4a4a4a',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)'
            }}>
              Total Users
            </Card.Title>
            <div className="circle-wrapper mx-auto" style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'inset 8px 8px 15px #bfbfbf, inset -8px -8px 15px #ffffff',
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out'
            }} 
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <h2 style={{ 
                fontSize: '2.5rem', 
                fontWeight: 'bold', 
                color: '#6a6a6a',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
                animation: 'pulse 1.5s infinite'
              }}>
                {userCount !== null ? userCount : 'Loading...'}
              </h2>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

<style jsx>{`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`}</style>


      <section className="image-section">
        <Container>
          <img
            src="/image/plan.jpg" // Replace with your image URL
            alt="Additional Section"
            className="img-fluid"
          />
        </Container>
      </section>
    </Layout>
  );
}

export default HomePage;
