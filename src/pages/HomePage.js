import { Flex, Heading, Box, Text, Image, Button, Slider, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bentley from '../img/Bentley.jpg'

// import CategoryCard from "./CategoryCard";
import Categories from "../components/home/Categories";

class HomePage extends React.Component {
  render() {
    return (
      <Flex
as="section"
width="100vw"
height="80vh"
direction="column"
background="#F0FAF7"
>
  <Flex
  w="100%"
  h="100%"
  >
    <Image zIndex="1" src={Bentley} alt="Bentley Continental" />
    <Flex zIndex="5" w="100%" h="100%" direction="column" justify="center" position="absolute">            
      <Button colorScheme="button" alignSelf="flex-end">Saiba mais</Button>
      <Text alignSelf="flex-end">Going Beyond</Text>
    </Flex>
  
   
  </Flex>

  <Box
    as="aside"
    display="flex"
    justifyContent="space-around"
    alignSelf="flex-end"
    w="60vw"
    h="100%"
    
  >
    
  </Box>



 <Box
  w="100%"
  minH="300px"
  background="bluePalette.300"
  color="bluePalette.900"
  >
    <Text
    textAlign="center"
    padding="1%"
    fontSize="22px"
    fontWeight="500"
    >
      <p>Novo Hyundai Creta roda em testes no Brasil e terá motor turbo do HB20</p>
      <p>Gosta do Hyundai Creta? Então é melhor ir se acostumando com o visual da nova geração</p>
    </Text>
 </Box>

  <box
  width="100%"
  height="20"
  >
   
  </box>

  <Slider
  width="100%"
  height="100%"
  background="#F6F6F6"
  >
  </Slider>
    <SimpleGrid columns={5} spacing={10} margin={10} background="#f6f6f6">
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
   
    
    <Grid templateColumns="repeat(2, 1fr)" gap={0} margin="3vw">
      <Box w="100%" h="20" bg="blue.500" />
      <Box w="100%" h="20" bg="blue.500" />
    </Grid>  
</Flex>
      /*<Flex as="section" w="100vw" h="100%" paddingY="2rem" direction="column">
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
    </Flex>*/
    );
  }
}

export default HomePage;
