import React from "react";
import styles from "../Button/button.module.css";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  variant?: string;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  text,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={variant === "blue" ? styles.blue : styles.white}
    >
      {children}
      {text}
    </button>
  );
};
