import styles from "../UserProfile/UserProfile.module.css";
import { HeaderMain } from "../../Header/HeaderMain/HeaderMain";
import { Footer } from "../../Footer/Footer";
import { Text } from "../../Text/Text";
import { UserProfilePromoCode } from "../UserProfile/components/UsePlofilePromoCode/UseProfilePromoCode";
import { Chances } from "../../Chances/Chances";
import { UserForm } from "../../Pages/UserProfile/components/UserForm/UserForm";
import { DownloadAppButton } from "../../DownloadAppButton/DownloadAppButton";
import React, { useState } from "react";

export const UserProfile: React.FC = () => {
  const [systemVersion, setSystemVersion] = useState<"ios" | "android">("ios");

  return (
    <>
      <div className="Wrapper">
        <HeaderMain />
        <section className={styles.SectionUseProfile}>
          <div className="UseProfile">
            <h1>Личный кабинет</h1>
            <div className={styles.UseProfileRow}>
              <div className={styles.UseProfileColumn}>
                <h3>Вы оформили предварительный заказ EasyWords</h3>
                <Text>
                  Если что-то поменялось, вы можете изменить свои данные в
                  форме. Кнопка с ссылкой для скачивания приложения станет
                  активной после запуска.
                </Text>
                <UserProfilePromoCode />
                <DownloadAppButton systemVersion={systemVersion} />
                <Chances background="someValue" variant="WhiteBg" />
              </div>
              <div className={styles.UseProfileColumn}>
                <UserForm setSystemVersion={setSystemVersion} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
