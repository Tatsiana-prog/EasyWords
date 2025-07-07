import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "../../../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ApplicationNewPassword } from "../../../../../components/ApplicationNewPassword/ApplicationNewPassword";
import { PasswordStrengthIndicator } from "../../../../../components/PasswordStrengthIndicator/PasswordStrengthIndicator";
import IconOpen from "../../../../../../public/images/icons/icon-open.svg";
import IconClose from "../../../../../../public/images/icons/icon-closed.svg";
import IconError from "../../../../../../public/images/icons/icon-error.png";
interface FormInputs {
  password: string;
  confirmPassword: string;
}
const EyeIcon = () => <img src={IconOpen} alt="иконка" />;
const EyeOffIcon = () => <img src={IconClose} alt="иконка" />;

export const ResetPasswordForm: React.FC = () => {
  const [isApplicationVisible, setApplicationVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<FormInputs>({ mode: "onChange" });
  const password = watch("password");

  const closeApplication = () => {
    setApplicationVisible(false);
  };

  useEffect(() => {
    const resetToken = searchParams.get("token");
    if (resetToken) {
      setToken(resetToken);
    } else {
      setError(
        "Токен для сброса пароля не найден. Возможно, ссылка повреждена."
      );
    }
    document.body.style.overflow = isApplicationVisible ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchParams, isApplicationVisible]);

  const onSubmit = async (data: FormInputs) => {
    setError("");
    setLoading(true);
    if (!token) {
      setError("Отсутствует токен для сброса пароля.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post("/api/auth/reset-password", {
        token,
        password: data.password,
      });
      if (response.status >= 200 && response.status < 300) {
        setApplicationVisible(true);
        setTimeout(() => navigate("/sign-in"), 3000);
      } else {
        setError(`Произошла ошибка. Статsign-inус ответа: ${response.status}`);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMsg =
          err.response?.data?.detail || "Произошла ошибка. Попробуйте снова.";
        setError(
          errorMsg.includes("RESET_PASSWORD_BAD_TOKEN")
            ? "Ссылка недействительна или устарела. Запросите новую."
            : errorMsg
        );
      } else {
        setError("Не удалось сбросить пароль. Пожалуйста, попробуйте снова.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!token && error) {
    return <div className={styles.ApiError}>{error}</div>;
  }

  return (
    <div className={styles.ResetPasswordFormWrapper}>
      <h1>Установка нового пароля</h1>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}])/,
            })}
            placeholder="Новый пароль"
            aria-label="Новый пароль"
          />
          <span
            className={styles.PasswordToggle}
            onClick={() => setShowPassword((prev) => !prev)}
            role="button"
            aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </span>
        </div>
        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === password || "Пароли не совпадают",
            })}
            placeholder="Повторите пароль"
            aria-label="Повторите пароль"
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
            {errors.confirmPassword && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Error icon" />
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
        </div>

        {error && <div className={styles.ApiError}>{error}</div>}

        <input
          className={styles.InputSubmit}
          type="submit"
          value={loading ? "Сохранение..." : "Сохранить пароль"}
          disabled={!isValid || isSubmitting || loading}
        />
      </form>

      <div className={styles.PasswordHints}>
        <PasswordStrengthIndicator password={password} />
      </div>
      {isApplicationVisible && (
        <>
          <div className={styles.overlay} />
          <ApplicationNewPassword onBack={closeApplication} />
        </>
      )}
    </div>
  );
};
