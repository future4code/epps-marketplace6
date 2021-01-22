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
import Bugatti from "../img/Bugatti.jpg";
import Opala from "../img/imgRegister.jpg";

// import CategoryCard from "./CategoryCard";
import Categories from "../components/home/Categories";

class HomePage extends React.Component {
  render() {
    return (
      <Flex as="section" direction="column" background="#ffffff">
        {/* SLIDER - IMAGEM GRANDE DE CARRO COM BOÃO E FRASE DE CHAMADA */}
        {/* <Image w="100%" zIndex="1" src={Opala} alt="Bentley Continental" /> */}
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
          <Flex justify="space-around" alignItems="center" w="100%" h="100%">
            <Box></Box>
            <Flex direction="column" marginLeft="3rem" padding="2rem">
              <Heading
                as="h1"
                fontFamily="'Poppins', sans-serif"
                fontWeight="900"
                color="#EF6F6C"
                fontSize="72px"
                textAlign="center"
              >
                FUTURECAR
              </Heading>

              <Heading paddingBottom="1rem" fontSize="36px" as="h3">
                going beyond
              </Heading>
              <Button alignSelf="flex-end" colorScheme="button">
                Saiba mais
              </Button>
            </Flex>
          </Flex>
        </Flex>

        {/* <Box
          as="aside"
          display="flex"
          justifyContent="space-around"
          alignSelf="flex-end"
          w="60vw"
          h="100%"
        ></Box> */}

        {/* 1 RETANGULO COM PROPAGANDA   */}
        <Box
          w="100%"
          // minH="240px"
          background="bluePalette.300"
          color="bluePalette.900"
        >
          <Text textAlign="center" fontSize="28px" fontWeight="500">
            <h2>Seu negócio depende de leads qualificados para crescer.</h2>
            <p>Conheça os melhores resultados.</p>
            <p>
              Solicite um contato e descubra porquê nossos clientes estão tão
              satisfeitos.
            </p>
            <p>
              Alinhamento Estratégico. Dados e Criatividade. Altamente
              Especializada.
            </p>
          </Text>
        </Box>

        {/* 2 RETANGULOS - 1 COM IMAGEM DE CARRO - 2 DIZERES SOBRE O VEICULO */}
        <Grid templateColumns="repeat(2, 1fr)" gap={0}>
          <Box w="100%" h="60" bg="#bluePalette.900">
            <Text
              textAlign="center"
              fontSize="28px"
              fontWeight="500"
              color="#ffffff"
            >
              <p>
                Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit..."
              </p>
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
        </Grid>

        {/* 5 RETANGULOS COM IMAGEns DAS CATEGORIAS OFERECIDAS */}
        <Box w="100%" h="400px" background="#ffffff">
          <Heading w="100%" h="70px" color="#EB4A47" textAlign="center">
            Categoria de veículos
          </Heading>
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={6}
            w="95%"
            h="300px"
            color="#EB4A47"
            textAlign="center"
            fontWeight="600"
            fontSize="22px"
          >
            <Box w="100%" h="200px">
              <Text>Utilitários</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti}
                alt="Segun Adebayo"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>Utilitários</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti}
                alt="Segun Adebayo"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>Utilitários</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti}
                alt="Segun Adebayo"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>Utilitários</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti}
                alt="Segun Adebayo"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>Utilitários</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti}
                alt="Segun Adebayo"
              />
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
