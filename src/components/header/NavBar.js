import React, { Children } from "react";
import { Box, Flex, Image, Button } from "@chakra-ui/react";
// import DetailsPage from "../pages/DetailsPage";
// import RegisterProductPage from "../pages/RegisterProductPage";
// import HomePage from "../pages/HomePage";
// import ProductsPage from "../pages/ProductsPage";

// import logo from "../img/logo.png";
// import styled from "styled-components";
// import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// import { TextField, Button } from "@material-ui/core";
// import lupa from "../img/lupa.svg";
// import home from "../img/casa.svg";

// const myTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: " ",
//     },
//   },
// });

// const NavHeader = styled.header`
//   display: flex;
//   padding-right: 0px;
//   align-items: center;
//   justify-content: space-between;
//   /* background-color: tomato; */

//   @media (min-device-width: 320px) and (max-device-width: 420px) {
//     flex-direction: column;
//     padding: 2em 0;
//   }
// `;
// const Section = styled.div`
//   padding-left: 0px;
//   width: 0vw;
//   display: flex;

//   @media (min-device-width: 320px) and (max-device-width: 420px) {
//     width: 0%;
//     margin: 1em 0;
//   }
// `;

// const Logo = styled.img`
//   width: 5%;
//   padding: 0 10px;
//   @media (min-device-width: 320px) and (max-device-width: 420px) {
//     width: 0%;
//   }
// `;

// const Lupa = styled.img`
//   width: 5%;
//   padding-left: 0px;
// `;

// const Home = styled.img`
//   width: 5%;
//   cursor: pointer;
//   @media (min-device-width: 320px) and (max-device-width: 420px) {
//     width: 5%;
//     margin-bottom: 1.2em;
//   }
// `;

const NavBar = ({ children }) => {
  // const inputSearch = (
  //   <Section>
  //     <TextField
  //       size="small"
  //       value={this.props.inputSearchValue}
  //       onChange={this.props.onChangeInputSearch}
  //       id="outlined-basic"
  //       label="Buscar"
  //       variant="outlined"
  //     />
  //     <Lupa src={lupa} />
  //   </Section>
  // );

  // const homeButton = <Home src={home} onClick={this.props.goToHomePage} />;

  // const buttonsHome = (
  //   <div>
  //     <Button onClick={this.scrollToAbout} color="primary">
  //       Pergunta 1?
  //     </Button>
  //     <Button onClick={this.scrollToHow} color="primary">
  //       Pergunta 2?
  //     </Button>
  //   </div>
  // );

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      h="10vh"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingX="2rem"
    >
      {children}
    </Flex>
    // <MuiThemeProvider theme={myTheme}>
    //   <NavHeader>
    //     <Logo src={logo} alt={"logo do FutureCar"} />
    //     {this.props.currentPage !== "home" ? homeButton : buttonsHome}
    //     {this.props.currentPage !== "registration" ? inputSearch : null}
    //     <Button
    //       variant="contained"
    //       onClick={
    //         this.props.currentPage !== "registration"
    //           ? this.props.goToRegistrationPage
    //           : this.props.goToJobViewPage
    //       }
    //       color="primary"
    //     >
    //       {this.props.currentPage !== "registration"
    //         ? "Carro é só no FutureCar!"
    //         : "Serviços disponíveis"}
    //     </Button>
    //   </NavHeader>
    // </MuiThemeProvider>
  );
};

export default NavBar;
