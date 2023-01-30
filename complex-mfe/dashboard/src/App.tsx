import React from "react";
import ReactDOM from "react-dom";
import {
  useLocalStorage,
  Box,
  CssBaseline,
  MBODrawer,
  MBOAppBar,
} from "core/coreItems";
import { StoreProvider } from "store/mfeStore";

import "./index.scss";

const App = () => {
  const [name, setName] = useLocalStorage("name", "Bob");
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MBODrawer />
      <MBODrawer />
      <MBODrawer />
      <Box
        component="main"
        position="relative"
        sx={{ width: `calc(100vw - 210px)` }}
      >
        <MBOAppBar />
        <Box sx={{ margin: "15px" }}>
          <h1>{name}</h1>
        </Box>
      </Box>
    </Box>
  );
};

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
