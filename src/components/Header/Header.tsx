// HeaderMain.tsx
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Modal } from "./components/Modal/Modal";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const showNav = location.pathname === '/';
  const showButtonHeader = location.pathname === '/';
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderRow}>
        <Logo />
        <div className={styles.HeaderBox}>
           {showNav && <Navigation />}
           <div className={styles.ButtonHeader}>
           {showButtonHeader &&
            <ButtonLink
              to="#Preorderoffer"
              variant="white"
              text="Предзаказ сейчас"
            />}
          </div>
          <MenuIcon onClick={toggleModal} />
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </header>
  );
};
