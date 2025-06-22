import React, { useEffect } from "react";
import styles from "../Modal/Modal.module.css";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../../ButtonLink/ButtonLink";
import  LogoImage  from "../../../../../public/images/logo.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScrollTo = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.Modal}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div className={styles.ModalBody} onClick={(e) => e.stopPropagation()}>
        <div className={styles.ModalRow}>
          <img src={LogoImage}  className={styles.LogoImage} alt="logo"/>
          <div className={styles.CloseButtonWrapper}>
            <button
              className={styles.CloseButton}
              onClick={onClose}
              aria-label="Закрыть меню"
              >✖
          </button>
          </div>
        </div>
        <div className={styles.ModalContent}>
          <button
            onClick={() => handleScrollTo("UniqueMethodology")}
            className={styles.ModalLink}
          >
            Наша методика
          </button>
          <button
            onClick={() => handleScrollTo("Tariffs")}
            className={styles.ModalLink}
          >
            Тарифы
          </button>
          <button
            onClick={() => handleScrollTo("FAQ")}
            className={styles.ModalLink}
          >
            FAQ
          </button>
          <button
            onClick={() => handleScrollTo("Footer")}
            className={styles.ModalLink}
          >
            Контакты
          </button>
          <Link to="/SignIn" className={styles.ModalLink}>
            Личный кабинет
          </Link>
          <ButtonLink
            to="/#Preorderoffer"
            variant="white"
            text="Предзаказ сейчас"
          />
        </div>
      </div>
    </div>
  );
};
