import React, { Component } from "react";
import { Flex, Heading, Box } from "@chakra-ui/react";
import DetalhesPage from "./pages/DetalhesPage";
import CriarOfertaPage from "./pages/CriarOfertaPage";
import CriarOfertaForm from "./pages/CriarOfertaForm";

export class AppContainer extends Component {
  render() {
    return (
      <Flex
        h="100vh"
        w="100vw"
        direction="column"
        align="center"
        justify="center"
        background="#F0FAF7"
        fontFamily="'Montserrat', sans-serif;"
      >
        <Heading
          fontFamily="'Poppins', sans-serif;"
          fontWeight="900"
          color="#EF6F6C"
          fontSize="64px"
          as="h1"
        >
          FUTURECAR
        </Heading>

        <Heading color="#000" fontSize="64px" as="h1">
          going beyond
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consequatur impedit praesentium quisquam maxime debitis maiores
          placeat optio porro fugit eaque sit, qui natus consectetur eveniet quo
          nam quos? Facere?
        </p>
        <DetalhesPage />
        <CriarOfertaPage />
        <CriarOfertaForm />

      </Flex>
    );
  }
}
