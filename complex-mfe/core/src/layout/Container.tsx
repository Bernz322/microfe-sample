import React, { FC } from "react";
import { Container as MUIContainer, ContainerProps } from "@mui/material";

interface Props extends ContainerProps {
  icon?: React.ReactNode;
}

export const Container: FC<Props> = ({ children, ...props }) => (
  <MUIContainer {...props}>{children}</MUIContainer>
);
