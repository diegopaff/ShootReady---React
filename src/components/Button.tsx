type ButtonProps = {
  children: string | React.ReactNode;
  buttonType: "primary" | "secondary";
  onClick?: () => void | ((tipo: boolean) => void);
};

function Button({ children, buttonType, onClick }: ButtonProps) {
  return (
    <button
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
