import { Navbar, Nav, Container, Image } from 'react-bootstrap'


 

export function Menu() {



  
    return(
        <Navbar fixed="top" variant="dark" expand="lg">
        <Container>

            <Navbar.Brand href="/" to="/">
                <img src="/images/logo.png "/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                
                <Nav.Link href="/sobre" to="/quem-somos">Sobre</Nav.Link>
                <Nav.Link href="/doacoes" to="/doacao">Doações</Nav.Link>
                {/* <Nav.Link href="/servicos-uteis" to="/servicos-uteis">Serviços</Nav.Link>              */}
                <Nav.Link href="/contato" to="/contato">Contato</Nav.Link>
                <Nav.Link show="false" href="/gerenciar" to="/gerenciar">Gerenciar</Nav.Link>
                {/* <Nav.Link href="/app" to="/app">App</Nav.Link> */}
                |
                <Nav.Link href="/login">
                    <ion-icon className="sign-in" size={26} name="person-circle-outline" id="sign-in" /> 
                </Nav.Link>
             
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}


