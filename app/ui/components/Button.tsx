type ButtonProps = {
  text: string;
  fn: () => void;
  type?: "button" | "submit";
  bgColor: string;
};

const Button = ({ text, fn, type = "button", bgColor }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={fn}
      className={`${bgColor} text-textDark font-bold rounded-md min-w-[150px] w-fit mx-auto py-1
       hover:scale-110 hover:bg-hoverLight hover:text-hoverDark transition-all duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
