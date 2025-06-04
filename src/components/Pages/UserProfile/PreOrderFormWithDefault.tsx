import styles from "../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import { useFormContext } from "../../PreOrderOffer/components/FormContext/FormContext";
import type { FormData } from "../../PreOrderOffer/components/FormContext/FormContext";

const IMAGE_API_URL = "https://test.easywordsapp.com/api/subscriptions";
const id = "6";
const TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNzQ5MDQ1NzE1fQ.sdwoXEeQyflEzVXGKLsvxCnyxuYD8X67U59L1-RlmNI";

export const PreOrderFormWithDefault = () => {
  const { formData } = useFormContext();
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${IMAGE_API_URL}/${id}/avatar`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
          responseType: "blob",
        });

        const imageBlob = response.data;
        const objectUrl = URL.createObjectURL(imageBlob);
        setImageSrc(objectUrl);
      } catch (error) {
        console.error("Ошибка загрузки изображения:", error);
      }
    };

    fetchImage();

    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc]);

  const {
    handleSubmit,
    reset,
    register,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formData ?? {
      name: "",
      email: "",
      tel: "",
      tariff: "",
      option: "",
      textarea1: "",
      textarea2: "",
      agreement: false,
    },
  });

  useEffect(() => {
    if (formData) {
      reset(formData);
    }
  }, [formData, reset]);

  const nameValue = watch("name");
  const emailValue = watch("email");

  const isFilled = (value: string | undefined) => {
    return value && value.trim() !== "";
  };

  const onSubmit = (data: FormData) => {
    console.log("Отправлено из профиля:", data);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setImageSrc(objectUrl);

        uploadImage(file);
      }
    }
  };

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post(
        `${IMAGE_API_URL}/${id}/avatar`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Изображение успешно загружено на сервер:", response.data);
    } catch (error) {
      console.error("Ошибка загрузки изображения на сервер:", error);
    }
  };
  return (
    <div className={styles.PreOrderOfferFormWrapper}>
      <h4>Ваши данные</h4>
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
          <div className={styles.TextError}>
            {errors?.name && <span>{errors.name.message}</span>}
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
                {errors.email.message || "Это поле обязательно для заполнения"}
              </span>
            )}
          </div>
        </div>
        <div className={styles.FormBox}>
          <input
            className={styles.FormInput}
            {...register("tel", {
              required: "Введите номер телефона",
              pattern: {
                value: /^\+?[0-9\s\-()]{7,15}$/,
                message: "Введите корректный номер телефона",
              },
            })}
            placeholder="Номер телефона"
          />
          <div className={styles.Avatar}>
            {imageSrc && <img src={imageSrc} alt="Аватар подписки" />}

            <label htmlFor="fileInput" className={styles.ImageChangeButton}>
              изменить фото
            </label>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className={styles.TextError}>
            {errors.tel && <span>{errors.tel.message}</span>}
          </div>
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

        <input
          className={styles.InputSubmitDefault}
          type="submit"
          value="Изменить заказ"
        />
      </form>
    </div>
  );
};
