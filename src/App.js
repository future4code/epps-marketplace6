import React from "react";
import { AppContainer } from "./components/AppContainer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <AppContainer />
    </ChakraProvider>
  );
}

export default App;
