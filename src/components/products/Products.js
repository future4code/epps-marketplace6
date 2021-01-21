import React from "react";
import axios from "axios";
import {
  SimpleGrid,
  GridItem,
  Text,
  Flex,
  Heading,
  Input,
  FormLabel,
  Box,
  // Button,
  // Collapse,
  // useDisclosure,
} from "@chakra-ui/react";

class Products extends React.Component {
  state = {
    products: [],
    filterInput: "",
    maxPriceInput: 0,
    minPriceInput: 0,
  };

  componentDidMount = () => {
    this.getAllProducts();
  };
  componentWillUnmount = () => {
    this.getAllProducts();
  };

  onChangeStringFilter = (event) => {
    this.setState({ filterInput: event.target.value });
  };

  onChangeMaxPrice = (event) => {
    this.setState({ maxPriceInput: event.target.value });
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

    // Filters
    const filteredProducts = this.state.products
      // Filtro de nome
      .filter((product) => {
        const lowerCaseName = product.name.toLowerCase();
        const lowerCaseDescription = product.description.toLowerCase();
        return (
          lowerCaseName.includes(this.state.filterInput) ||
          lowerCaseDescription.includes(this.state.filterInput)
        );
      })
      // Filtro por valor máximo
      .filter((product) => {
        if (this.state.maxPriceInput === 0) return true;
        if (product.price <= this.state.maxPriceInput) return true;
      });
    // .sort(());

    return (
      <Flex
        as="article"
        direction="column"
        h="80vh"
        w="100%"
        padding="2rem 2.5rem"
      >
        <Flex paddingBottom="2rem" justify="space-between">
          <Input
            onChange={this.onChangeStringFilter}
            value={this.state.filterInput}
            placeholder="Filtrar nome/descrição"
            maxW="250px"
          />
          <Input
            onChange={this.onChangeMaxPrice}
            value={this.state.maxPriceInput}
            placeholder="Filtrar preço máximo"
            maxW="250px"
          />
          <Input placeholder="Ordenar por:" maxW="250px" />
        </Flex>
        <SimpleGrid h="100%" w="100%" minChildWidth="220px" spacing="3rem">
          {filteredProducts.map((product) => {
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
          })}
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
      </Flex>
    );
  }
}

export default Products;
