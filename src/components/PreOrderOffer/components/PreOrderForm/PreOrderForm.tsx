import React from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useFormContext } from "../../components/FormContext/FormContext";
import styles from "./PreOrderForm.module.css";

interface FormData {
  name: string;
  email: string;
  tel?: string;
  tariff: string;
  option: string;
  textarea1: string;
  textarea2?: string;
  agreement: boolean;
}

export const PreOrderForm: React.FC = () => {
  const { setFormData } = useFormContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      agreement: true,
      tariff: "Годовая (1499 ₽/год) — лучшее соотношение цены и качества!",
    },
  });

  const nameValue = watch("name");
  const emailValue = watch("email");

  const isFilled = (value: string | undefined) => {
    return value && value.trim() !== "";
  };
const onSubmit = (data: FormData) => {
  console.log(data);
  setFormData(data); // сохраняем в контекст
  reset();
};

  

  return (
    <div className={styles.PreOrderOfferFormWrapper}>
      <h3>Предварительный заказ EasyWords</h3>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(nameValue),
          })}
        >
          <input
            className={styles.FormInput}
            {...register("name", {
              required: "Поле обязательно к заполнению",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 50,
                message: "Имя не должно превышать 50 символов",
              },
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: "Имя должно содержать только буквы",
              },
            })}
            placeholder="Имя"
          />
          <div className={styles.TextError}>
            {errors?.name && (
              <span>
                {errors?.name?.message || "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
        </div>

        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(emailValue),
          })}
        >
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
                {errors?.email?.message ||
                  "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
        </div>

        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            {...register("tel")}
            placeholder="Номер телефона"
          />
          {errors.tel && <span>Это поле обязательно для заполнения</span>}
        </div>

        <div className={styles.FormBox}>
          <h4>Предпочтительная подписка</h4>
          <div className={styles.CustomRadioButtonsWrapper}>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="Ежемесячно (149 ₽/месяц)"
                {...register("tariff", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>
                Ежемесячно (149 ₽/месяц)
              </span>
            </label>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="Годовая (1499 ₽/год) — лучшее соотношение цены и качества!"
                {...register("tariff", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>
                Годовая (1499 ₽/год) — лучшее соотношение цены и качества!
              </span>
            </label>
          </div>
          <div className={styles.TextError}>
            {errors.tariff && <span>Выберите тариф</span>}
          </div>
        </div>

        <div className={styles.FormBox}>
          <label className={styles.SelectLabel}>
            <p>Устройство</p>
            <div className={styles.SelectWrapper}>
              <select
                {...register("option", { required: true })}
                className={styles.CustomSelect}
              >
                <option value="" hidden>
                  Выберите устройство
                </option>
                <option value="IOS">IOS</option>
                <option value="Android">Android</option>
              </select>
              <span className={styles.IconSelect}></span>
            </div>
          </label>
          <div className={styles.TextError}>
            {errors.option && <span>Выберите устройство</span>}
          </div>
        </div>

        <div>
          <label>
            <p>Какие функции вас больше всего интересуют?</p>
            <textarea {...register("textarea1")} className={styles.Textarea} />
            {errors.textarea1 && (
              <span>Это поле обязательно для заполнения</span>
            )}
          </label>
        </div>

        <div>
          <label>
            <p>Оставьте комментарий</p>
            <textarea {...register("textarea2")} className={styles.Textarea} />
            {errors.textarea2 && (
              <span>Это поле обязательно для заполнения</span>
            )}
          </label>
        </div>

        <div className={styles.checkboxWrapper}>
          <label className={styles.CustomCheckbox}>
            <input
              type="checkbox"
              {...register("agreement", { required: true })}
              className={styles.CheckboxInput}
            />
            <span className={styles.CheckboxLabel}>
              Я согласен(а) с условиями использования и политикой
              конфиденциальности
            </span>
          </label>
          <div className={styles.TextError}>
            {errors.agreement && <span>Необходимо согласие с условиями</span>}
          </div>
        </div>

        <input className={styles.InputSubmit} type="submit" value="Отправить" />
      </form>
    </div>
  );
};
