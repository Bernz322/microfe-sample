import React from "react";
import ReactDOM from "react-dom";
import {
  useLocalStorage,
  Box,
  CssBaseline,
  MBODrawer,
  MBOAppBar,
  TextAvatar,
  CircularProgress2,
  Grid,
  Typography,
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
          <h1 className="mb-5">{name}</h1>
          <h1 className="text-2xl mb-5">Text Avatar Component Below</h1>
          <Grid container>
            <Grid xs={2} item>
              <TextAvatar text="JB" />
              <Typography>Not selected</Typography>
            </Grid>
            <Grid xs={10} item>
              <TextAvatar text="CB" isSelected />
              <Typography>Selected</Typography>
            </Grid>
          </Grid>
          <h1 className="text-2xl my-5 ">
            Circular Progress 2 Component Below
          </h1>
          <CircularProgress2
            size={85}
            thickness={1.5}
            style={{
              color: "#74afc7",
            }}
          />
          <CircularProgress2
            size={85}
            thickness={5.5}
            style={{
              margin: "0 10px",
            }}
          />
          <CircularProgress2 size={85} thickness={1.5} />
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
