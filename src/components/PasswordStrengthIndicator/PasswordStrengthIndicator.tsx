// src/components/PasswordStrengthIndicator/PasswordStrengthIndicator.tsx
import React from 'react';
import styles from './PasswordStrengthIndicator.module.css'; // Стили мы создадим ниже

interface Requirement {
  id: string;
  regex: RegExp;
  text: string;
}

// Список всех требований к паролю
const requirements: Requirement[] = [
  { id: 'length', regex: /.{6,}/, text: 'Минимум 6 символов' },
  { id: 'lowercase', regex: /[a-zа-я]/, text: 'Одна строчная буква (a-zа-я)' },
  { id: 'uppercase', regex: /[A-ZА-Я]/, text: 'Одна заглавная буква (A-ZА-Я)' },
  { id: 'number', regex: /\d/, text: 'Одна цифра (0-9)' },
  { id: 'special', regex: /[!@#$%^&*()_+\-=[\]{}]/, text: 'Один спецсимвол (!@#...)' },
];

interface Props {
  password?: string;
}

export const PasswordStrengthIndicator: React.FC<Props> = ({ password = '' }) => {
  return (
    <ul className={styles.requirementList}>
      {requirements.map((req) => {
        const isValid = req.regex.test(password);
        return (
          <li key={req.id} className={isValid ? styles.valid : styles.invalid}>
            {/* Используем SVG для галочки и крестика для лучшего вида */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isValid
                ? <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                : <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              }
            </svg>
            {req.text}
          </li>
        );
      })}
    </ul>
  );
};
