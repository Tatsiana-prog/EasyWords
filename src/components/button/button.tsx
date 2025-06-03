import React from "react";
import styles from "../Button/button.module.css";

interface ButtonProps {
  text: string;
  variant: "blue" | "white";
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ text, variant, children }) => (
  <button className={variant === "blue" ? styles.blue : styles.white}>
    {children}
    {text}
  </button>
);
