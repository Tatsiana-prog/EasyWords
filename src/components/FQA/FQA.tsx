import React, { useEffect, useState } from "react";
import { Accordion } from "../FQA/components/Accordion";
import styles from "./FQA.module.css";
import api from "../../api/api";

interface FaqItem {
  question: string;
  answer: string;
  category_id: number;
  id: number;
}

interface FqaProps {
  id?: string;
}

export const FQA: React.FC<FqaProps> = ({ id }) => {
  const [faqItems, setFaqItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaqItems = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get("/faqs");
        if (!response || response.status !== 200) {
          throw new Error("Ошибка загрузки данных");
        }
        const data = response.data;
        setFaqItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ошибка");
      } finally {
        setLoading(false);
      }
    };

    fetchFaqItems();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className={styles.SectionFqa} id={id}>
      <h2>Ответы на часто задаваемые вопросы</h2>
      <Accordion items={faqItems} />
      <p>Остались вопросы? Свяжитесь с нами!</p>
    </section>
  );
};