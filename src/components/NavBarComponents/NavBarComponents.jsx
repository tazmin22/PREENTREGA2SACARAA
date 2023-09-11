 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

 const NavBar = () => {
   return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand>
           <Link to="/">e coomerce</Link>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
             <Nav.Link>
               <Link to="/">Home</Link>
                    </Nav.Link>
             <NavDropdown title="Categorias" id="basic-nav-dropdown">
               <NavDropdown.Item>
                     <Link to="/category/categoryid">Categoria1</Link>
               </NavDropdown.Item>
               <NavDropdown.Item>
                 <Link to="/category/categoria2">Categoria2</Link>
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
         </Navbar.Collapse>
       </Container>
       <CartWidget />
     </Navbar>
   ); };

 export default NavBar;