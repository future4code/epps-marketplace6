import React, { Component } from "react";
import { Flex, Heading, Box, Button, Text } from "@chakra-ui/react";
// import Header from "../components/header/Header";

class DetailsPage extends Component {
  render() {
    return (
      <Flex>
        {/* <Header></Header> */}
        <Flex marginX="2rem" direction="column">
          <Heading color="#F4F6F4">Detalhes do produto</Heading>
          <Box color="#F4F6F4">
            <Text>Marca/Modelo</Text>
            <Text>Descrição</Text>
            <Text>Valor</Text>
            <Text>Método de pagamento</Text>
            <Text>Data de entrega</Text>
            <Button>Comprar</Button>
          </Box>
          <Box>
            <img src="" alt="" />
          </Box>
        </Flex>

        {/* <Footer></Footer> */}
      </Flex>
    );
  }
}

export default DetailsPage;
