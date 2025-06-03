import styles from "../Footer/Footer.module.css";
import { Link } from 'react-router-dom';

import { Text } from "../Text/Text";
import IconMessage from "../../../public/images/icons/icon-message.svg";
import IconDialog from "../../../public/images/icons/icon-dialog.svg";

import { FooterForm } from "./components/FooterForm/FooterForm";

interface FooterProps {
  id?: string;
}

export const Footer: React.FC<FooterProps> = ({ id }) => {
  return (
  <footer className={styles.Footer} id={id}>
    <div className={styles.FooterRow}>
      <div className={styles.FooterBox}>
        <h3>EasyWords</h3>
        <Text>
          Инновационное мобильное приложение для изучения английских слов
          методом логического кодирования
        </Text>
        <div className={styles.FooterSocialLinks}>
          <Link to="https://www.google.com/?hl=ru"
            className={styles.FooterSocialLink}
            target="_blank"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 7.33306C14.3719 7.33342 12.7767 7.79242 11.3974 8.65746C10.018 9.52251 8.91022 10.7586 8.20092 12.2242C7.49163 13.6897 7.20951 15.3254 7.38689 16.9439C7.56427 18.5624 8.19398 20.0982 9.20387 21.3753C10.2138 22.6524 11.563 23.6193 13.097 24.165C14.631 24.7108 16.2877 24.8134 17.8773 24.4611C19.4669 24.1088 20.9251 23.3158 22.0848 22.1731C23.2446 21.0303 24.059 19.5839 24.4347 17.9997H17.3334C16.8029 17.9997 16.2942 17.789 15.9192 17.4139C15.5441 17.0389 15.3334 16.5302 15.3334 15.9997C15.3334 15.4693 15.5441 14.9606 15.9192 14.5855C16.2942 14.2104 16.8029 13.9997 17.3334 13.9997H26.6667C27.1971 13.9997 27.7059 14.2104 28.0809 14.5855C28.456 14.9606 28.6667 15.4693 28.6667 15.9997C28.6667 18.9287 27.6516 21.7672 25.7943 24.032C23.9369 26.2968 21.352 27.8479 18.4797 28.4213C15.6074 28.9947 12.6251 28.5549 10.0405 27.1768C7.45596 25.7988 5.42885 23.5676 4.30425 20.8631C3.17965 18.1586 3.02707 15.1479 3.8725 12.3436C4.71792 9.53926 6.50909 7.11458 8.9411 5.48229C11.3731 3.85 14.2957 3.11099 17.2112 3.39107C20.1268 3.67114 22.8552 4.95298 24.932 7.01839C25.1183 7.20364 25.2662 7.42376 25.3673 7.66617C25.4685 7.90858 25.5209 8.16854 25.5215 8.4312C25.5222 8.69387 25.4712 8.9541 25.3713 9.19703C25.2714 9.43996 25.1246 9.66084 24.9394 9.84706C24.7541 10.0333 24.534 10.1812 24.2916 10.2823C24.0492 10.3835 23.7892 10.4359 23.5266 10.4366C22.9961 10.4379 22.4868 10.2285 22.1107 9.85439C20.4886 8.23716 18.2906 7.33026 16 7.33306Z"
                fill="#233048"
              />
            </svg>
          </Link>
          <Link to="https://web.telegram.org/a/"
            className={styles.FooterSocialLink}
            target="_blank"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9362 2.89536C28.7124 2.70229 28.4401 2.57396 28.1486 2.52418C27.8572 2.4744 27.5578 2.50506 27.2825 2.61286L1.94999 12.5266C1.4902 12.7057 1.101 13.0292 0.840962 13.4486C0.580922 13.8679 0.464106 14.3604 0.508093 14.8519C0.55208 15.3433 0.75449 15.8072 1.08486 16.1737C1.41524 16.5402 1.85571 16.7895 2.33999 16.8841L8.49999 18.0929V25.0004C8.49998 25.4987 8.64892 25.9857 8.9277 26.3989C9.20648 26.812 9.60237 27.1323 10.0645 27.3188C10.5267 27.5053 11.0341 27.5494 11.5215 27.4454C12.0089 27.3415 12.4541 27.0942 12.8 26.7354L15.6337 23.7966L20.2937 27.8754C20.6188 28.1612 21.0125 28.3578 21.4364 28.4458C21.8602 28.5338 22.2997 28.5103 22.7117 28.3775C23.1237 28.2447 23.4942 28.0072 23.7868 27.6882C24.0795 27.3692 24.2843 26.9798 24.3812 26.5579L29.4587 4.48911C29.5248 4.20105 29.5111 3.90044 29.419 3.61961C29.3269 3.33879 29.16 3.08838 28.9362 2.89536ZM17.4262 9.69035L9.65249 15.2616L5.34874 14.4179L17.4262 9.69035ZM11.5 23.7579V20.1691L13.375 21.8129L11.5 23.7579ZM21.645 25.0729L12.41 16.9766L25.6987 7.4541L21.645 25.0729Z"
                fill="#233048"
              />
            </svg>
          </Link>
        </div>
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
            <Link to="/#Tariffs">Тарифы</Link>
            </li>
            <li>
               <Link to='/#FAQ' className={styles.FooterLink}>
                Частые вопросы
              </Link>
            </li>
            <li>
             <Link to="/#Footer" className={styles.FooterLink}>
                Контакты
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
                href="mailto:easywords@yandex.ru"
                className={styles.FooterLinkContact}
              >
                <img src={IconMessage} alt="icon"></img>
                <span>easywords@yandex.ru</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles.FooterLinkContact}>
                <img src={IconDialog} alt="icon"></img>
                <span>
                  Присоединяйтесь к нашей группе в Telegram: @easywords
                </span>
              </a>
            </li>
          </ul>
        </div>
        <FooterForm/>
      </div>
    </div>
  </footer>
);
};
