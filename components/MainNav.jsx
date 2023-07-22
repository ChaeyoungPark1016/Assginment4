
import React, { useState } from 'react';
import {Navbar, Nav, Form, Container, Button} from 'react-bootstrap';
import Link from "next/link";
import { useRouter } from "next/router";


function MainNav() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event);
    router.push(`/artwork?title=true&q=${searchText}`);
    setSearchText("");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark fixed-top nav-bar">
        <Container>
          <Navbar.Brand>Chaeyoung Park</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
            </Nav>

            {}
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Control
                onChange={updateSearchText}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <br />
    </>
  );
}

export default MainNav;
