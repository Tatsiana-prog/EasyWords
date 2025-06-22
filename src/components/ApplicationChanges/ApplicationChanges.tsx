import { Button } from "../Button/button";
import styles from "../ApplicationAccept/ApplicationAccept.module.css";
import { Text } from "../Text/Text";

interface ApplicationChangesProps {
  onBack: () => void;
}

export const ApplicationChanges: React.FC<ApplicationChangesProps> = ({
  onBack,
}) => (
  <div className={styles.ApplicationAccept}>
    <h4>Ваша изменения приняты</h4>
    <Text>Спасибо!</Text>
    <Text>Мы отправили ваши данные на сервер.</Text>
    <Button variant="blue" text="Отлично" onClick={onBack} />
  </div>
);
