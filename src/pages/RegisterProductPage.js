import React, { Component } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import RegisterProductForm from "./RegisterProductForm";

class RegisterProductPage extends Component {
  render() {
    return (
      <Flex>
        {/* <Header></Header> */}
        <Heading>Criar Ofertas</Heading>
        <RegisterProductForm />
        {/* <Footer></Footer> */}
      </Flex>
    );
  }
}

export default RegisterProductPage;

