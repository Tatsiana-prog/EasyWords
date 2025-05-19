import styles from "../UniqueMethodology/UniqueMethodology.module.css";
import { Text } from "../Text/Text";
import { UniqueMethodologyBox } from "../UniqueMethodology/components/UniqueMethodologyBox/UniqueMethodologyBox";
import { UniqueMethodologyArrow } from "../UniqueMethodology/components/UniqueMethodologyArrow/UniqueMethodologyArrow";
import { UniqueMethodologyList } from "../UniqueMethodology/components/UniqueMethodologyList/UniqueMethodologyList ";

export const UniqueMethodology = () => (
  <section className={styles.SectionUniqueMethodology}>
    <h2>Наша уникальная методика</h2>
    <div className={styles.UniqueMethodologyRow1}>
      <div className={styles.UniqueMethodologyInfo}>
        <div>
          <Text>
            Помогает быстро найти слово в памяти, словно товар в магазине c
            аккуратно организованными полками.Наш минимальный словарь — это 3300
            слов, сгруппированных по темам и подгруппам. Это не только упрощает
            процесс обучения, но и значительно повышает эффективность
            запоминания
          </Text>
        </div>
        <div className={styles.UniqueMethodologyListWrapper}>
          <h4 className={styles.UniqueMethodologyListTitle}>
            Как это работает
          </h4>
          <ul className={styles.UniqueMethodologyList}>
            <li className={styles.UniqueMethodologyListItem}>
              Слова сгруппированы по темам
            </li>
            <li className={styles.UniqueMethodologyListItem}>
              Каждая группа имеет логический код{" "}
            </li>
            <li className={styles.UniqueMethodologyListItem}>
              Запомнив код, легко достаете слово из памяти{" "}
            </li>
            <li className={styles.UniqueMethodologyListItem}>
              Мнемотехники и интервальное повторение закрепляют результат
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.UniqueMethodologyBoxesWrapper}>
          <UniqueMethodologyBox>Части речи</UniqueMethodologyBox>
          <UniqueMethodologyArrow />
          <UniqueMethodologyBox>Группы</UniqueMethodologyBox>
          <UniqueMethodologyBox>Подгруппы</UniqueMethodologyBox>
          <UniqueMethodologyArrow />
          <UniqueMethodologyBox>Слова</UniqueMethodologyBox>
          <UniqueMethodologyArrow
            className={styles.UniqueMethodologyArrowCenter}
          />
        </div>
        <div className={styles.UniquelogicalConnections}>
          <h4>Логические связи</h4>
          <Text>
            Слова с одинаковым значением собраны в группы для легкого усвоения
          </Text>
          <img
            src="../../../public/images/image-unique-2.webp"
            alt="image"
          ></img>
        </div>
      </div>
    </div>
    <div className={styles.UniqueMethodologyRow2}>
      <div className={styles.UniqueMethodologyDifference}>
        <h4>Чем EasyWords отличается</h4>
        <Text>
          Большинство языковых приложений используют случайные списки слов или
          базовые категории. Мы разработали систему, которая создает значимые
          связи между словами, облегчая их запоминание, сохранение и извлечение
          из памяти.
        </Text>
        <UniqueMethodologyList />
      </div>
      <div className={styles.UniqueMethodologyCodding}>
        <img src="../../../public/images/image-unique.webp" alt="image"></img>
        <h4>Логическое кодирование</h4>
        <Text>Наш мозг лучше обучается c помощью логических связей</Text>
      </div>
    </div>
  </section>
);
