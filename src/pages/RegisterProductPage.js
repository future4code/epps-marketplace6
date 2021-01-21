import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import RegisterProductForm from "../components/register/RegisterProductForm";

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
