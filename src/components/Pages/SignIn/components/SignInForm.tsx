import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import styles from "../../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import api from "../../../../api/api";
import IconOpen from  "../../../../../public/images/icons/icon-open.svg"
import IconClose from "../../../../../public/images/icons/icon-closed.svg"

interface LoginFormData {
  username: string;
  password: string;
}
const EyeIcon = () => (
  <img src={IconOpen} alt="иконка"/>  
);

const EyeOffIcon = () => (
  <img src={IconClose} alt="иконка"/>  
);
export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage(null);

    const params = new URLSearchParams();
    params.append("username", data.username);
    params.append("password", data.password);

    try {
      const response = await api.post("/auth/jwt/login", params);
      const token = response.data.access_token;
      const tokenType = response.data.token_type;

      console.log("Ответ сервера:", response.data);

      if (token && token !== "undefined") {
        localStorage.setItem("authToken", token); // ✅ сохраняем access_token
        localStorage.setItem("tokenType", tokenType); // ✅ сохраняем тип токена
        window.location.href = "/UserProfile"; // ✅ редирект
      } else {
        setErrorMessage("Не удалось получить токен от сервера.");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ detail: string }>;

      if (axiosError.response?.data?.detail) {
        setErrorMessage(axiosError.response.data.detail);
      } else {
        setErrorMessage("Ошибка авторизации. Попробуйте снова.");
      }
    }
  };

  return (
    <div className={styles.SignInFormWrapper}>
      <h1>Войти в личный кабинет</h1>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            id="username"
            placeholder="Введите имя или email"
            {...register("username", { required: "Это поле обязательно" })}
          />
          {errors.username && (
            <span className={styles.Error}>{errors.username.message}</span>
          )}
        </div>
        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Введите пароль"
            {...register("password", { required: "Это поле обязательно" })}
          />
          <span
            className={styles.PasswordToggle}
            onClick={() => setShowPassword(prev => !prev)}
            role="button"
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ?<EyeIcon /> : <EyeOffIcon />}
          </span>
          {errors.password && (
            <span className={styles.Error}>{errors.password.message}</span>
          )}
        </div>
          <input className={styles.InputSubmit} type="submit" value="Войти" />
      </form>
      <a href="/ForgotPassword" className={styles.ForgotPassword}>
        Забыли пароль?
      </a>
    </div>
  );
};
