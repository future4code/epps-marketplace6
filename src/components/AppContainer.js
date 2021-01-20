import React, { Component } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import DetailsPage from "../pages/DetailsPage";
import RegisterProductPage from "../pages/RegisterProductPage";

export class AppContainer extends Component {
  render() {
    return (
      <Flex
        h="100vh"
        w="100vw"
        direction="column"
        align="center"
        justify="center"
        background="#272F3F"
        fontFamily="'Montserrat', sans-serif"
        paddingX="2rem"
        bgGradient="linear-gradient(-10deg, #272F3F, #235B80)"
      >
        <Heading
          fontFamily="'Poppins', sans-serif"
          fontWeight="900"
          color="#EF6F6C"
          fontSize="64px"
          as="h1"
        >
          FUTURECAR
        </Heading>

        <Heading color="#F0FAF7" fontSize="64px" as="h1">
          going beyond
        </Heading>
        <Text color="#F0FAF7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consequatur impedit praesentium quisquam maxime debitis maiores
          placeat optio porro fugit eaque sit, qui natus consectetur eveniet quo
          nam quos? Facere?
        </Text>
        <DetailsPage />
        <RegisterProductPage />
      </Flex>
    );
  }
}
