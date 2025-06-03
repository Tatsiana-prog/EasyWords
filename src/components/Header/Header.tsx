import styles from "../Header/Header.module.css";
import { Logo } from "../Header/components/Logo/Logo";
import { Navigation } from "../Header/components/Navigation/Navigation";
import { MenuIcon } from "../Header/components/MenuIcon/MenuIcon";
import { Button } from "../Button/button";

export const Header = () => (
  <header className={styles.Header}>
    <div className={styles.HeaderRow}>
      <Logo />
      <div className={styles.HeaderBox}>
        <Navigation />
        <Button variant="white" text="Предзаказ сейчаc" />
        <MenuIcon />
      </div>
    </div>
  </header>
);
