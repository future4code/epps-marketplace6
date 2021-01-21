import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

// import CategoryCard from "./CategoryCard";
import Categories from "../components/home/Categories";

class HomePage extends React.Component {
  render() {
    return (
      <Flex as="section" w="100vw" h="100%" paddingY="2rem" direction="column">
        <Flex as="article" direction="column">
          <Heading
            as="h1"
            fontFamily="'Poppins', sans-serif"
            fontWeight="900"
            color="#EF6F6C"
            fontSize="64px"
            textAlign="center"
          >
            FUTURECAR
          </Heading>

          <Heading
            paddingBottom="1rem"
            fontSize="36px"
            as="h3"
            textAlign="center"
          >
            going beyond
          </Heading>
        </Flex>

        <Categories />
      </Flex>
    );
  }
}

export default HomePage;
