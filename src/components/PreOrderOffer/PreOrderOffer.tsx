import styles from "../PreOrderOffer/PreOrderOffer.module.css";
import { Text } from "../Text/Text";
import { PreOrderList } from "./components/PreOrderList/PreOrderList";
import { Chances } from "../Chances/Chances";
import { PreOrderForm } from "../PreOrderOffer/components/PreOrderForm/PreOrderForm";

interface PreOrderOfferProps {
  id?: string;
}

export const PreOrderOffer: React.FC<PreOrderOfferProps> = ( ) => {
  return (
    <section className={styles.SectionPreOrderOffer}>
      <div className={styles.PreOrderOfferHeader}>
        <h2>
          Оформите предварительный заказ сегодня и получите эксклюзивные
          преимущества
        </h2>
        <Text>
          Присоединяйтесь к нашему растущему сообществу изучающих языки и
          получите скидку 20%
        </Text>
      </div>
      <div className={styles.PreOrderOfferBox}>
        <div className={styles.PreOrderOfferColumn}>
          <div className={styles.PreOrderListWrapper}>
            <h5>Зачем делать предварительный заказ?</h5>
            <PreOrderList />
          </div>
          <Chances background="someValue" variant="BlueBg" />
          <div className={styles.PreOrderSchedule}>
            <h4>График запуска</h4>
            <div className={styles.PreOrderScheduleContent}>
              <div className={styles.PreOrderScheduleBox}>
                <h5>Предварительные заказы открыты</h5>
                <p>Сейчас</p>
              </div>
              <div className={styles.PreOrderScheduleBox}>
                <h5>Бета-доступ</h5>
                <p>Июль 2025</p>
              </div>
              <div className={styles.PreOrderScheduleBox}>
                <h5>Официальный запуск</h5>
                <p>Август 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.PreOrderOfferColumn}>
          <PreOrderForm />
        </div>
      </div>
    </section>
  );
};
