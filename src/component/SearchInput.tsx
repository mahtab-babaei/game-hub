import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Search2Icon />
      </InputLeftElement>
      <Input placeholder="Search games..." variant="filled" borderRadius={20} />
    </InputGroup>
  );
};

export default SearchInput;
