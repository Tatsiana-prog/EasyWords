import { Button } from "../Button/button";
import styles from "../ApplicationPassword/ApplicationPassword.module.css";
import { Text } from "../Text/Text";

interface ApplicationPasswordProps {
  onBack: () => void;
}

export const ApplicationPassword: React.FC<ApplicationPasswordProps> = ({
  onBack,
}) => (
  <div className={styles.ApplicationPassword}>
    <Text>
      Инструкция для сброса пароля отправлена на вашу почту. Проверьте папку
      «Входящие», а также «Спам»
    </Text>
    <Button variant="blue" text="Хорошо" onClick={onBack} />
  </div>
);
