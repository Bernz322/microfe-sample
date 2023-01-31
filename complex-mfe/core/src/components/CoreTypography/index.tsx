import React, { FC } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

const CoreTypography: FC<Props> = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

export default CoreTypography;
