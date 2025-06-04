import styles from "../UserProfile/UserProfile.module.css";
import { Header } from "../../Header/Header";
import { Footer } from "../../Footer/Footer";
import { Text } from "../../Text/Text";
import { DownloadAppButton } from "../../DownloadAppButton/DownloadAppButton";
import { UserProfilePromoCode } from "../UserProfile/components/UsePlofilePromoCode/UseProfilePromoCode";
import { Chances } from "../../Chances/Chances";
import { PreOrderFormWithDefault } from "../UserProfile/PreOrderFormWithDefault";

export const UserProfile: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <Header />
        <section className={styles.SectionUseProfile}>
          <div className="UseProfile">
            <h1>Личный кабинет</h1>
            <div className={styles.UseProfileRow}>
              <div className={styles.UseProfileColumn}>
                <h4>Вы оформили предварительный заказ EasyWords</h4>
                <Text>
                  Если что-то поменялось, вы можете изменить свои данные в
                  форме. Кнопка с ссылкой для скачивания приложения станет
                  активной после запуска.
                </Text>
                <UserProfilePromoCode />
                <DownloadAppButton />
                <Chances background="someValue" variant="WhiteBg" />
              </div>
              <PreOrderFormWithDefault />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
