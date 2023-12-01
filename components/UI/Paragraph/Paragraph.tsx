import styles from "./Paragraph.module.scss";

interface TitleProps {
  readonly size?: "small" | "medium" | "large";
  readonly color?: "white" | "gray";
  readonly children: React.ReactNode;
}

export default function Paragraph(props: TitleProps) {
  const { size, children, color } = props;

  return (
    <p
      className={`${styles.paragraph} ${size ? styles[size] : styles.medium} ${
        color ? styles[color] : ""
      }`}
    >
      {children}
    </p>
  );
}
