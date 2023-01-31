import React, { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type Props = {
  label: string;
} & TextFieldProps;

const CoreTextField: FC<Props> = ({ label, ...props }) => (
  <TextField label={label} {...props} />
);

export default CoreTextField;
