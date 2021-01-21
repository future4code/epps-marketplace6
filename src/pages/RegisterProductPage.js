import React, { Component } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import RegisterProductForm from "../components/RegisterProductForm";

class RegisterProductPage extends Component {
  render() {
    return (
      <Flex>
        <RegisterProductForm />
      </Flex>
    );
  }
}

export default RegisterProductPage;
