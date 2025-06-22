import styles from "../SignIn/SingIn.module.css";
import { HeaderAdd } from "../../Header/HeaderAdd/HeaderAdd";
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";

export const ForgotPassword: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <HeaderAdd />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <ForgotPasswordForm />
        </section>
      </div>
    </>
  );
};
