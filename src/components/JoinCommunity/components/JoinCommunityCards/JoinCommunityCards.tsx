import styles from "../JoinCommunityCards/JoinCommunityCards.module.css";
import React, { useEffect, useState } from "react";
import { Text } from "../../../Text/Text";
import api from "../../../../api/api";

interface SubscriptionData {
  all_subscriptions: number;
  monthly_subscriptions: number;
  yearly_subscriptions: number;
}

export const JoinCommunityCards: React.FC = () => {
  const [yearlyCount, setYearlyCount] = useState<number>(0);
  const [monthlyCount, setMonthlyCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      setLoading(true);
      setError(null);
        try {
          const response = await api.get<SubscriptionData>("/services/count");

        console.log("Response Data:", response.data);

        setTotalCount(response.data.all_subscriptions);
        setMonthlyCount(response.data.monthly_subscriptions);
        setYearlyCount(response.data.yearly_subscriptions);
      } catch (err) {
        console.error("Error fetching subscriptions:", err);
        setError("Не удалось загрузить данные о подписках.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Text>
        Уже <span>{totalCount}</span> человек готовы начать учить английские
        слова по-новому!
      </Text>
      <div className={styles.JoinCommunityCards}>
        <div className={styles.JoinCommunityCard}>
          <span>{totalCount}</span>
          <Text className={styles.JoinCommunityCardText}>Предварительные заказы</Text>
        </div>
        <div className={styles.JoinCommunityCard}>
          <span>{monthlyCount}</span>
          <Text>Ежемесячные подписки</Text>
        </div>
        <div className={styles.JoinCommunityCard}>
          <span>{yearlyCount}</span>
          <Text>Годовые подписки</Text>
        </div>
      </div>
    </>
  );
};

