import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './Navbar.css'
import { Person, SuitHeartFill, BagFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

//  import Col from 'react-bootstrap';
// import Image from 'react-bootstrap'



const MainNav = () => {
    return (


        <Navbar sticky="top" expand="lg"
            style={{ background: '#FFA500' }}
            data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="fw-bold Space-Grotesk" style={{ fontSize: "20px" }}>Home</Nav.Link>
                        <Nav.Link href="#link" className="fw-bold" style={{ fontSize: "20px" }}>Shop</Nav.Link>
                        <Nav.Link href="#link" className="fw-bold" style={{ fontSize: "20px" }}>Delivery & Payments</Nav.Link>
                        <NavDropdown className="fw-bold " style={{ fontSize: "20px" }} title="Shopping & Delivery Slots" id="basic-nav-dropdown">
                            {/* <NavDropdown.Item href="#action/3.1">Groceries</NavDropdown.Item> */}
                            <div className='d-flex slotdiv '>
                                <div className="row">
                                    <img src="./images/Rebecca_Enonchong_2019.jpg" alt="" />
                                </div>

                                <div className="row ">
                                    <header style={{color: 'purple'}}>Pick a Delivery Slots</header>
                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">Instant</Button>

                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">In 2 Hours</Button>

                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">In 4 Hours</Button>

                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">At 7PM</Button>

                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">On Saturday</Button>

                                </div>

                                <div className="row ">
                                    <Button className='dropdownbut' variant="outline-secondary">On Sunday</Button>

                                </div>







                            </div>


                        </NavDropdown>
                    </Nav>
                    <Button className='butnav' variant="outline-dark">Login</Button>


                    <Person className='icons' color="black" size={22} />
                    <SuitHeartFill className='icons' color="black" size={19} />
                    <BagFill className='icons' size={18} />
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
}

export default MainNav;