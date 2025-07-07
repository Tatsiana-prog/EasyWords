import styles from "../Logo/Logo.module.css";

import EasyLogo from '../../../../../public/images/logo.png'


export const Logo = () => (
    <a href="/" className={styles.Logo}>
      <img src={EasyLogo} alt="EasyWords Logo" />
    </a>
);