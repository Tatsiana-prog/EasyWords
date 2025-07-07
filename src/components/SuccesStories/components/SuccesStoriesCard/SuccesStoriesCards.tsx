import React, { useState, useEffect } from "react";
import styles from "../SuccesStoriesCard/SuccessStoriesCards.module.css";
import api from "../../../../api/api";
interface Winner {
  id: number;
  name: string;
  email: string;
  subscription: string;
  gender: string;
  gifted_at: string | null;
}

export const SuccessStoriesCards: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWinners = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get<{ winners: Winner[] }>("/services/winners_yearly", {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });
        setWinners(response.data.winners);
      } catch (error: any) {
        console.error("Ошибка при загрузке победителей:", error);
        setError("Не удалось загрузить список победителей");
      } finally {
        setLoading(false);
      }
    };

    fetchWinners();
  }, []);
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
        {winners.map((winner) => (
        <div key={winner.id} className={styles.SuccessStoriesCard}>
          <div className={styles.SuccessStoriesCardContent}>
            <img
              className={styles.Avatar}
                src={`https://test.easywordsapp.com/api/subscriptions/${winner.id}/avatar`}
              alt={`${winner.name} avatar`}
            />
            <div className={styles.SuccessStoriesCardDesc}>
              <h5>{winner.name}</h5>
              <div className={styles.SuccessStoriesCardText}>
                <div>
                  <span>{winner.gender === "MALE" ? "выиграл" : "выиграла"}</span>{" "}
                  {winner.gifted_at && (
                  <span>{formatDate(winner.gifted_at)}</span>
                  )}
                </div>
                <div className={styles.SuccessStoriesYear}>Годовая подписка</div>
              </div>
            </div>
          </div>
          <div className={styles.SuccessStoriesCardBox}>Бесплатно 1 год</div>
        </div>
      ))}
    </div>
  );
};
