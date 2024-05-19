import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const useError = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) 
    return 'This page does not exist.';
  return 'Sorry, an unexpected error occurred.';
}

export default useError;