import styles from "./DownloadAppButton.module.css";
import { Button } from "../Button/button";
import IconDownload from "../../../public/images/icons/icon-download.svg";
import { useState } from "react";

interface DownloadAppButtonProps {
  systemVersion: "ios" | "android";
}

export const DownloadAppButton: React.FC<DownloadAppButtonProps> = ({ systemVersion }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };  
  const buttonText = systemVersion === "ios" ? "Скачать для iOS" : "Скачать для Android";

  return (
    <div>
      <Button variant="blue" text={buttonText} onClick={handleClick}>
        <img src={IconDownload} alt="icon" />
      </Button>

      {showMessage && (
        <div className={styles.DownloadInfo}>
          Ссылка для скачивания будет доступна после официального запуска!
        </div>
      )}
    </div>
  );
};