import React, { useState, useEffect } from "react";
import styles from "./SuccesStoriesCards.module.css";
import axios from "axios";

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

export const SuccesStoriesCards: React.FC = () => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [winnerAvatars, setWinnersAvatars] = useState<WinnerAvatar[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const response = await axios.get<{ winners: Winner[] }>(
          "https://test.easywordsapp.com/api/services/winners_yearly",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNzQ4ODQ3NzY2fQ.La4dX-JKmlfP9T6NBejJ2U9L7YuUdPh6kncNt-kUb2Q`,
            },
          }
        );

        setWinners(response.data.winners);
        fetchWinnersAvatars(response.data.winners);
      } catch (error) {
        console.error("Error fetching winners:", error);
        setError("Failed to fetch winners data");
      }
    };

    const fetchWinnersAvatars = async (winners: Winner[]) => {
      try {
        const avatarRequests = winners.map(() =>
          axios.get<WinnerAvatar>(
            `https://test.easywordsapp.com/api/subscriptions/{id}/avatar`,
            {
              headers: {
                accept: "application/json",
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNzQ4ODQ3NzY2fQ.La4dX-JKmlfP9T6NBejJ2U9L7YuUdPh6kncNt-kUb2Q`,
              },
            }
          )
        );

        const avatarResponses = await Promise.all(avatarRequests);
        const avatars = avatarResponses.map((res) => res.data);
        setWinnersAvatars(avatars);
      } catch (error) {
        console.error("Error fetching winners avatars:", error);
        setError("Failed to fetch winners avatars data");
      }
    };

    fetchWinners();
  }, []);

  return (
    <div className={styles.SuccesStoriesCardsWrapper}>
      {error && <div className={styles.ErrorMessage}>{error}</div>}
      {winners.map((winner, index) => (
        <div key={winner.id} className={styles.SuccesStoriesCard}>
          <div className={styles.SuccesStoriesCardContent}>
            <img
              className={styles.Avatar}
              src={winnerAvatars[index]?.img}
              alt="avatar"
            />
            <div className={styles.SuccesStoriesCardDecs}>
              <h5>{winner.name}</h5>
              <p>
                <span>{winner.gender === "MALE" ? "выиграл" : "выиграла"}</span>
                <span>{winner.gifted_at}</span>
                <span className={styles.SuccesStoriesYear}>
                  Годовая подписка
                </span>
              </p>
            </div>
          </div>
          <div className={styles.SuccesStoriesCardBox}>Бесплатно 1 год</div>
        </div>
      ))}
    </div>
  );
};
