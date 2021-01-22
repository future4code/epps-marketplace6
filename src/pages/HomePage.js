import {
  Flex,
  Heading,
  Box,
  Text,
  Image,
  Button,
  Slider,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Bugatti from "../img/Bugatti3.jpg";
import MiniBugati from "../img/MiniBugatti.jpg";
import Opala from "../img/imgRegister.jpg";

// import CategoryCard from "./CategoryCard";
import Categories from "../components/home/Categories";

class HomePage extends React.Component {
  render() {
    return (
      <Flex as="section" direction="column" background="#ffffff">
        {/* IMAGEM GRANDE DE CARRO COM BOTÃO E FRASE DE CHAMADA */}
        <Flex
          minW="100%"
          h="auto"
          minH="80vh"
          direction="column"
          justify="center"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgImage={`url('${Opala}')`}
          bgColor="rgba(0,0,0,0, 0.5)"
        >
          {/* 1 RETANGULO COM PROPAGANDA   */}
          <Box
            w="100%"
            // minH="240px"
            background="bluePalette.300"
            color="bluePalette.900"
          >
            <Text>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..."
            </Text>
          </Box>
          <Box w="100%" h="60" bg="#f6f6f6">
            <Image
              boxSize="100%"
              objectFit="cover"
              src={Bugatti}
              alt="Segun Adebayo"
            />
          </Box>

          {/* 5 RETANGULOS COM IMAGENS DAS CATEGORIAS OFERECIDAS */}
          <Box w="100%" h="380px" background="#ffffff">
            <Heading
              w="100%"
              h="120px"
              color="#EB4A47"
              textAlign="center"
              padding="4%"
            >
              Categoria de veículos
            </Heading>
            <Grid
              templateColumns="repeat(5, 1fr)"
              gap={6}
              w="95%"
              h="300px"
              marginLeft="2%"
              color="#EB4A47"
              textAlign="center"
              fontWeight="600"
              fontSize="22px"
            >
              <Box w="100%" h="170px">
                <Text>Esportivos</Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="170px">
                <Text>Populares</Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="170px">
                <Text>Pickup</Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="170px">
                <Text>Microvan</Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="170px">
                <Text>Super Luxo</Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>
            </Grid>
          </Box>

          {/* 2 FILERAS COM TRÊS IMAGENS *** DESTAQUES DO MÊS *** */}
          <Box w="100%" h="880px" background="#ffffff">
            <Heading
              w="100%"
              h="90px"
              color="#EB4A47"
              textAlign="center"
              padding="2%"
            >
              Destaques do mês
            </Heading>
            <Grid
              templateColumns="repeat(3, 1fr)"
              gap={6}
              w="95%"
              h="400px"
              marginLeft="2%"
              color="#000000"
              textAlign="center"
              fontWeight="500"
              fontSize="16px"
            >
              <Box w="100%" h="250px">
                <Text>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit."
                </Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="250px">
                <Text>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit."
                </Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="250px">
                <Text>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit."
                </Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>
            </Grid>
          </Box>
          <Box w="100%" h="" background="#ffffff">
            {/* ESPAÇO EM BRANCO - SEPARADOR   */}
            <Heading w="100%" h="20px" />

            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={6}
              w="95%"
              h="300px"
              marginLeft="2%"
              color="#000000"
              textAlign="center"
              fontWeight="500"
              fontSize="16px"
            >
              <Box w="100%" h="280px">
                <Text>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit."
                </Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              <Box w="100%" h="280px">
                <Text>
                  "Neque porro quisquam est qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit."
                </Text>
                <Image
                  boxSize="100%"
                  objectFit="cover"
                  src={MiniBugati}
                  alt="Segun Adebayo"
                />
              </Box>

              {/*<Box w="100%" h="200px" >
            <Text >"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."</Text> 
            <Image boxSize="100%" objectFit="cover"
            src={MiniBugati} alt="Segun Adebayo" />    
          </Box>*/}
            </Grid>
          </Box>

          <Heading w="100%" h="20px" />
        </Flex>
      </Flex>
    );
  }
}

export default HomePage;
