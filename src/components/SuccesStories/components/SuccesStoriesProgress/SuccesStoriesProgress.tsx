import { useState, useEffect } from "react";
import styles from "./SuccesStoriesProgress.module.css";
import api from "../../../../api/api";

export const SuccesStoriesProgress = () => {
  const [currentProgress, setCurrentProgress] = useState(55);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await api.get(
          "/services/count",
          {
            headers: {
              accept: "application/json"
            },
          }
        );
        setCurrentProgress(response.data.all_subscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        setError("Failed to fetch progress data");
      }
    };

    fetchProgress();
  }, []);

  const targetProgress = 200;
  const progressPercentage = Math.round(
    (currentProgress / targetProgress) * 100
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--progress-percentage",
      `${progressPercentage}%`
    );
  }, [progressPercentage]);

  return (
    <div className={styles.SuccesStoriesProgress}>
      {error && <p>Error: {error}</p>}
      <p>
        Следующий розыгрыш состоится, когда мы достигнем {targetProgress}{" "}
        предварительных заказов
      </p>
      <p>
        Текущий прогресс: {currentProgress}/{targetProgress}
      </p>
      <div className={styles.SuccesStoriesProgressLine}>
        <div
          className={styles.SuccesStoriesProgressFill}
          style={{ width: `${progressPercentage}%` }}
        >
          {currentProgress}
        </div>
      </div>
    </div>
  );
};
