import React from "react";
import styles from "../Button/button.module.css";

interface ButtonProps {
  text: string;
  variant: "blue" | "white"; // Добавляем вариант
}

export const Button: React.FC<ButtonProps> = ({ text, variant }) => (
  <button className={variant === "blue" ? styles.blue : styles.white}>
    {text}
  </button>
);
