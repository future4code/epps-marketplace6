import React, { Component } from "react";
import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react";
// import Header from "../components/header/NavBar";

class DetailsPage extends Component {
  // TO DO: STATE

  // TO DO: GET
  render() {
    return (
      <Flex p="2rem" direction="column" w="100vw">
        {/* <Header /> */}
        <Heading>Detalhes do produto</Heading>
        <Flex>
          <Flex w="50vw" direction="column">
            <Heading fontSize="24" as="h3">
              Marca/Modelo:{" "}
            </Heading>
            <Heading fontSize="24" as="h3">
              Descrição:{" "}
            </Heading>
            <Heading fontSize="24" as="h3">
              Valor:{" "}
            </Heading>
            <Heading fontSize="24" as="h3">
              Data de entrega:{" "}
            </Heading>
            <Heading fontSize="24" as="h3">
              Métodos de pagamento
            </Heading>
            <Button alignSelf="flex-end" colorScheme="brand.900">
              Comprar
            </Button>
          </Flex>
          <Box w="50vw">
            <img src="" alt="" />
            <Text>IMG PLACEHOLDER</Text>
          </Box>
        </Flex>

        {/* <Footer></Footer> */}
      </Flex>
    );
  }
}

export default DetailsPage;
