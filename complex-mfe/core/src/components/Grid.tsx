import React, { FC } from "react";
import { Grid as MuiGrid, GridProps } from "@mui/material";

interface Props extends GridProps {
  children: React.ReactNode;
}

export const Grid: FC<Props> = ({ children, ...props }) => (
  <MuiGrid {...props}>{children}</MuiGrid>
);

