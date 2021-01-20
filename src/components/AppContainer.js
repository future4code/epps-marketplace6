import React, { Component } from "react";
import { Flex } from "@chakra-ui/react";
import DetailsPage from "../pages/DetailsPage";
import RegisterProductPage from "../pages/RegisterProductPage";
import HomePage from "../pages/HomePage";

export class AppContainer extends Component {
  state = {
    pages: "",
  };
  render() {
    // const changePages = () => {
    //   switch (this.state.pages) {
    //     case "home":
    //       return <HomePage />;
    //     case "products":
    //       return <ProductsPage />;
    //     case "details":
    //       return <DetailsPage />;
    //     case "register":
    //       return <RegisterProductPage />;
    //     default:
    //       return <HomePage />;
    //   }
    // };
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
        {/* <Header></Header> */}
        {/* {changePages} */}
        <DetailsPage />

        {/* <Footer></Footer> */}
      </Flex>
    );
  }
}
