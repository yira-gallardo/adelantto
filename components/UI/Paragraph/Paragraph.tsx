import styles from "./Paragraph.module.scss";

interface TitleProps {
  readonly size?: "small" | "medium" | "large";
  readonly children: React.ReactNode;
}

export default function Paragraph(props: TitleProps) {
  const { size, children } = props;

  return (
    <p className={`${styles.paragraph} ${size ? styles[size] : styles.medium}`}>
      {children}
    </p>
  );
}
