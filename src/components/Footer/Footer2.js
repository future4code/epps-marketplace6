import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";

class Header2 extends React.Component {
    render() {
        return (
            <Flex>
                <Link>Condições de uso</Link>
                <Link>Fale conosco</Link>
                <Image />
            </Flex>
        )
    }
}

export default Header2;