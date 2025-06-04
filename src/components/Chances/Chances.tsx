import React, { useState } from "react";
import styles from "../Chances/Chances.module.css";
import { ButtonShare } from "../ButtonShare/ButtonShare";
import { Text } from "../Text/Text";
import { Button } from "../Button/button";
import IconShare from "../../../public/images/icons/icon-share.webp";

interface ChancesProps {
  background: string;
  variant: "BlueBg" | "WhiteBg"; // Добавляем вариант
}

export const Chances: React.FC<ChancesProps> = ({ variant }) => {
  const [showButtonShare, setShowButtonShare] = useState(false);

  const handleButtonClick = () => {
    console.log("Button clicked");
    setShowButtonShare(true);
  };

  return (
    <div className={variant === "BlueBg" ? styles.BlueBg : styles.WhiteBg}>
      <h5>Увеличьте свои шансы!</h5>
      <Text>
        Поделитесь EasyWords c друзьями и увеличьте свои шансы на выигрыш
        бесплатной подписки!
      </Text>
      <Button
        variant="white"
        text="Поделиться с друзьями"
        onClick={handleButtonClick}
      >
        <img src={IconShare} alt="icon" />
      </Button>
      {showButtonShare && <ButtonShare />}
    </div>
  );
};
