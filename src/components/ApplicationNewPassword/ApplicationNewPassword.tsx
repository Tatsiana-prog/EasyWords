import { Button } from "../Button/button";
import styles from "../ApplicationPassword/ApplicationPassword.module.css";
import { Text } from "../Text/Text";

interface ApplicationNewPasswordProps {
  onBack: () => void;
}

export const ApplicationNewPassword: React.FC<ApplicationNewPasswordProps> = ({
  onBack,
}) => (
  <div className={styles.ApplicationPassword}>
    <Text>
      Ваш пароль успешно сохранен.
    </Text>
    <Button variant="blue" text="Хорошо" onClick={onBack} />
  </div>
);
