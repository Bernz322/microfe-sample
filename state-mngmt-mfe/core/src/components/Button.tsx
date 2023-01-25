import React from "react";

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  text: string;
}

const Button = (props: IButton) => {
  const { text, onClick, ...others } = props;
  return (
    <button
      onClick={onClick}
      className="bg-purple-400 text-white text-base p-2 flex rounded-lg m-2"
    >
      {text}
    </button>
  );
};

export default Button;
