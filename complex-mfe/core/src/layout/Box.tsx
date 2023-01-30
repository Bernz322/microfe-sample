import React, { FC } from "react";
import { Box as MUIBox, BoxProps } from "@mui/material";

interface Props extends BoxProps {
  icon?: React.ReactNode;
}

export const Box: FC<Props> = ({ children, ...props }) => (
  <MUIBox {...props}>{children}</MUIBox>
);
