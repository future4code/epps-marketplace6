import {
  Flex,
  Heading,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import DetailsPage from "./DetailsPage";

const ProductsPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      as="section"
      w="100vw"
      height="80vh"
      direction="column"
      justifyContent="space-between"
    >
      <Heading>Produtos</Heading>

      <Button
        colorScheme="button"
        alignSelf="flex-start"
        onClick={() => onToggle()}
      >
        Detalhes
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <DetailsPage />
      </Collapse>
    </Flex>
  );
};

export default ProductsPage;
