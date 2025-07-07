import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import axios from "axios";
import { ApplicationAccept } from "../../../ApplicationAccept/ApplicationAccept";
import IconError from "../../../../../public/images/icons/icon-error.png";
import styles from "./PreOrderForm.module.css";
import { Link } from "react-router-dom";

interface PreOrderFormProps {
  id?: string;
}

interface FormData {
  email: string;
  name: string;
  phone?: string;
  preferred_plan: "MONTHLY" | "YEARLY";
  system_version: "ios" | "android";
  gender: "MALE" | "FEMALE";
  additional_features?: string;
  comments?: string;
  consent: boolean;
}

export const PreOrderForm: React.FC<PreOrderFormProps> = ({ id }) => {
  const [isApplicationVisible, setApplicationVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      consent: false,
      preferred_plan: "MONTHLY",
      gender: "FEMALE",
    },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://test.easywordsapp.com/api/subscriptions/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response.data);
      setApplicationVisible(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
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
    <div className={styles.PreOrderOfferFormWrapper} id={id}>
      <h3>Предварительный заказ EasyWords</h3>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: watch("name"),
          })}
        >
          <input
            className={styles.FormInput}
            {...register("name", {
              required: "Поле обязательно к заполнению",
              minLength: { value: 2, message: "Минимум 2 символа" },
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
          {errors.name && (
            <div className={styles.TextError}>
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.name.message}
              </span>
            </div>
          )}
        </div>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: watch("email"),
          })}
        >
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
        <div className={styles.FormBox}>
          <h4>Ваш пол</h4>
          <div className={styles.CustomRadioButtonsWrapper}>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="MALE"
                {...register("gender", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>Мужской</span>
            </label>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="FEMALE"
                {...register("gender", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>Женский</span>
            </label>
          </div>
          {errors.gender && <span>Выберите пол</span>}
        </div>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: watch("phone"),
          })}
        >
          <input
            className={styles.FormInput}
            {...register("phone", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^\+\d{7,15}$/,
                message: "Введите корректный номер телефона",
              },
            })}
            placeholder="Номер телефона"
          />
          {errors.phone && (
            <div className={styles.TextError}>
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.phone.message}
              </span>
            </div>
          )}
        </div>
        <div className={styles.FormBox}>
          <h4>Предпочтительная подписка</h4>
          <div className={styles.CustomRadioButtonsWrapper}>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="MONTHLY"
                {...register("preferred_plan", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>
                Ежемесячно (149 ₽/месяц)
              </span>
            </label>
            <label className={styles.CustomRadioButtonTariff}>
              <input
                type="radio"
                value="YEARLY"
                {...register("preferred_plan", { required: true })}
                className={styles.RadioButtonInput}
              />
              <span className={styles.RadioButtonLabel}>
                Годовая (1499 ₽/год)
              </span>
            </label>
          </div>
          {errors.preferred_plan && <span>Выберите тариф</span>}
        </div>
        <div className={styles.FormBox}>
          <label className={styles.SelectLabel}>
            <p>Устройство</p>
            <select
              {...register("system_version", { required: true })}
              className={styles.CustomSelect}
            >
              <option value="" hidden>
                Выберите устройство
              </option>
              <option value="ios">IOS</option>
              <option value="android">Android</option>
            </select>
          </label>
          {errors.system_version && (
            <div className={styles.TextError}>
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.system_version.message}
              </span>
            </div>
          )}
        </div>
        <div>
          <label>
            <p>Какие функции вас больше всего интересуют?</p>
            <textarea
              {...register("additional_features")}
              className={styles.Textarea}
              placeholder="Например: флеш-карточки, мнемотехники"
            />
          </label>
        </div>
        <div>
          <label>
            <p>Оставьте комментарий</p>
            <textarea
              {...register("comments")}
              className={styles.Textarea}
              placeholder="Если есть, что добавить"
            />
          </label>
        </div>
        <div className={styles.checkboxWrapper}>
          <label className={styles.CustomCheckbox}>
            <input
              type="checkbox"
              {...register("consent", {
                required: "Необходимо согласие с условиями",
              })}
              className={styles.CheckboxInput}
            />
            <span className={styles.CheckboxLabel}>
              Я согласен(а) с{" "}
              <Link
                to="/user-agreement"
                className={styles.LinkDoc}
                target="_blank"
                rel="noopener noreferrer"
              >
                условиями использования
              </Link>{" "}
              и
              <Link
                to="/privacy-policy"
                className={styles.LinkDoc}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                политикой конфиденциальности
              </Link>
            </span>
          </label>
          {errors.consent && (
            <div className={styles.TextError}>
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.consent.message}
              </span>
            </div>
          )}
        </div>
        <input
          className={styles.InputSubmit}
          type="submit"
          value={loading ? "Оформление заказа..." : "Оформить заказ"}
        />
      </form>
      {isApplicationVisible && (
        <>
          <div className={styles.overlay} />
          <ApplicationAccept onBack={closeApplication} />
        </>
      )}
    </div>
  );
};
