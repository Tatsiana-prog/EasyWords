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
  gifted_subscription_month: false;
  gifted_subscription_year: false;
}

export const PreOrderForm: React.FC<PreOrderFormProps> = ({ id }) => {
  const [isApplicationVisible, setApplicationVisible] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    getValues,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      consent: true,
      preferred_plan: "MONTHLY",
      gender: "FEMALE",
    },
  });

  const nameValue = watch("name");
  const emailValue = watch("email");
  const telValue = watch("phone");

  const isFilled = (value: string | undefined) => {
    return value && value.trim() !== "";
  };

  const onSubmit = async (data: FormData) => {
    const SubscriptionRequestCreate = getValues();
    console.log(SubscriptionRequestCreate);

    try {
      const response = await axios.post(
        "https://test.easywordsapp.com/api/subscriptions/",
        SubscriptionRequestCreate,
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
    }
  };

  const closeApplication = () => {
    setApplicationVisible(false);
  };

  useEffect(() => {
    if (isApplicationVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
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
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors?.email.message || "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
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
        </div>

        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(telValue),
          })}
        >
          <input
            className={styles.FormInput}
            {...register("phone", {
              required: "Поле обязательно к заполнению",
              pattern: {
                value: /^\+\d{7,15}$/,
                message:
                  "Введите корректный номер телефона (только цифры, начиная со знака +)",
              },
            })}
            placeholder="Номер телефона"
          />
          <div className={styles.TextError}>
            {errors.phone && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors.phone.message}
              </span>
            )}
          </div>
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
                Годовая (1499 ₽/год) — лучшее соотношение цены и качества!
              </span>
            </label>
          </div>
          <div className={styles.TextError}>
            {errors.preferred_plan && <span>Выберите тариф</span>}
          </div>
        </div>

        <div className={styles.FormBox}>
          <label className={styles.SelectLabel}>
            <p>Устройство</p>
            <div className={styles.SelectWrapper}>
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
              <span className={styles.IconSelect}></span>
            </div>
          </label>
          <div className={styles.TextError}>
            {errors.system_version && (
              <span className={styles.ErrorBox}>
                <img src={IconError} alt="Ошибка" />
                {errors?.system_version?.message ||
                  "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
        </div>

        <div>
          <label>
            <p>Какие функции вас больше всего интересуют?</p>
            <textarea
              {...register("additional_features")}
              className={styles.Textarea}
              placeholder="Например: флеш-карточки, мнемотехники"
            />
            {errors.additional_features && (
              <span>Это поле обязательно для заполнения</span>
            )}
          </label>
        </div>

        <div>
          <label>
            <p>Оставьте комментарий</p>
            <textarea {...register("comments")}
            className={styles.Textarea}
             placeholder="Если есть, что добавить" />
            {errors.comments && (
              <span>Это поле обязательно для заполнения</span>
            )}
          </label>
        </div>

        <div className={styles.checkboxWrapper}>
          <label className={styles.CustomCheckbox}>
            <input
              type="checkbox"
              {...register("consent", { required: true })}
              className={styles.CheckboxInput}
            />
            <span className={styles.CheckboxLabel}>
              Я согласен(а) с
              <Link to="/UserAgreement"> условиями использования</Link>и
              <Link to="/PrivacyPolicy"> политикой конфиденциальности</Link>
            </span>
          </label>
          <div className={styles.TextError}>
            {errors.consent && <span>Необходимо согласие с условиями</span>}
          </div>
        </div>

        <input className={styles.InputSubmit} type="submit" value="Оформить заказ" />
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
