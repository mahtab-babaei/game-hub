import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../services/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <Search2Icon />
        </InputLeftElement>
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="filled"
          borderRadius={20}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
