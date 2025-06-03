import React from "react";
import { useForm } from "react-hook-form";
import styles from "./FooterForm.module.css";

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
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
              placeholder="E-mail"
            />
            <div className={styles.TextError}>
              {errors?.email && (
                <span>
                  {errors.email.message || "Это поле обязательно для заполнения"}
                </span>
              )}
            </div>
          </div>
          <input className={styles.FooterInputSubmit} type="submit" value="Подписаться" />
        </div>
      </form>
    </div>
  );
};