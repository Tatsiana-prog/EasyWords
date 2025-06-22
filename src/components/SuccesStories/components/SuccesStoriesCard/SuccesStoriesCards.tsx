import React, { useState, useEffect } from "react";
import styles from "../SuccesStoriesCard/SuccessStoriesCard.module.css";
import api from "../../../../api/api";

interface Winner {
  id: number;
  name: string;
  email: string;
  subscription: string;
  gender: string;
  gifted_at: string | null;
}

interface WinnerAvatar {
  img: string;
}

export const SuccessStoriesCards: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [winnerAvatars, setWinnerAvatars] = useState<Record<number, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [avatarError, setAvatarError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWinners = async () => {
      setLoading(true);
      setError(null);
      setAvatarError(null);

      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Вы не авторизованы.");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get<{ winners: Winner[] }>("/services/winners_yearly", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const fetchedWinners = response.data.winners;
        setWinners(fetchedWinners);

        // Загружаем аватары победителей
        fetchWinnersAvatars(fetchedWinners, token);
      } catch (error: any) {
        console.error("Ошибка при загрузке победителей:", error);

        if (error.response?.status === 401) {
          setError("Сессия истекла. Пожалуйста, войдите снова.");
        } else {
          setError("Не удалось загрузить список победителей");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);

  const fetchWinnersAvatars = async (winners: Winner[], token: string) => {
    try {
      const avatarRequests = winners.map((winner) =>
        api.get<WinnerAvatar>(`/subscriptions/${winner.id}/avatar`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
      );

      const avatarResponses = await Promise.all(avatarRequests);
      const avatarsMap: Record<number, string> = {};

      avatarResponses.forEach((res, idx) => {
        avatarsMap[winners[idx].id] = res.data.img;
      });

      setWinnerAvatars(avatarsMap);
    } catch (error) {
      console.error("Ошибка при загрузке аватаров:", error);
      setAvatarError("Не удалось загрузить аватары победителей");
    }
  };

  const formatDate = (dateStr: string | null): string => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("ru-RU", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={styles.SuccessStoriesCardsWrapper}>
      {error && <div className={styles.ErrorMessage}>{error}</div>}
      {avatarError && <div className={styles.ErrorMessage}>{avatarError}</div>}

      {!error && winners.length === 0 && (
        <p className={styles.NoWinnersMessage}>Победителей пока нет.</p>
      )}

      {winners.map((winner) => (
        <div key={winner.id} className={styles.SuccessStoriesCard}>
          <div className={styles.SuccessStoriesCardContent}>
            <img
              className={styles.Avatar}
              src={winnerAvatars[winner.id] || "/placeholder-avatar.jpg"}
              alt={`${winner.name} avatar`}
            />
            <div className={styles.SuccessStoriesCardDesc}>
              <h5>{winner.name}</h5>
              <p>
                <span>{winner.gender === "MALE" ? "выиграл" : "выиграла"}</span>{" "}
                {winner.gifted_at && (
                  <span>{formatDate(winner.gifted_at)}</span>
                )}{" "}
                <span className={styles.SuccessStoriesYear}>Годовая подписка</span>
              </p>
            </div>
          </div>
          <div className={styles.SuccessStoriesCardBox}>Бесплатно 1 год</div>
        </div>
      ))}
    </div>
  );
};
