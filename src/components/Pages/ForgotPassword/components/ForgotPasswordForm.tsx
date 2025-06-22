import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import styles from "../../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import classNames from "classnames";
import { Text } from "../../../Text/Text";
import { ApplicationPassword } from "../../../../components/ApplicationPassword/ApplicationPassword";
import IconError from "../../../../../public/images/icons/icon-error.png";
import api from "../../../../api/api";

interface EmailFormData {
  Email: string;
}

export const ForgotPasswordForm: React.FC = () => {
  const [isApplicationVisible, setApplicationVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<EmailFormData>();

  const EmailValue = watch("Email");
  const isFilled = (value: string | undefined) => {
    return value && value.trim() !== "";
  };

  const onSubmit = async (data: EmailFormData) => {
    try {
      const response = await api.post('/auth/forgot-password', {
        email: data.Email,
      });

      console.log("Response:", response); // Логируем весь ответ

      if (!response || response.status !== 200) {
        throw new Error('Ошибка при отправке запроса');
      }

      // Показать окно об успешной отправке
      setApplicationVisible(true);
    } catch (error) {
      console.error('Ошибка при восстановлении пароля:', error);
      alert('Не удалось отправить письмо. Проверьте email и попробуйте снова.');
    }
  };

  const closeApplication = () => {
    setApplicationVisible(false);
  };

  useEffect(() => {
    document.body.style.overflow = isApplicationVisible ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isApplicationVisible]);

  return (
    <div className={styles.ForgotPasswordFormWrapper}>
      <h1>Воccтановить пароль</h1>
      <Text>Укажите e-mail — мы вышлем вам инструкцию для сброса пароля</Text>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(EmailValue),
          })}
        >
          <input
            className={styles.FormInput}
            id="Email"
            {...register("Email", {
              required: "Заполните поле",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            placeholder="Введите email"
          />
          <div className={styles.TextError}>
            {errors.Email && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Error icon" />
                {errors?.Email?.message || "Обязательно к заполнению"}
              </span>
            )}
          </div>
        </div>
        <input
          className={styles.InputSubmit}
          type="submit"
          value="Восстановить пароль"
        />
      </form>
      {isApplicationVisible && (
        <>
          <div className={styles.overlay} />
          <ApplicationPassword onBack={closeApplication} />
        </>
      )}
    </div>
  );
};