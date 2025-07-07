import React from "react";
import { useForm } from "react-hook-form";
import styles from "./FooterForm.module.css";
import IconError from "../../../../../public/images/icons/icon-error.png";

interface FormData {
  email: string;
}

export const FooterForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = (data: FormData) => { // Указываем правильный тип
    console.log(data);
    reset();
  };

  return (
    <div className={styles.FooterFormWrapper}>
      <h4>Подпишитесь на обновления</h4>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.FooterFormBox}>
          <div className={styles.InputWrapper}>
           <input
            className={styles.FormInput}
            {...register("email", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
            placeholder="E-mail"
          />
          {errors.email && (
            <div className={styles.TextError}>
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.email.message}
              </span>
            </div>
          )}
          </div>
          <input className={styles.FooterInputSubmit} type="submit" value="Подписаться" />
        </div>
      </form>
    </div>
  );
};