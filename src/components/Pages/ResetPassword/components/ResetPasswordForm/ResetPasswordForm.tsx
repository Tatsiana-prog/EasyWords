import React, { useState } from "react";

import { useSearchParams } from "react-router-dom";
import api from "../../../../../api/api";

export const ResetPasswordForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setMessage("Токен не найден. Попробуйте снова.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Пароли не совпадают.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.post("/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          new_password: password,
        }),
      });

      if (response.status !== 200) {
        throw new Error("Ошибка при сбросе пароля");
      }

      setMessage("Пароль успешно изменён. Вы можете войти с новым паролем.");
    } catch (error) {
      setMessage("Не удалось сбросить пароль. Попробуйте снова.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Сброс пароля</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Новый пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Сохраняем..." : "Сменить пароль"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
