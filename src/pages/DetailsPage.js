import React, { Component } from "react";
import { Flex, Heading, Box, Button, Image } from "@chakra-ui/react";
import imgDetails from "../img/imgDetails.png";

class DetailsPage extends Component {
  // TO DO: STATE

  // TO DO: GET
  render() {
    return (
      <Flex direction="column" w="100vw">
        <Heading p="2rem">Detalhes do produto</Heading>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Flex
            w="50vw"
            h="100%"
            paddingX="2rem"
            direction="column"
            justifyContent="space-between"
          >
            <Box h="100%">
              <Heading paddingY="1rem" fontSize="24" as="h3">
                Marca/Modelo:{" "}
              </Heading>
              <Heading paddingY="1rem" fontSize="24" as="h3">
                Descrição:{" "}
              </Heading>
              <Heading paddingY="1rem" fontSize="24" as="h3">
                Valor:{" "}
              </Heading>
              <Heading paddingY="1rem" fontSize="24" as="h3">
                Data de entrega:{" "}
              </Heading>
              <Heading paddingY="1rem" fontSize="24" as="h3">
                Métodos de pagamento
              </Heading>
            </Box>
            <Button margin="1rem" alignSelf="flex-end" colorScheme="brand.900">
              Comprar
            </Button>
          </Flex>
          <Box w="50vw">
            <Image src={imgDetails} alt="" />
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default DetailsPage;
