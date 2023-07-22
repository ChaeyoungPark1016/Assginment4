import MainNav from "./MainNav";

import React from "react";
import { Container } from "react-bootstrap";

function Layout(props) {
  return (
    <>
      <MainNav />
      <br />
      <Container>
        {props.children}
      </Container>
      <br />
    </>
  );
}

export default Layout;
