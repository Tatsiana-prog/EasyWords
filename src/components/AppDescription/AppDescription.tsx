import styles from "../AppDescription/AppDescription.module.css";
import ImgDesc from "../../../public/images/image-desc.webp";

import { Button } from "../Button/button";

export const AppDescription = () => (
  <section className={styles.SectionDescription}>
    <div className={styles.DescriptionContent}>
      <div className={styles.DescriptionHeader}>
        <h1>
          EasyWords — инновационное мобильное приложение для изучения английских
          слов
        </h1>
        <p className={styles.DescriptionSubtitle}>
          Запоминайте английскую лексику легко: воспользуйтесь нашим уникальным
          методом логического кодирования!
        </p>
        <div className={styles.Buttons}>
          <Button variant="blue" text="Предзаказ сейчас (-20%)" />
          <Button variant="white" text="Узнать больше" />
        </div>{" "}
      </div>
      <div className={styles.DescriptionListWrapper}>
        <h4 className={styles.DescriptionListTitle}>
          Оформите предварительный заказ сейчас и получите:
        </h4>
        <ul className={styles.DescriptionList}>
          <li className={styles.DescriptionListItem}>Скидку 20% на подписку</li>
          <li className={styles.DescriptionListItem}>
            Шанс выиграть бесплатную годовую подписку
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.DescriptionImage}>
      <img src={ImgDesc} alt="image description"></img>
    </div>
  </section>
);
