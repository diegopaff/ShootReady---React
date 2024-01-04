type ButtonProps = {
  children: string | React.ReactNode;
  type: "primary" | "secondary";
};

function Button({ children, type }: ButtonProps) {
  return (
    <button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
      {children}
    </button>
  );
}

export default Button;
