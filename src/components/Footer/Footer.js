import React from "react";
import { Flex, Link, Text } from "@chakra-ui/react";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiGithubFill,
} from "react-icons/ri";

class Header2 extends React.Component {
  render() {
    return (
      <Flex
        as="footer"
        w="100%"
        h="10vh"
        bgColor="brand.100"
        align="center"
        justifyContent="center"
        direction="column"
        color="brand.900"
        position="fixed"
        bottom="0"
        left="0"
        margin="0"
        padding="0"
      >
        <Flex w="100%" justifyContent="center">
          <Flex
            justifyContent="flex-end"
            w="50%"
            paddingLeft="1rem"
            fontSize="14px"
          >
            <Link paddingX="0.5rem">Condições de uso</Link>
            <Link paddingX="0.5rem">Fale conosco</Link>
          </Flex>
          <Flex justifyContent="flex-start" w="50%" paddingRight="2rem">
            <Link paddingX="0.5rem">
              <RiInstagramLine fontSize="1.5rem" />
            </Link>
            <Link paddingX="0.5rem">
              <RiFacebookCircleLine fontSize="1.5rem" />
            </Link>
            <Link paddingX="0.5rem">
              <RiLinkedinBoxLine fontSize="1.5rem" />
            </Link>
            <Link paddingX="0.5rem">
              <RiGithubFill fontSize="1.5rem" />
            </Link>
          </Flex>
        </Flex>
        <Flex w="100%" justifyContent="center">
          <Text fontSize="12px">© FutureCar 2021</Text>
        </Flex>
      </Flex>
    );
  }
}

export default Header2;
