import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

import Products from "../components/products/Products";

const ProductsPage = () => {
  return (
    <Flex
      as="section"
      w="100vw"
      height="80vh"
      direction="column"
      justifyContent="space-between"
    >
      <Heading>Produtos</Heading>

      <Products />
    </Flex>
  );
};

export default ProductsPage;
