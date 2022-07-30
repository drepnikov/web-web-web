import * as React from "react";
import { InputHTMLAttributes } from "react";

interface IInputTextComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const InputTextComponent: React.FC<IInputTextComponentProps> = (props) => {
  return (
    <input
      className="w-full bg-inherit border-none outline-none placeholder-whiteMilk/60"
      {...props}
    />
  );
};

export { InputTextComponent };
