import { Flex, Heading, Box, Text, Image, Button, Slider, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Bugatti from '../img/Bugatti.jpg'

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
background="#ffffff"
>

          {/* SLIDER - IMAGEM GRANDE DE CARRO COM BOÃO E FRASE DE CHAMADA */}
  <Flex
  w="100%"
  h="100%"
  >
    <Image zIndex="1" src={Bugatti} alt="Bentley Continental" />
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

                           {/* 1 RETANGULO COM PROPAGANDA   */}
 <Box
  w="100%"
  minH="240px"
  background="bluePalette.300"
  color="bluePalette.900"
  >
    <Text
    textAlign="center"
    padding="4%"    
    fontSize="28px"
    fontWeight="500"
    color="#ffffff"
    >
      <h2>Seu negócio depende de leads qualificados para crescer.</h2> 
      <p>Conheça os melhores resultados.</p> 
      <p>Solicite um contato e descubra porquê nossos clientes estão tão satisfeitos.</p> 
      <p>Alinhamento Estratégico. Dados e Criatividade. Altamente Especializada.</p>
    </Text>
 </Box>


      {/* 2 RETANGULOS - 1 COM IMAGEM DE CARRO - 2 DIZERES SOBRE O VEICULO */}
 <Grid templateColumns="repeat(2, 1fr)" gap={0} margin="5vw">
      <Box w="100%" h="60" bg="#bluePalette.900">
        <Text
        textAlign="center"
        padding="4%"    
        fontSize="28px"
        fontWeight="500"
        color="#ffffff"
        >
          <p>Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p> 
        </Text>
      </Box>
      <Box w="100%" h="60" bg="#f6f6f6">
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />
      </Box>       
  </Grid>  

  
  {/* 5 RETANGULOS COM IMAGEns DAS CATEGORIAS OFERECIDAS */}
  <Box
  w="100%"
  h="400px" 
  background="#ffffff"
  > 
    <Heading 
    w="100%"
    h="70px"
    color="#EB4A47"
    textAlign="center"
    padding="1%"
    
    >
      Categoria de veículos
    </Heading>
    <Grid templateColumns="repeat(5, 1fr)" gap={6}
    w="95%" h="300px" marginLeft="2%"  
    color="#EB4A47"  
    textAlign="center"
    fontWeight="600"
    fontSize="22px"
    >
      <Box w="100%" h="200px" >
      <Text >Utilitários</Text> 
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />    
      </Box>

      <Box w="100%" h="200px" >
      <Text >Utilitários</Text> 
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />    
      </Box>

      <Box w="100%" h="200px" >
      <Text >Utilitários</Text> 
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />    
      </Box>

      <Box w="100%" h="200px" >
      <Text >Utilitários</Text> 
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />    
      </Box>

      <Box w="100%" h="200px" >
      <Text >Utilitários</Text> 
      <Image boxSize="100%" objectFit="cover"
      src={Bugatti} alt="Segun Adebayo" />    
      </Box>
    </Grid>
  </Box>

  
    
   
    
   
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
