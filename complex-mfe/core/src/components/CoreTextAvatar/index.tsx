import React, { FC } from "react";
import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

export interface Props extends AvatarProps {
  // The children prop to be rendered inside the Avatar component. Usually a text
  text: string;
  // The prop to determine whether the Avatar is selected or not (for conditional styling)
  isSelected: boolean;
}

const StyledAvatar = styled(Avatar, {
  // Why this approach?
  // I wish to pass props to the Avatar component and still be able to use the theme prop of MUI for future use (theming).
  // The passing of props should be done similar to styled components way shown here:
  // https://styled-components.com/docs/basics#adapting-based-on-props
  // The idea is to use the prop for conditional styling.
  // The following issue is related to this:
  // https://github.com/mui/material-ui/issues/29207 - @siriwatknp.
  shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  backgroundColor: isSelected ? "#96cae4" : "#dedcdc",
  color: isSelected ? "white" : "#a2a2a2",
}));

const TextAvatar: FC<Props> = ({ text, isSelected = false, ...props }) => {
  return (
    <StyledAvatar isSelected={isSelected} {...props}>
      {text}
    </StyledAvatar>
  );
};

export default TextAvatar;
