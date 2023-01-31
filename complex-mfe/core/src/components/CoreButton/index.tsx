import React, { FC } from "react";
// import { Button as MUIButton, ButtonProps } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

interface Props extends ButtonProps {
  icon?: React.ReactNode;
}

const CoreButton: FC<Props> = ({
  icon,
  children,
  variant = "contained",
  color = "primary",
  ...props
}) => (
  <Button variant={variant} color={color} startIcon={icon} {...props}>
    {children}
  </Button>
);

export default CoreButton;
