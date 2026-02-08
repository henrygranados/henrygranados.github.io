import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { router } from "./router";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
