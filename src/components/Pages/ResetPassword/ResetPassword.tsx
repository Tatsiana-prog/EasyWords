import styles from "../SignIn/SingIn.module.css";
import { HeaderAdd } from "../../Header/HeaderAdd/HeaderAdd";
import { ResetPasswordForm } from "./components/ResetPasswordForm/ResetPasswordForm";

export const ResetPassword: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <HeaderAdd />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <ResetPasswordForm />
        </section>
      </div>
    </>
  );
};
