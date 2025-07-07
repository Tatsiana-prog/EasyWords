import styles from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import { Text } from "../Text/Text";
import { FooterForm } from "./components/FooterForm/FooterForm";
import IconMessage from "../../../public/images/icons/icon-message.svg";
import IconDialog from "../../../public/images/icons/icon-dialog.svg";

interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
    <footer className={styles.Footer} id={id}>
      <div className={styles.FooterRow}>
        <div className={styles.FooterBoxes}>
          <div className={styles.FooterBox}>
            <h3>EasyWords</h3>
            <Text>
              Инновационное мобильное приложение для изучения английских слов
              методом логического кодирования
            </Text>
          </div>
          <div className={styles.FooterBox}>
            <h4>Быстрые ссылки</h4>
            <div className={styles.FooterLinks}>
              <ul>
                <li>
                  <Link to="/#UniqueMethodology" className={styles.FooterLink}>
                    Наша методика
                  </Link>
                </li>
                <li>
                  <Link to="/#Tariffs" className={styles.FooterLink}>
                    Тарифы
                  </Link>
                </li>
                <li>
                  <Link to="/#FAQ" className={styles.FooterLink}>
                    Частые вопросы
                  </Link>
                </li>
                <li>
                  <Link to="/#Footer" className={styles.FooterLink}>
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/UserAgreement" className={styles.FooterLink}>
                    Пользовательское соглашение
                  </Link>
                </li>
                <li>
                  <Link to="/PrivacyPolicy" className={styles.FooterLink}>
                    Политика коденфициальности
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.FooterBox}>
            <h4>Связаться c нами</h4>
            <div className={styles.FooterContacts}>
              <ul>
                <li>
                  <a
                    href="mailto:info@easywordsapp.com"
                    className={styles.FooterLinkContact}
                  >
                    <img src={IconMessage} alt="icon" />
                    <span>info@easywordsapp.com</span>
                  </a>
                </li>
                <li>
                  <Link
                    to="https://t.me/EasyWordsApp"
                    className={styles.FooterLinkContact}
                    target="_blank"
                  >
                    <img src={IconDialog} alt="icon"></img>
                    <span>
                      Присоединяйтесь к нашей группе в Telegram: @EasyWordsApp
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <FooterForm />
          </div>
        </div>
        <p className={styles.FooterRightsReserved}>
          © 2025 EasyWords. Все права защищены
        </p>
      </div>
    </footer>
  );
};
