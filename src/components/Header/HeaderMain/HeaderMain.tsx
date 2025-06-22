// HeaderMain.tsx
import { useState } from 'react';

import { Logo } from "../../Header/components/Logo/Logo";
import { Navigation } from "../../Header/components/Navigation/Navigation";
import { MenuIcon } from "../../Header/components/MenuIcon/MenuIcon";
import { Modal } from "../../Header/components/Modal/Modal";
import { ButtonLink } from "../../ButtonLink/ButtonLink";
import styles from "../../Header/Header.module.css";

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
          <div className={styles.ButtonLinkWrapper}>
            <ButtonLink
              to="#Preorderoffer"
              variant="white"
              text="Предзаказ сейчас"
            />
          </div>
          <MenuIcon onClick={toggleModal} />
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </header>
  );
};
