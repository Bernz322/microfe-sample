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
  SearchableSelect,
} from "./components";
import { Box, Container } from "./layout";

import "./index.scss";
import { CircularProgress } from "@mui/material";

const options: IOptions[] = [
  { name: "Option 1", value: "1", id: "1" },
  { name: "Option 2", value: "2", id: "2" },
];

interface IOptions {
  name: string;
  value: string;
  id: string;
}

const App = () => {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState<IOptions>(options[0]); // Value of the option selected by the user
  const [inputValue, setInputValue] = React.useState(""); // Value displayed in the textbox

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 10));
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // console.log('test');

  const onChangeHandler = (event, value: IOptions) => {
    console.log(value)
    setValue(value);
  };

  const onInputChangeHandler = (event, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>The following components are available: </div>
      <MBOAppBar />
      <MBODrawer />
      <Box />
      <Container sx={{ m: 10 }}>
        <Grid container>
          <Grid item xs={3}>
            <Button id="3">Hello</Button>
          </Grid>
          <Grid item xs={4}>
            <TextField label="A text field" />
          </Grid>
          <Grid item xs={4}>
            <Typography>Typography</Typography>
          </Grid>
        </Grid>

        <h1 className="text-2xl mb-5">SearchableSelect Component Below</h1>
        <div>
          <p>{`value: ${value !== null ? `${value}` : "null"}`}</p>
          <p>{`inputValue: '${inputValue}'`}</p>
          <br />
          <SearchableSelect
            onChange={onChangeHandler}
            onInputChange={onInputChangeHandler}
            value={value}
            inputValue={inputValue}
            optionData={options}
          />
        </div>
        <h1 className="text-2xl my-5">Text Avatar Component Below</h1>
        <Grid container>
          <Grid xs={2} item>
            <TextAvatar text="JB" isSelected={false} />
            <Typography>Not selected</Typography>
          </Grid>
          <Grid xs={10} item>
            <TextAvatar text="CB" isSelected />
            <Typography>Selected</Typography>
          </Grid>
        </Grid>
        <h1 className="text-2xl my-5 ">Circular Progress 2 Component Below</h1>

        <Grid container>
          <Grid xs={2} item>
            <CircularProgress2
              size={85}
              thickness={1.5}
              style={{
                color: "#74afc7",
              }}
            />
            <Typography>MBO 2nd Blank Page Circular Progress</Typography>
          </Grid>
          <Grid xs={10} item>
            <CircularProgress2
              size={85}
              thickness={5.5}
              style={{
                margin: "0 10px",
              }}
              value={progress}
              variant="static"
            />
            <Typography>Static variant with value</Typography>
          </Grid>
          <Grid xs={10} item>
            <CircularProgress2
              size={85}
              thickness={5.5}
              style={{
                margin: "0 10px",
              }}
              value={progress}
              variant="determinate"
            />
            <Typography>Determinate variant with value</Typography>
          </Grid>
          <Grid xs={10} item>
            <CircularProgress2 size={85} thickness={1.5} />
            <Typography>Indeterminate variant</Typography>
          </Grid>
          <Grid xs={10} item>
            <CircularProgress />
            <Typography>Default MUI Circular Progress</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
