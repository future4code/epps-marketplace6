import React, { Component } from "react";
import imgRegister from "../img/imgRegister.jpg";

import {
  Flex,
  Heading,
  Box,
  Input,
  Button,
  FormControl,
  Image,
} from "@chakra-ui/react";


class RegisterProductForm extends Component {
  render() {
    return (

      <Flex
        as="section"
        // direction="column"
        w="100vw"
        h="80vh"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex
          as="article"
          direction="column"
          justifyContent="space-between"
          w="40vw"
          h="80%"
          padding="4rem 2rem"
        >
          <Heading>Formulário</Heading>

          <Box as="form" w="100%">
            <FormControl display="Flex" justifyContent="space-between" w="100%">
              <Input placeholder="Marca" maxW="20vw" marginY="1rem" />
              <Input placeholder="Modelo" maxW="20vw" marginY="1rem" />
            </FormControl>

            <Input placeholder="Descrição" marginY="1rem" />
            <Input placeholder="Data de entrega" marginY="1rem" />
            <Input placeholder="Métodos de Pagamento" marginY="1rem" />
          </Box>

          <Button colorScheme="button" alignSelf="flex-end">
            Cadastrar oferta
          </Button>
        </Flex>

        <Box
          as="aside"
          display="flex"
          justifyContent="space-around"
          alignSelf="flex-end"
          w="60vw"
          h="100%"
          /*marginY="5rem"*/
        >
          <Image src={imgRegister} alt="Opala-Diplomata-1990-da-Chevrolet" />
        </Box>

      </Flex>
    );
  }
}


export default RegisterProductForm;

