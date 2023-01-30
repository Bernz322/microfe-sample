import React, { FC } from "react";
import { Typography as MUITypography, TypographyProps } from "@mui/material";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

export const Typography: FC<Props> = ({ children, ...props }) => (
  <MUITypography {...props}>{children}</MUITypography>
);
