import React from "react";
import {
  Grid,
  Center,
  Button,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import DetailsPage from "../../pages/DetailsPage";

const Products = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Center direction="column" w="100%">
      <Grid></Grid>
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
    </Center>
  );
};

export default Products;
