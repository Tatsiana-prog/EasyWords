import styles from "../AppFeatures/AppFeatures.module.css";
import { Text } from "../Text/Text";

import { AppFeaturesList1 } from "../AppFeatures/components/AppFeaturesList1/AppFeaturesList1";
import { AppFeaturesList2 } from "../AppFeatures/components/AppFeaturesList2/AppFeaturesList2";
import { AppFeaturesList3 } from "../AppFeatures/components/AppFeauturesList3/AppFeaturesList3";

export const AppFeatures = () => (
  <section className={styles.SectionAppFeatures}>
    <h2>Что вас ждет в приложении</h2>
    <div className={styles.AppFeaturesRow}>
      <div className={styles.AppFeaturesRowInfo}>
        <h4>Флеш-карточки</h4>
        <Text>
          Изучайте и повторяйте слова с помощью флеш-карточек в любое удобное
          время. Доказано, что при изучении новой информации с помощью карточек
          мозг работает активнее.
        </Text>
        <AppFeaturesList1 />
      </div>
      <div className={styles.AppFeaturesImage}>
        <img
          src="/images/image-feature-1.webp"
          alt="image"
        ></img>
      </div>
    </div>
    <div className={styles.AppFeaturesRow}>
      <div className={styles.AppFeaturesRowInfo}>
        <h4>Закрепление изученного материала</h4>
        <Text>
          Проверяйте собственные знания c помощью простых, но эффективных
          заданий.
        </Text>
        <AppFeaturesList2 />
      </div>
    <div className={styles.AppFeaturesImage}>
        <img
          src="/images/image-feature-2.webp"
          alt="image"
        ></img>
      </div>
    </div>
    <div className={styles.AppFeaturesRow}>
      <div className={styles.AppFeaturesRowInfo}>
        <h4>Интервальное повторение</h4>
        <Text>
          Не просто учите слова — закрепляйте их в долгосрочной памяти с помощью
          нашего механизма интервального повторения.
        </Text>
        <AppFeaturesList3 />
      </div>
     <div className={styles.AppFeaturesImage}>
        <img
          src="/images/image-feature-3.png"
          alt="image"
        ></img>
      </div>
    </div>
  </section>
);
