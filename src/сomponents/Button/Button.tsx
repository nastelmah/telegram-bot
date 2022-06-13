import "./Button.css";

interface IButton {
  type: string;
  title: string;
  disable: boolean;
  onClick: () => void;
}

export const Button = ({ type, title, disable, onClick }: IButton) => {
  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
