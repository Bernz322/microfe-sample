import React, { FC } from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  icon?: React.ReactNode;
}

export const Button: FC<Props> = ({
  icon,
  children,
  variant = "contained",
  color = "primary",
  ...props
}) => (
  <MUIButton variant={variant} color={color} startIcon={icon} {...props}>
    {children}
  </MUIButton>
);
