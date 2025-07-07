import React from "react";
import styles from "../Button/button.module.css";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  variant?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant,
  text,
  children,
  type = "button",
  disabled = false
}) => {
  return (
    <button
      onClick={onClick}
      className={variant === "blue" ? styles.blue : styles.white}
      type={type}
      disabled={disabled}
    >
      {children}
      {text}
    </button>
  );
};