import React, { FC } from "react";
import Grid, { GridProps } from "@mui/material/Grid";

interface Props extends GridProps {
  children: React.ReactNode;
}

const CoreGrid: FC<Props> = ({ children, ...props }) => (
  <Grid {...props}>{children}</Grid>
);

export default CoreGrid;
