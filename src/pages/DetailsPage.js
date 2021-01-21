import React, { Component } from "react";
import {
  Flex,
  Heading,
  Box,
  Button,
  Image,
  Input,
  FormControl,
} from "@chakra-ui/react";
import imgDetails from "../img/imgDetails.png";

class DetailsPage extends Component {
  // TO DO: STATE

  // TO DO: GET
  render() {
    return (
      <Flex direction="column" w="100vw">
        {" "}
        {/* página */}
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Flex
            w="50vw"
            h="100%"
            paddingX="2rem"
            direction="column"
            justifyContent="space-between"
          >
            <Heading fontSize="36px" p="2rem">
              Detalhes do produto
            </Heading>

            <Box h="100%">
              {/* <Heading paddingY="1rem" fontSize="24" as="h3">
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
              </Heading> */}
              <FormControl
                display="flex"
                justifyContent="space-between"
                w="100%"
              >
                <Input placeholder="Marca" maxW="20vw" marginY="1rem" />
                <Input placeholder="Modelo" maxW="20vw" marginY="1rem" />
              </FormControl>
              <Input placeholder="Descrição" />
              <Input placeholder="Descrição" />
              <Input placeholder="Descrição" />
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
