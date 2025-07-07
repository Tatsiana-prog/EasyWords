import styles from "../SignIn/SingIn.module.css";
import { Header } from "../../Header/Header";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";

export const ForgotPassword: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <Header />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <ForgotPasswordForm />
        </section>
      </div>
    </>
  );
};
