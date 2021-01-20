import React, { Component } from "react";
import { Flex, Image, Button, Box, Stack } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DetailsPage from "../pages/DetailsPage";
import RegisterProductPage from "../pages/RegisterProductPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import Header from "../components/header/NavBar";
import Logo from "../img/logo1.svg";

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
        as="main"
        h="100vh"
        w="100vw"
        direction="column"
        align="center"
        justify="center"
        fontFamily="'Montserrat', sans-serif"
        paddingX="2rem"
      >
        <Header>
          <Image src={Logo} />
          <Box as="nav">
            <Button colorScheme="button" onClick={this.goToHome}>
              Home
            </Button>
            <Button colorScheme="button" onClick={this.goToProducts}>
              Produtos
            </Button>
          </Box>
          <Button
            rightIcon={<AddIcon w="4" h="4" />}
            bgColor="transparent"
            paddingX="1.5rem"
            variant="outline"
            _hover={{
              color: "magentaPalette.600",
              bgColor: "bluePalette.500",
              borderColor: "magentaPalette.600",
              boxShadow: "1px 3px 3px bluePalette.900",
            }}
            onClick={this.goToRegister}
          >
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
