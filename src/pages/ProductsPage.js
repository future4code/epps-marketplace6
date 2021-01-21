import { Flex, Heading } from "@chakra-ui/react";
import React, { Component } from "react";
import DetailsPage from "./DetailsPage";

class ProductsPage extends Component {
  render() {
    return (
      <Flex as="section" w="100vw" direction="column">
        <Heading>Produtos</Heading>

        <DetailsPage />
      </Flex>
    );
  }
}

export default ProductsPage;
