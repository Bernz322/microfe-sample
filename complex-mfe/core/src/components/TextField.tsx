import React, { FC } from "react";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";

type Props = {
  label: string;
} & TextFieldProps;

export const TextField: FC<Props> = ({ label = "Text Field", ...props }) => (
  <MUITextField label={label} {...props} />
);
