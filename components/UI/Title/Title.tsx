import styles from "./Title.module.scss";

interface TitleProps {
  readonly semantic: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly size?: "small" | "medium" | "large";
  readonly children: React.ReactNode;
}

export default function Title(props: TitleProps) {
  const { size, children, semantic } = props;

  return (
    <div className={`${styles.title}  ${size ? styles[size] : ""}`}>
      {semantic === "h1" && <h1>{children}</h1>}
      {semantic === "h2" && <h2>{children}</h2>}
      {semantic === "h3" && <h3>{children}</h3>}
      {semantic === "h4" && <h4>{children}</h4>}
      {semantic === "h5" && <h5>{children}</h5>}
      {semantic === "h6" && <h6>{children}</h6>}
    </div>
  );
}
