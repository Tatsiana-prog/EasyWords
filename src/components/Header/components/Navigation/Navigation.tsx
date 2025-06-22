import { Link } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

export const Navigation = () => (
    <nav>
        <ul className={styles.Navigation}>
            <li><Link to="#UniqueMethodology" className={styles.NavigationLink}>Наша методика</Link></li>
            <li><Link to="#Tariffs" className={styles.NavigationLink}>Тарифы</Link></li>
            <li><Link to="#FAQ" className={styles.NavigationLink}>FAQ</Link></li>
            <li><Link to="#Footer" className={styles.NavigationLink}>Контакты</Link></li>
            <li><Link to='/SignIn' className={styles.NavigationLink}>Личный кабинет</Link></li>
        </ul>
    </nav>
);