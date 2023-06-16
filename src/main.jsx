import React from "react";
import ReactDOM from "react-dom/client";

import {New} from "./pages/New";
import { ThemeProvider } from "styled-components";
import  GlobalStyle from './styles/global.js'
import theme from './styles/theme.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode >
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <New />
    </ThemeProvider>
  </React.StrictMode>
);
