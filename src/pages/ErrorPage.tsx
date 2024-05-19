import { Box, Heading, Text } from "@chakra-ui/react";
import useError from "../hooks/useError";
import Navbar from "../component/Navbar";

const ErrorPage = () => {
  const errorMessage = useError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
