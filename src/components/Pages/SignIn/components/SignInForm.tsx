import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import styles from "../../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import api from "../../../../api/api";
import IconOpen from "../../../../../public/images/icons/icon-open.svg";
import IconClose from "../../../../../public/images/icons/icon-closed.svg";
import IconError from "../../../../../public/images/icons/icon-error.png";

interface LoginFormData {
  username: string;
  password: string;
}

const EyeIcon = () => <img src={IconOpen} alt="иконка" />;
const EyeOffIcon = () => <img src={IconClose} alt="иконка" />;

export const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigate = useNavigate();
  const { setIsAuth } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);

  const onSubmit = async (data: LoginFormData) => {
    setErrorMessage(null);

    const params = new URLSearchParams();
    params.append("username", data.username);
    params.append("password", data.password);

    try {
      const response = await api.post("/auth/jwt/login", params);
      const token = response.data.access_token;
        if (token && token !== "undefined") {
        localStorage.setItem("authToken", token);
        setIsAuth(true);
        navigate("/user-profile");

      } else {
        setErrorMessage("Не удалось получить токен от сервера.");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ detail: string }>;

      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);

      if (newAttempts >= 3) {
        setErrorMessage(
          "Вы ввели неправильные данные 3 раза. Пожалуйста, воспользуйтесь ссылкой сброса пароля."
        );
      } else if (axiosError.response?.data?.detail) {
        const attemptsLeft = 3 - newAttempts;
        const attemptsWord = attemptsLeft === 1 ? "попытка" : "попытки";
        setErrorMessage(
          `Неверные данные. Осталось ${attemptsLeft} ${attemptsWord}.`
        );
      } else {
        setErrorMessage(
          "Ошибка авторизации. Проверьте имя пользователя и пароль."
        );
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
          <div className={styles.TextError}>
            {errors?.username && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors?.username?.message ||
                  "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
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
            onClick={() => setShowPassword((prev) => !prev)}
            role="button"
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </span>
          <div className={styles.TextError}>
            {errors?.password && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors?.password?.message ||
                  "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
        </div>
        <input className={styles.InputSubmit} type="submit" value="Войти" />
      </form>
      {errorMessage && (
        <div className={styles.ErrorMessage}>{errorMessage}</div>
      )}
      <a href="/forgot-password" className={styles.ForgotPassword}>
        Забыли пароль?
      </a>
    </div>
  );
};


