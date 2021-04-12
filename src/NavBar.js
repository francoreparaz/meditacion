import React from "react";
import {Navbar,Nav} from "react-bootstrap"
import {BrowserRouter as Router, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
export const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
          

        <Nav className="mr-auto">
         <div className="home"><Link to="/">Home</Link></div>
         <div className="productos"><Link to="/Productos">Productos</Link></div>
         <div className="PersonalDeSalud"><Link to="/PersonalDeSalud">Personal De Salud</Link></div>
         <div className="sesiones"><Link to="/Sesiones">Sesiones</Link></div>
         <div className="profesional"><Link to="/Profesional">Profesional</Link></div>
        </Nav>
        
      </Navbar>
    </div>
  );
};

export default NavBar