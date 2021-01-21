import React from "react";
import axios from "axios";
import {
  SimpleGrid,
  GridItem,
  Center,
  Text,
  Flex,
  Heading,
  // Box,
  // Button,
  // Collapse,
  // useDisclosure,
} from "@chakra-ui/react";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount = () => {
    this.getAllProducts();
  };

  // Get Products
  getAllProducts = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars"
      );
      this.setState({ products: response.data.cars });
    } catch (err) {
      console.log("Erro: ", err);
    }
  };

  render() {
    // const { isOpen, onToggle } = useDisclosure();

    // Renderizar array de produtos
    const listaDeProdutos = this.state.products.map((product) => {
      return (
        <GridItem
          minH="300px"
          p="1rem"
          boxShadow="1px 3px 10px #202020"
          borderRadius="5px"
          key={product.id}
        >
          <Flex h="100%" direction="column" justify="space-around">
            <Heading as="h4" textAlign="center" fontSize="20px">
              {product.name}
            </Heading>
            <Text fontSize="16px">Descrição: {product.description}</Text>
            <Text fontSize="16px">Valor: R$ {product.price}</Text>
            <Text fontSize="16px">
              Método de pagamento: {product.paymentMethod}
            </Text>
          </Flex>
        </GridItem>
      );
    });

    // Filters
    // const produtosFiltrados = listaDeProdutos.filter();

    return (
      <Center direction="column" h="80vh" w="100%" padding="2rem 2.5rem">
        <SimpleGrid h="100%" w="100%" minChildWidth="220px" spacing="3rem">
          {listaDeProdutos}
        </SimpleGrid>
        {/* <Button
        colorScheme="button"
        alignSelf="flex-start"
        onClick={() => onToggle()}
      >
        Detalhes
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <DetailsPage />
      </Collapse> */}
      </Center>
    );
  }
}

export default Products;
