import styles from '../Button/button.module.css';
interface ButtonProps {
    text: string; // Указываем, что text должен быть строкой
}

export const Button: React.FC<ButtonProps> = ({ text }) => (
    <button className={styles.Button}>{text}</button>
);