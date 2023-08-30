import { ButtonProps } from "./Button.types";

const Button = ({ handleOnClick }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary" onClick={handleOnClick}>
      Submit
    </button>
  );
};

export default Button;
