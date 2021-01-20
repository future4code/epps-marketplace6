import React, { Component } from "react";
import { Flex, Image, Button, Box } from "@chakra-ui/react";
import DetailsPage from "../pages/DetailsPage";
import RegisterProductPage from "../pages/RegisterProductPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import Header from "../components/header/NavBar";

export class AppContainer extends Component {
  state = {
    page: "home",
  };

  goToHome = () => {
    this.setState({ page: "home" });
  };
  goToProducts = () => {
    this.setState({ page: "products" });
  };
  goToRegister = () => {
    this.setState({ page: "register" });
  };
  render() {
    const changePages = () => {
      switch (this.state.page) {
        case "home":
          return <HomePage />;
        case "products":
          return <ProductsPage />;
        case "details":
          return <DetailsPage />;
        case "register":
          return <RegisterProductPage />;
        default:
          return <HomePage />;
      }
    };
    return (
      <Flex
        h="100vh"
        w="100vw"
        direction="column"
        align="center"
        justify="center"
        fontFamily="'Montserrat', sans-serif"
        paddingX="2rem"
      >
        <Header>
          <Image />
          <Box>
            <Button colorScheme="button" onClick={this.goToHome}>
              Home
            </Button>
            <Button colorScheme="button" onClick={this.goToProducts}>
              Produtos
            </Button>
          </Box>
          <Button colorScheme="button" onClick={this.goToRegister}>
            Registrar
          </Button>
        </Header>

        {changePages()}
        {/* <DetailsPage /> */}

        {/* <Footer></Footer> */}
      </Flex>
    );
  }
}
