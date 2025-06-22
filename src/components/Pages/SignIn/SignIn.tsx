import styles from "../SignIn/SingIn.module.css";
import { HeaderAdd } from "../../Header/HeaderAdd/HeaderAdd";
import { SignInForm } from "./components/SignInForm";

export const SignIn: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <HeaderAdd />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <SignInForm />
        </section>
      </div>
    </>
  );
};
