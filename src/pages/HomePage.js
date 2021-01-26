import { Flex, Heading, Box, Text, Image, Button, Slider, Grid } from "@chakra-ui/react";
import React from "react"
import Bugatti from "../img/Bugatti3.jpg"
import Bugatti3 from "../img/bugattiDeTres.jpg"
import Corolla from "../img/corolla.jpg"
import Ram from "../img/pickupFzda.jpg"
import Bmw from "../img/bmw.jpg"
import Bentley from "../img/Bentley.jpg"
import Tiguan from '../img/tiguan.jpg'
import Popular from "../img/popular.jpg"
import Pickup from "../img/pickup.jpg"
import Minivan from "../img/minivan.jpg"
import Esportivo from "../img/esportivo.jpg"
import Luxo from "../img/luxo.jpg"



class HomePage extends React.Component {
  render() {
    return (
      <Flex direction="column" background="#ffffff" paddingBottom="4rem" >

        {/* START HERO BANNER*/}
        <Flex
          w="100%"
          h="auto"
          direction="column"
          justify="center"
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          bgImage={`url('${Bugatti}')`}
        >
          
            <Box w="100vw" h="80vh">
              <Flex h="100%" w="95%" direction="column" paddingTop="4rem" >
                <Heading
                  as="h1"
                  fontFamily="'Poppins', sans-serif"
                  fontWeight="900"
                  color="#EF6F6C"
                  fontSize="48px"
                  textAlign="right"
                  textShadow="1px 1px 3px #000000"
                >
                  FUTURECAR
                </Heading>

                <Heading fontSize="30px" as="h3" textShadow="1px 1px 3px #000000" textAlign="right">
                  GOING BEYOND
                </Heading>
                <Button alignSelf="flex-end" size="sm" marginTop="2rem" colorScheme="button" onClick={() => this.changeProductsPage({ value: "ProductsPage" })}>
                  Saiba mais
                </Button>
              </Flex>
            </Box>          
        </Flex> 
        {/*END HERO BANNER*/}


        {/* START VINHETA  */}
        <Flex w="100%" h="250px">
          <Text
            w="90%"
            h="91%"
            color="#000000"
            textAlign="center"
            paddingLeft="8%"
            paddingTop="4%" 
            fontSize="36px" 
            fontWeight="600"          
          >
            <p>O carro de seus sonhos está tão perto!</p>
            <p> Vamos dizer ........ a somente 2 cliques.</p>
          </Text>
        </Flex>
        {/* END VINHETA  */}


        {/* START DIV TIGUAN + DIV DIZERES DA TIGUAL */}
        <Box w="100%" h="400" background="#ffffff">
          
          {/* DIV COM FOTO TIGUAN + DIV COM DIZERES DA TIGUAN */}
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={0}
            w="90%"
            h="90%"
            marginLeft="2%"
            color="#000000"
            textAlign="right"
            fontWeight="500"
            fontSize="24px"
          >
            <Box w="100%" >
              <Box w="70%" h="60%" marginTop="10%" marginLeft="20%">
              Reestilização da Tiguan 2021 traz novas tecnologias e inédita versão híbrida.
              </Box>
            </Box>

            <Box w="100%" >
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Tiguan}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>  
         {/*END DIV TIGUAN + DIV DIZERES DA TIGUAL */}

        {/* ESPAÇO EM BRANCO - SEPARADOR   */}
          <Heading w="100%" h="50px" />     


        {/* START DIV COM TITULO CATEGORIAS */}
        <Box w="100%" h="330px" background="#ffffff">
          <Heading
            w="100%"
            h="120px"
            color="#EB4A47"
            textAlign="center"
            padding="2%"
          >
            Categoria de veículos
          </Heading>
        {/* End DIV COM TITULO CATEGORIAS */}

           {/* START 5 DIV COM IMAGENS DAS CATEGORIAS OFERECIDAS */}
          <Grid
            templateColumns="repeat(5, 1fr)"
            gap={6}
            w="95%"
            h="210px"
            marginLeft="2%"
            color="#EB4A47"
            textAlign="center"
            fontWeight="600"
            fontSize="22px"
          >
            <Box w="100%" h="120px" >
              <Text>Esportivos</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Esportivo}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="120px">
              <Text>Populares</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Popular}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="120px">
              <Text>Pickup</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Pickup}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="120px">
              <Text>Microvan</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Minivan}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="120px">
              <Text>Super Luxo</Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Luxo}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>
        {/* END 5 DIV COM IMAGENS DAS CATEGORIAS OFERECIDAS */}
        {/* END DIV COM TITULO CATEGORIAS */}


        {/* START TITULO DESTAQUES DO MÊS */}
        <Box w="100%" h="400px" background="#ffffff">
          <Heading
            w="100%"
            h="100px"
            color="#EB4A47"
            textAlign="center"
            padding="2%"
          >
            Destaques do mês
          </Heading>
        {/* END TITULO DESTAQUES DO MÊS */}

          {/* START DIV COM 3 FOTOS DE CARROS DESTAQUES DO MÊS */}
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            w="95%"
            h="350px"
            marginLeft="2%"
            color="#000000"
            textAlign="center"
            fontWeight="500"
            fontSize="14px"
          >
            <Box w="100%" h="200px">
              <Text>
              Bugatti Veyron  ano 2016, 12.000 km, revisões em dia,
              Ipva 2021 pago. Preço: R$ 4.358.000,00                 
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bugatti3}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>
              Bentley Continental - ano 2015 – 4.0 GT gasolina 4 
              portas automático R$ 1.200.000,00  
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bentley}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="200px">
              <Text>
              Novo Toyota Corolla Altis Premium Hibrido -
               20/21 Automático 0km - R$143.870,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Corolla}
                alt="Cafro do mês"
              />
            </Box>
          </Grid>
        </Box>
        {/* END DIV COM 3 FOTOS DE CARROS DESTAQUES DO MÊS */}


        {/* START DIV COM 2 FOTOS DE CARROS DESTAQUES DO MÊS */} 
        <Box w="100%" h="290" background="#ffffff">
         
          <Grid
            templateColumns="repeat(2, 1fr)"
            gap={6}
            w="95%"
            h="290px"
            marginLeft="2%"
            color="#000000"
            textAlign="center"
            fontWeight="500"
            fontSize="14px"
          >
            <Box w="100%" h="240px">
              <Text>
               RAM 2500 ano 2021 capacidade de carga 1.350 kg 
               cambio automático motor híbrido preço  R$ 420.000
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Ram}
                alt="Cafro do mês"
              />
            </Box>

            <Box w="100%" h="240px">
              <Text>
                BMW Z4 carro esportivo, conversível, dupla capota, 
                com 6.500 km gasolina 2 portas R$ 380.000,00
              </Text>
              <Image
                boxSize="100%"
                objectFit="cover"
                src={Bmw}
                alt="Carro do mês"
              />
            </Box>
          </Grid>
        </Box>
        {/* END DIV COM 2 FOTOS DE CARROS DESTAQUES DO MÊS */} 

      </Flex>
    );
  }
}

export default HomePage;
