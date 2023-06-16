import React from "react";
import ReactDOM from "react-dom/client";

import {SingIn} from "./pages/SingIn";
import { ThemeProvider } from "styled-components";
import  GlobalStyle from './styles/global.js'
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>
);
