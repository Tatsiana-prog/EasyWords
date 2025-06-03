import { useState } from "react";
import styles from "../UsePlofilePromoCode/UseProfilePromoCode.module.css";

import { Text } from "../../../../Text/Text";

import IconCopy from "../../../../../../public/images/icons/icon-copy.svg";

export const UserProfilePromoCode: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPromoCode = () => {
    navigator.clipboard.writeText("easyyear25");
    setCopied(true);
  };

  return (
    <>
      <div className={styles.UseProfilePromoCode}>
        <h4>Ваш промокод</h4>
        <Text>
          Этот промокод даёт скидку 20% в приложении, введите его при оплате
          подписки
        </Text>
        <div className={styles.UseProfilePromoData}>
          <span className={styles.UseProfilePromoText}>easyyear25</span>
          <span
            className={styles.UseProfileIconCopy}
            onClick={handleCopyPromoCode}
          >
            <img src={IconCopy} alt="icon"></img>
          </span>
        </div>
        {copied && <p>Промокод скопирован!</p>}
      </div>
    </>
  );
};
