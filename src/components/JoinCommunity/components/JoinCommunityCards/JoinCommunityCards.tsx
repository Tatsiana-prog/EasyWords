import styles from "../JoinCommunityCards/JoinCommunityCards.module.css";
import React, { useEffect, useState } from "react";
import { Text } from "../../../Text/Text";
import axios from "axios";

interface SubscriptionData {
  all_subscriptions: number;
  monthly_subscriptions: number;
  yearly_subscriptions: number;
}

export const JoinCommunityCards: React.FC = () => {
  const [yearlyCount, setYearlyCount] = useState<number>(0);
  const [monthlyCount, setMonthlyCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get<SubscriptionData>(
          "https://test.easywordsapp.com/api/services/count",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMiIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNzQ4MjYwNTc1fQ.VVLD0jJBNGFaoWSZxWWZ3EDmndOzAaTIUzVhQC_6hnw`,
            },
          }
        );

        setTotalCount(response.data.all_subscriptions);
        setMonthlyCount(response.data.monthly_subscriptions);
        setYearlyCount(response.data.yearly_subscriptions);
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <>
      <Text>
        Уже <span>{totalCount}</span> человек готовы начать учить английские
        слова по-новому!
      </Text>
      <div className={styles.JoinCommunityCards}>
        <div className={styles.JoinCommunityCard}>
          <span>{totalCount}</span>
          <h4>Предварительные заказы</h4>
        </div>
        <div className={styles.JoinCommunityCard}>
          <span>{monthlyCount}</span>
          <h4>Ежемесячные подписки</h4>
        </div>
        <div className={styles.JoinCommunityCard}>
          <span>{yearlyCount}</span>
          <h4>Годовые подписки</h4>
        </div>
      </div>
    </>
  );
};