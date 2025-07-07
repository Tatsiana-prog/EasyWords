import styles from "../ButtonHeader/ButtonHeader.module.css";
import { ButtonLink } from "../../../ButtonLink/ButtonLink";

export const ButtonHeader = () => {
    return (
        <div className={styles.ButtonHeader}>
            <ButtonLink
                to="#Preorderoffer"
                variant="white"
                text="Предзаказ сейчас"
            />
        </div>
    );
};