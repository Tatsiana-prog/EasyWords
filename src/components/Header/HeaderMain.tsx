import { useState } from 'react';
import styles from "../Header/Header.module.css";
import { Logo } from "./components/Logo/Logo";
import { Navigation } from "./components/Navigation/Navigation";
import { MenuIcon } from "./components/MenuIcon/MenuIcon";
import { Modal } from "./components/Modal/Modal";
import { ButtonLink } from "../ButtonLink/ButtonLink";

export const HeaderMain = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderRow}>
        <Logo />
        <div className={styles.HeaderBox}>
          <Navigation />
          <ButtonLink
            to="#Preorderoffer"
            variant="white"
            text="Предзаказ сейчас"
          />
          <MenuIcon onClick={toggleModal} />
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </header>
  );
};
