// src/components/Header/components/Navigation/Navigation.tsx

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext'; 
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuth(false);
    navigate('/');
  };

  return (
    <nav>
      <ul className={styles.Navigation}>
        <li><Link to="/#UniqueMethodology" className={styles.NavigationLink}>Наша методика</Link></li>
        <li><Link to="/#Tariffs" className={styles.NavigationLink}>Тарифы</Link></li>
        <li><Link to="/#FAQ" className={styles.NavigationLink}>FAQ</Link></li>
        <li><Link to="/#Footer" className={styles.NavigationLink}>Контакты</Link></li>
        
        {isAuth ? (
          // Если пользователь авторизован:
          <>
            <li>
              <Link to='/user-profile' className={styles.NavigationLink}>Личный кабинет</Link>
            </li>
            <li>
              <button 
                onClick={handleLogout} 
                className={styles.NavigationLink} 
                // Добавляем стили, чтобы кнопка выглядела как ссылка
                style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontFamily: 'inherit'}}
              >
                Выйти
              </button>
            </li>
          </>
        ) : (
          // Если пользователь НЕ авторизован:
          <li>
            <Link to='/sign-in' className={styles.NavigationLink}>Войти</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};


// import { Link } from 'react-router-dom';
// import styles from '../Navigation/Navigation.module.css';

// export const Navigation = () => (
//     <nav>
//         <ul className={styles.Navigation}>
//             <li><Link to="/#UniqueMethodology" className={styles.NavigationLink}>Наша методика</Link></li>
//             <li><Link to="/#Tariffs" className={styles.NavigationLink}>Тарифы</Link></li>
//             <li><Link to="/#FAQ" className={styles.NavigationLink}>FAQ</Link></li>
//             <li><Link to="/#Footer" className={styles.NavigationLink}>Контакты</Link></li>
//             <li><Link to='/sign-in' className={styles.NavigationLink}>Личный кабинет</Link></li>
//         </ul>
//     </nav>
// );