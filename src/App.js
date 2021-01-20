import React from "react";
import { AppContainer } from "./components/AppContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// futurecar chakra theme
const futureCarTheme = extendTheme({
  // Global styles
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear-gradient(-10deg, #272F3F, #235B80)",
        color: "#F0FAF7",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      button: {
        bgColor: "#EF6F6C",
        _hover: {
          bgColor: "#ED5C5A",
        },
      },
    },
  },

  // Tema da paleta de cores
  colors: {
    brand: {
      100: "#F0FAF7",
      500: "#235B80",
      700: "#465775",
      900: "#272F3F",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={futureCarTheme}>
      <AppContainer />
    </ChakraProvider>
  );
}

export default App;
