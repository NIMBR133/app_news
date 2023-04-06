import { RouterProvider } from "react-router";

import { router } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
