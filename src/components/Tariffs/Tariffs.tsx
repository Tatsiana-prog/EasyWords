import React, { useEffect } from "react";
import styles from "../Tariffs/Tariffs.module.css";
import { Text } from "../Text/Text";
import { Button } from "../Button/button";
import { TariffsBoxList1 } from "../Tariffs/components/TariffsBoxList1/TariffsBoxList1";
import { TariffsBoxList2 } from "../Tariffs/components/TariffsBoxList2/TariffsBoxList2";

interface TariffsProps {
  id?: string;
}

export const Tariffs: React.FC<TariffsProps> = ({ id }) => {
  useEffect(() => {
    const scrollToTariffs = () => {
      const tariffsElement = document.getElementById("Tariffs");
      if (tariffsElement) {
        tariffsElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToTariffs();
  }, []);

  return (
    <section className={styles.SectionTariffs} id={id}>
      <h2>Тарифы</h2>
      <div className={styles.TariffsSubtitle}>
        <Text>
          Оформите предварительный заказ сейчас и получите скидку 20% после
          запуска приложения!
        </Text>
      </div>
      <div className={styles.TariffsBoxes}>
        <div className={styles.TariffsBox}>
          <h3>Ежемесячная подписка</h3>
          <span className={styles.PriceSale}>149 &#8381;</span>
          <p className={styles.Price}>119&#8381; в месяц</p>
          <p className={styles.TariffsBoxSubtitle}>
            Скидка 20% при предварительном заказе
          </p>
          <Text>Идеально подходит для краткосрочных целей обучения</Text>
          <TariffsBoxList1 />
          <Button variant="white" text="Предварительный заказ" />
        </div>
        <div className={styles.TariffsBox}>
          <h3>Годовая подписка</h3>
          <span className={styles.PriceSale}>1499 &#8381;</span>
          <p className={styles.Price}>1199&#8381; в год</p>
          <p className={styles.TariffsBoxSubtitle}>
            Скидка 20% при предварительном заказе
          </p>
          <Text>Лучшее соотношение цены и качества для серьезных учеников</Text>
          <TariffsBoxList2 />
          <Button variant="white" text="Предварительный заказ" />
          <div className={styles.TariffsBoxSale}>Скидка 20%</div>
        </div>
      </div>
      <div className={styles.TariffsWinFree}>
        <h3>Выиграйте БЕСПЛАТНУЮ годовую подписку!</h3>
        <Text>
          За каждые 100 предварительных заказов мы случайным образом выберем
          одного человека, который получит совершенно бесплатную годовую
          подписку
        </Text>
        <Button variant="blue" text="Принять участие" />
      </div>
    </section>
  );
};
