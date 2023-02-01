import React from "react";
import { styled } from "@mui/material/styles";

const SIZE = 44;

// TODO: Add comments to all functions
const getRelativeValue = (value: number, min: number, max: number) => {
  const clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
};

const easeOut = (u: number) => {
  let t = u;
  t = getRelativeValue(t, 0, 1);
  // https://gist.github.com/gre/1650294
  t -= 1;
  t = t * t * t + 1;
  return t;
};

const easeIn = (t: number) => {
  return t * t;
};

interface Props {
  // MUI colors - default is primary
  color?: "primary" | "secondary" | "inherit";

  // The size of the loader container - default is 40
  size?: number | string;

  // Custom/ Additional styles to be applied to the loader container
  // Concept is the same as you pass an inline style: style={{someStyle: someValue}}
  style?: React.CSSProperties;

  // The thickness of the loader/ circle - default is 3.6
  thickness?: number;

  // The value of the loader (optional)
  // Mainly used for progress loaders (50 = 50%)
  // Must be paired with variant="static" or variant="determinate"
  value?: number;

  // The variant of the loader - default is indeterminate
  // determinate - the loader will spin with clear information about the progression
  // indeterminate - the loader spins with unclear information about the progression (no indicator of progress)
  // static - the loader will not spin and will reflect the value passed
  variant?: "determinate" | "indeterminate" | "static";

  // Any other props to be passed to the loader container
  // It is recommended to not use this and just add the props you need
  other?: any;
}

interface ICircleStyle {
  strokeDasharray: string;
  strokeDashoffset: string;
}
interface IRootStyle {
  transform: string;
}
interface IRootProps {
  "aria-valuenow": number;
}

const CircularProgress2: React.FC<Props> = ({
  color = "primary",
  size = 40,
  style,
  thickness = 3.6,
  value = 0,
  variant = "indeterminate",
  ...other
}) => {
  const circleStyle: ICircleStyle = {} as ICircleStyle;
  const rootStyle: IRootStyle = {} as IRootStyle;
  const rootProps: IRootProps = {} as IRootProps;

  if (variant === "determinate" || variant === "static") {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps["aria-valuenow"] = Math.round(value);

    if (variant === "static") {
      circleStyle.strokeDashoffset = `${(
        ((100 - value) / 100) *
        circumference
      ).toFixed(3)}px`;
      rootStyle.transform = "rotate(-90deg)";
    } else {
      circleStyle.strokeDashoffset = `${(
        easeIn((100 - value) / 100) * circumference
      ).toFixed(3)}px`;
      rootStyle.transform = `rotate(${(easeOut(value / 70) * 270).toFixed(
        3
      )}deg)`;
    }
  }

  return (
    <StyledProgressContainer
      variant={variant}
      color={color}
      style={{
        width: size,
        height: size,
        ...rootStyle,
        ...style,
      }}
      role="progressbar"
      {...rootProps}
      {...other}
    >
      <StyledSVG viewBox={`${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`}>
        <StyledCircle
          variant={variant}
          style={circleStyle}
          cx={SIZE}
          cy={SIZE}
          r={(SIZE - thickness) / 2}
          fill="none"
          strokeWidth={thickness}
        />
      </StyledSVG>
    </StyledProgressContainer>
  );
};

const StyledProgressContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "color",
})<{
  variant: Props["variant"];
  color: Props["color"];
}>(({ theme, variant, color }) => ({
  display: "inline-block",
  lineHeight: 1,
  transition:
    variant === "static" ? theme.transitions.create("transform") : "none",
  animation:
    variant === "indeterminate"
      ? "mui-progress-circular-rotate2 1.4s linear infinite"
      : "none",
  color:
    color === "primary"
      ? theme.palette.primary.main
      : color === "secondary"
      ? theme.palette.secondary.main
      : "currentColor",
  "@keyframes mui-progress-circular-rotate2": {
    "100%": {
      transform: "rotate(-360deg)",
    },
  },
}));

const StyledSVG = styled("svg")(({ theme }) => ({
  /* Styles applied to the `svg` element. */
}));

const StyledCircle = styled("circle", {
  shouldForwardProp: (prop) => prop !== "variant",
})<{
  variant: Props["variant"];
}>(({ theme, variant }) => ({
  stroke: "currentColor",
  transition:
    variant === "static"
      ? theme.transitions.create("stroke-dashoffset")
      : "none",
  animation:
    variant === "indeterminate"
      ? "mui-progress-circular-dash2 1.4s ease-in-out infinite"
      : "none",
  "@keyframes mui-progress-circular-dash2": {
    "0%": {
      strokeDasharray: "100px, 200px",
      strokeDashoffset: "-120px",
    },
    "50%": {
      strokeDasharray: "100px, 200px",
      strokeDashoffset: "-15px",
    },
    "100%": {
      strokeDasharray: "1px, 200px",
      strokeDashoffset: "0px",
    },
  },
  strokeDasharray: variant === "indeterminate" ? "80px, 200px" : 0,
  strokeDashoffset: variant === "indeterminate" ? 0 : 0,
}));

export default CircularProgress2;
