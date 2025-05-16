import styles from '../Navigation/Navigation.module.css';

export const Navigation = () => (
  <nav>
    <ul className={styles.Navigation}>
      <li><a href="#" className={styles.NavigationLink}>Наша методика</a></li>
      <li><a href="#" className={styles.NavigationLink}>Тарифы</a></li>
      <li><a href="#" className={styles.NavigationLink}>FAQ</a></li>
      <li><a href="#" className={styles.NavigationLink}>Контакты</a></li>
      <li><a href="#" className={styles.NavigationLink}>Личный кабинет</a></li>
    </ul>
  </nav>
);