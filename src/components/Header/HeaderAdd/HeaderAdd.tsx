import styles from "../Header.module.css";
import { useState } from 'react';
import { Logo } from "../components/Logo/Logo";
import { MenuIcon } from "../../Header/components/MenuIcon/MenuIcon";
import { Modal } from "../../Header/components/Modal/Modal";

export const HeaderAdd = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(prev => !prev);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderRow}>
        <Logo />
        <MenuIcon onClick={toggleModal} />
        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </header>
  );
};
