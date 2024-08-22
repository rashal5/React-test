// src/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for additional styling

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start custom-footer">
            <Container className="p-4">
                <Row>
                    <Col lg="6" md="12" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Footer Content</h5>
                        <p className="text-light">
                            Here you can use rows and columns to organize your footer content.
                        </p>
                    </Col>
                    <Col lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-light">Link 1</a></li>
                            <li><a href="#!" className="text-light">Link 2</a></li>
                            <li><a href="#!" className="text-light">Link 3</a></li>
                            <li><a href="#!" className="text-light">Link 4</a></li>
                        </ul>
                    </Col>
                    <Col lg="3" md="6" className="mb-4 mb-md-0">
                        <h5 className="text-uppercase text-light">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="#!" className="text-light">Link 1</a></li>
                            <li><a href="#!" className="text-light">Link 2</a></li>
                            <li><a href="#!" className="text-light">Link 3</a></li>
                            <li><a href="#!" className="text-light">Link 4</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="text-center p-3 bg-dark">
                © 2024 Copyright: 
                <a className="text-light" href="https://yourwebsite.com/"> YourWebsite.com</a>
            </div>
        </footer>
    );
}

export default Footer;
