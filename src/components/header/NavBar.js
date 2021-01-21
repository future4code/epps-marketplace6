import React from "react";
import { Flex } from "@chakra-ui/react";

const NavBar = ({ children }) => {
  return (
    <Flex
      as="header"
      h="10vh"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingX="2rem"
    >
      {children}
    </Flex>
  );
};

export default NavBar;
