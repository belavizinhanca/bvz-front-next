import React from 'react';
import { Form, Col, InputGroup, FormControl, Button, Row } from 'react-bootstrap';

// import styles from '../styles/components/Footer.module.css';

function Footer() {
    return(
        <div className="footer">

            <div className="subscription">
                <Form className="news-form">
                    <Form.Row className="align-items-center">
                        <Col sm={6} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName" srOnly>
                                Nome
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Recebe novidades" />
                        </Col>
                        <Col sm={6} className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                                    Email
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername" placeholder="Username" />
                            </InputGroup>
                        </Col>        
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Quero receber novidades</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>

            <div className="footer-links">
                <ul><li><strong>Mapa do Site</strong></li>
                    <li><a href="/" to="/">Home</a></li>
                    <li><a href="/quem-somos" to="/quem-somos">Quem Somos</a></li>
                    <li><a href="/mediador" to="/mediador">Mediador</a></li>
                    <li><a href="/doacao" to="/doacao">Doação</a></li>
                    <li><a href="/contato" to="/contato">Contato</a></li>
                </ul>
            </div>

        </div>
        
    )
}

export default Footer;