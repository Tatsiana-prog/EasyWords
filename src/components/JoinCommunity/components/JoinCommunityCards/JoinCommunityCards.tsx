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
        // Запрос теперь отправляется без заголовка Authorization
        const response = await api.get<SubscriptionData>("/services/count");

        console.log("Response Data:", response.data);

        setTotalCount(response.data.all_subscriptions);
        setMonthlyCount(response.data.monthly_subscriptions);
        setYearlyCount(response.data.yearly_subscriptions);
      } catch (err) {
        console.error("Error fetching subscriptions:", err);
        // Упрощенная обработка ошибок для публичного эндпоинта
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

// import styles from "../JoinCommunityCards/JoinCommunityCards.module.css";
// import React, { useEffect, useState } from "react";
// import { Text } from "../../../Text/Text";
// import api from "../../../../api/api";

// interface SubscriptionData {
//   all_subscriptions: number;
//   monthly_subscriptions: number;
//   yearly_subscriptions: number;
// }

// export const JoinCommunityCards: React.FC = () => {
//   const [yearlyCount, setYearlyCount] = useState<number>(0);
//   const [monthlyCount, setMonthlyCount] = useState<number>(0);
//   const [totalCount, setTotalCount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       setLoading(true);
//       setError(null);
//       const token = localStorage.getItem("authToken");
//       if (!token) {
//         setError("Вы не авторизованы.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await api.get<SubscriptionData>("/services/count", {
//           headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log("Response Data:", response.data);

//         setTotalCount(response.data.all_subscriptions);
//         setMonthlyCount(response.data.monthly_subscriptions);
//         setYearlyCount(response.data.yearly_subscriptions);
//       } catch (err) {
//         const error = err as { response?: { status: number; data: any } }; // Type assertion
//         console.error("Error fetching subscriptions:", error);
//         if (error.response && error.response.status === 401) {
//           setError("Unauthorized access. Please log in again.");
//         } else {
//           setError("Failed to fetch subscription data.");
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSubscriptions();
//   }, []);

//   if (loading) return <p>Загрузка...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <Text>
//         Уже <span>{totalCount}</span> человек готовы начать учить английские
//         слова по-новому!
//       </Text>
//       <div className={styles.JoinCommunityCards}>
//         <div className={styles.JoinCommunityCard}>
//           <span>{totalCount}</span>
//           <h4>Предварительные заказы</h4>
//         </div>
//         <div className={styles.JoinCommunityCard}>
//           <span>{monthlyCount}</span>
//           <h4>Ежемесячные подписки</h4>
//         </div>
//         <div className={styles.JoinCommunityCard}>
//           <span>{yearlyCount}</span>
//           <h4>Годовые подписки</h4>
//         </div>
//       </div>
//     </>
//   );
// };
