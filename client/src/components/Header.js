import axios from 'axios';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';
export const Header = () => {
  const {user,setAuth,auth,business} = useAuth();  
  console.log("business: ",business)
  const navigate = useNavigate(); 
  const handleLogout = async ()=>{
    try{
      const res = await axios.get('/api/logout');
      if(res){
        setAuth(false); 
        navigate("/")
      }
    }catch(err){
      console.log(err); 
    }
    
  }
  console.log("header: "+auth)
  return (
    <Navbar collapseOnSelect sticky="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} exact to="/">
          Tizon
        </Navbar.Brand>
        <Nav style={{ display: "flex", flexDirection: "row" }}>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> */}
          {!auth && 
          <>
            <Nav.Link className="me-3" as={Link} exact to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="me-3" as={Link} exact to="/register">
              Register
            </Nav.Link>
          </>}
          {auth && (
            <>
              {business ?
              <Nav.Link className="me-3" as={Link} exact to="/editbusiness">
                Edit Business
              </Nav.Link>:
              <Nav.Link className="me-3" as={Link} exact to="/addbusiness">
                Add Business
              </Nav.Link>
              }
              <Nav.Link className="me-3" as={Link} exact to="/stats">
                Stats
              </Nav.Link>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item as={Link} exact to="/edit">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}
