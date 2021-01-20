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
        bgColor: "magentaPalette.400",
        _hover: {
          bgColor: "magentaPalette.400",
        },
      },
    },
  },

  // Tema da paleta de cores
  colors: {
    bluePalette: {
      500: "#235B80",
      700: "#465775",
      900: "#272F3F",
    },
    magentaPalette: {
      400: "#EF6F6C",
      500: "#ED5C5A",
    },
    greyPalette: {
      100: "#F0FAF7",
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
