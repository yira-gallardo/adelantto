import styles from "./Button.module.scss";

interface ButtonProps {
  readonly variant?: "primary" | "secondary";
  readonly size?: "small" | "medium" | "large";
  readonly children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  const { variant, size, children } = props;

  return (
    <button
      className={`${styles.button} ${variant ? styles[variant] : ""} ${
        size ? styles[size] : ""
      }`}
    >
      {children}
    </button>
  );
}
