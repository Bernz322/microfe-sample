import React from "react";

interface ILabel extends React.HTMLProps<HTMLParagraphElement> {
  text: string;
}

const Label = (props: ILabel) => {
  const { text, ...others } = props;
  return <p>{text}</p>;
};

export default Label;
