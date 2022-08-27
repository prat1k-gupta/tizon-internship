import axios from 'axios';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
export const Header = () => {
  const navigate = useNavigate(); 
  const handleLogout = async ()=>{
    try{
      const res = await axios.get('/api/logout');
      if(res){
        navigate("/")
      }
    }catch(err){
      console.log(err); 
    }
    
  }
  return (
    <Navbar collapseOnSelect sticky="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} exact to="/">
          Tizon
        </Navbar.Brand>
        <Nav style={{display: "flex" , flexDirection: "row"}}>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Nav.Link className="me-3" as={Link} exact to="/addbusiness">
              Add Business
            </Nav.Link>
            <Nav.Link className="me-3" as={Link} exact to="/stats">
              Stats
            </Nav.Link>
            <NavDropdown title="User" >
              <NavDropdown.Item as={Link} exact to="/edit">
                Edit Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
