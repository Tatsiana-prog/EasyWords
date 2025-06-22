import React from "react";
import styles from "../Button/button.module.css";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  text: string;
  to: string;
  variant?: "blue" | "white";
  children?: React.ReactNode;
  target?: string;
  rel?: string; // Make the 'rel' property optional
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  variant = "white",
  text,
  children,
}) => {
  return (
    <Link to={to} className={variant === "blue" ? styles.blue : styles.white}>
      {children}
      {text}
    </Link>
  );
};
