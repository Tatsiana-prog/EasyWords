import { Button } from "../Button/button";
import styles from "../ApplicationAccept/ApplicationAccept.module.css";
import { Text } from "../Text/Text";

interface ApplicationAcceptProps {
  onBack: () => void;
}

export const ApplicationAccept: React.FC<ApplicationAcceptProps> = ({
  onBack,
}) => (
  <div className={styles.ApplicationAccept}>
    <h4>Ваша заявка принята</h4>
    <Text>Спасибо! Ваша заявка принята.</Text>
    <Text>Мы отправили данные для входа в личный кабинет на вашу почту.</Text>
    <Button variant="blue" text="Отлично" onClick={onBack} />
  </div>
);
