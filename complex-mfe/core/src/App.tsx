import React from "react";
import ReactDOM from "react-dom";
import {
  MBOAppBar,
  Button,
  TextField,
  Typography,
  Grid,
  MBODrawer,
  TextAvatar,
  CircularProgress2,
} from "./components";
import { Box, Container } from "./layout";

import "./index.scss";
import { CircularProgress } from "@mui/material";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>The following components are available: </div>
    <MBOAppBar />
    <MBODrawer />
    <Box />
    <Container sx={{ m: 10 }}>
      <Grid container>
        <Grid item xs={3}>
          <Button>Hello</Button>
        </Grid>
        <Grid item xs={4}>
          <TextField label="A text field" />
        </Grid>
        <Grid item xs={4}>
          <Typography>Typography</Typography>
        </Grid>
      </Grid>
      <TextAvatar text="Y" isSelected />
      <TextAvatar text="N" isSelected={false} />
      <CircularProgress />
      <CircularProgress2 size={60}/>
    </Container>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
