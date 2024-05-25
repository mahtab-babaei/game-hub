import { HStack, Image, Show, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Show breakpoint="(min-width: 676px)">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Show>
        <Show breakpoint="(max-width: 675px)">
          <Text fontWeight="bold" whiteSpace="nowrap">
            R A W G
          </Text>
        </Show>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
