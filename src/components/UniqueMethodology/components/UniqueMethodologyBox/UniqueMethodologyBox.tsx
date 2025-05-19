import styles from "../UniqueMethodologyBox/UniqueMethodologyBox.module.css";

interface UniqueMethodologyBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const UniqueMethodologyBox: React.FC<UniqueMethodologyBoxProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.UniqueMethodologyBox} ${className}`}>
      {children}
    </div>
  );
};
