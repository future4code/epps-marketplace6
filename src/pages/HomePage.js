import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

// import CategoryCard from "./CategoryCard";

class HomePage extends React.Component {
  render() {
    return (
      <Flex
        as="section"
        w="100vw"
        h="90vh"
        margin="2rem"
        padding="2rem"
        direction="column"
      >
        <Heading
          as="h1"
          fontFamily="'Poppins', sans-serif"
          fontWeight="900"
          color="#EF6F6C"
          fontSize="64px"
          marginTop="2rem"
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
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          consequatur impedit praesentium quisquam maxime debitis maiores
          placeat optio porro fugit eaque sit, qui natus consectetur eveniet quo
          nam quos? Facere?
        </Text>
        {/* <CategoryCard goToJobViewPage={this.props.goToJobViewPage}/> */}
      </Flex>
    );
  }
}

export default HomePage;
