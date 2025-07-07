import styles from "../../../../PreOrderOffer/components/PreOrderForm/PreOrderForm.module.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import api from "../../../../../api/api";
import { ApplicationChanges } from "../../../../ApplicationChanges/ApplicationChanges";
import IconError from "../../../../../../public/images/icons/icon-error.png";

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
  gifted_subscription_month?: boolean;
  gifted_subscription_year?: boolean;
}

interface UserFormProps {
  setSystemVersion: React.Dispatch<React.SetStateAction<"ios" | "android">>;
}

export const UserForm: React.FC<UserFormProps> = ({ setSystemVersion }) => {
  const [isApplicationVisible, setApplicationVisible] = useState(false);
  const [id, setSubscriptionId] = useState<number | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      consent: true,
      preferred_plan: "MONTHLY",
      gender: "FEMALE",
    },
  });

  const isFilled = (value: string | undefined) => value && value.trim() !== "";
  const nameValue = watch("name");
  const emailValue = watch("email");
  const telValue = watch("phone");
  const systemVersion = watch("system_version");

  useEffect(() => {
    if (systemVersion) {
      setSystemVersion(systemVersion);
    }
  }, [systemVersion, setSystemVersion]);

  const fetchUserData = async () => {
    try {
      const userResponse = await api.get("/users/me");
      const user_Id = userResponse.data.id;

      const subscriptionResponse = await api.get(
        `/subscriptions/by-user/${user_Id}`
      );
      const subscriptionData: Partial<FormData> & { id: number } =
        subscriptionResponse.data;

      setSubscriptionId(subscriptionData.id);

      const keys: (keyof FormData)[] = [
        "email",
        "name",
        "phone",
        "preferred_plan",
        "system_version",
        "gender",
        "additional_features",
        "comments",
        "consent",
        "gifted_subscription_month",
        "gifted_subscription_year",
      ];

      keys.forEach((key) => {
        if (subscriptionData[key] !== undefined) {
          setValue(key, subscriptionData[key]!);
        }
      });

      if (subscriptionData.id) {
        const imageResponse = await api.get(
          `/subscriptions/${subscriptionData.id}/avatar`
        );
        if (imageResponse.data?.imageUrl) {
          setImageSrc(imageResponse.data.imageUrl);
        }
      }
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const onSubmit = async (data: FormData) => {
    setNotification(null);
    try {
      if (!id) {
        throw new Error("ID подписки не найден. Заявка, возможно, не создана.");
      }

      await api.patch(`/subscriptions/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      });

      setApplicationVisible(true);
    } catch (error: any) {
      if (error.response?.data?.detail === "Заявка не найдена!") {
        alert("Заявка не найдена! Возможно, вы ещё не оформили её.");
      } else {
        console.error("Ошибка при обновлении данных:", error);
      }
    }
  };

  

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!id || !e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      setIsUploading(true);
      setNotification(null);
      
      const uploadUrl = `/subscriptions/${id}/avatar`;
      const response = await api.post(uploadUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        const newImageUrl = `https://test.easywordsapp.com/api/subscriptions/${id}/avatar?timestamp=${new Date().getTime()}`;
        setImageSrc(newImageUrl);
        setNotification("Не забудьте нажать кнопку ниже в форме - 'Изменить'!");
        setTimeout(() => {
          setNotification(null);
        }, 7000);

      } else {
        alert("Не удалось обновить фото, сервер вернул неожиданный ответ.");
      }
      
    } catch (error) {
      console.error("Ошибка при загрузке изображения:", error);
      alert("Не удалось загрузить изображение. Попробуйте снова.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.PreOrderOfferFormWrapper}>
      <div className={styles.UseFormHeader}>
        {id && (
          <div className={styles.AvatarSection}>
            <img
              className={styles.Avatar}
              src={
                imageSrc ||
                `https://test.easywordsapp.com/api/subscriptions/${id}/avatar`
              }
              alt={`User ${id} avatar`}
            />
            <label className={styles.ChangePhotoButton}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              {isUploading ? "Загрузка..." : "Загрузить фото"}
            </label>
            {notification && (
              <div className={styles.SuccessNotification}>
                {notification}
              </div>
            )}
          </div>
        )}
        <h3>Ваши данные</h3>
      </div>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(nameValue),
          })}
        >
          <input
            className={styles.FormInput}
            placeholder="Имя"
            {...register("name", {
              required: "Поле обязательно к заполнению",
              minLength: { value: 2, message: "Минимум 2 символа" },
              maxLength: { value: 50, message: "Не более 50 символов" },
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                message: "Только буквы",
              },
            })}
          />
          {errors.name && (
            <span className={styles.ErrorBox}>
              <img src={IconError} alt="Ошибка" />
              {errors.name.message}
            </span>
          )}
        </div>

        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(emailValue),
          })}
        >
          <input
            className={styles.FormInput}
            placeholder="E-mail"
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный email",
              },
            })}
          />
          {errors.email && (
            <span className={styles.ErrorBox}>
              <img src={IconError} alt="Ошибка" />
              {errors.email.message}
            </span>
          )}
        </div>

        <div
          className={classNames(styles.FormBox, {
            [styles.InputFilled]: isFilled(telValue),
          })}
        >
          <input
            className={styles.FormInput}
            placeholder="Номер телефона"
            {...register("phone", {
              pattern: {
                value: /^\+\d{7,15}$/,
                message: "Введите номер в формате +79991234567",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.ErrorBox}>
              <img src={IconError} alt="Ошибка" />
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className={styles.FormBox}>
          <h4>Предпочтительная подписка</h4>
          <div className={styles.CustomRadioButtonsWrapper}>
            {[
              { value: "MONTHLY", label: "Ежемесячно (149 ₽/мес)" },
              { value: "YEARLY", label: "Годовая (1499 ₽/год)" },
            ].map(({ value, label }) => (
              <label key={value} className={styles.CustomRadioButtonTariff}>
                <input
                  type="radio"
                  value={value}
                  {...register("preferred_plan", { required: true })}
                  className={styles.RadioButtonInput}
                />
                <span className={styles.RadioButtonLabel}>{label}</span>
              </label>
            ))}
          </div>
          {errors.preferred_plan && (
            <span className={styles.Error}>Выберите тариф</span>
          )}
        </div>

        <div className={styles.FormBox}>
          <label className={styles.SelectLabel}>
            <p>Устройство</p>
            <div className={styles.SelectWrapper}>
              <select
                {...register("system_version", {
                  required: "Это поле обязательно",
                })}
                className={styles.CustomSelect}
              >
                <option value="" hidden>
                  Выберите устройство
                </option>
                <option value="ios">iOS</option>
                <option value="android">Android</option>
              </select>
              <span className={styles.IconSelect}></span>
            </div>
          </label>
          {errors.system_version && (
            <span className={styles.ErrorBox}>
              <img src={IconError} alt="Ошибка" />
              {errors.system_version.message}
            </span>
          )}
        </div>

        <input className={styles.InputSubmit} type="submit" value="Изменить" />
      </form>

      {isApplicationVisible && (
        <>
          <div className={styles.overlay} />
          <ApplicationChanges onBack={() => setApplicationVisible(false)} />
        </>
      )}
    </div>
  );
};
