import { Flex, Heading, Button } from "@chakra-ui/react";
import React, { Component } from "react";
import DetailsPage from "./DetailsPage";

class ProductsPage extends Component {
  state = {
    details: false,
  };

  openDetails = () => {
    this.setState({ details: !this.state.details });
  };

  render() {
    return (
      <Flex as="section" w="100vw" direction="column">
        <Heading>Produtos</Heading>

        <Button onClick="{() => openDetails}">Go to Details</Button>
        {this.state.details ? <DetailsPage /> : ""}
      </Flex>
    );
  }
}

export default ProductsPage;
