import styles from "../SignIn/SingIn.module.css";
import { Header } from "../../Header/Header";
import { ResetPasswordForm } from "./components/ResetPasswordForm/ResetPasswordForm";

export const ResetPassword: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <Header />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <ResetPasswordForm />
        </section>
      </div>
    </>
  );
};
