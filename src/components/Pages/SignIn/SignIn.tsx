import styles from "../SignIn/SingIn.module.css";
import { Header } from "../../Header/Header";
import { SignInForm } from "./components/SignInForm";

export const SignIn: React.FC = () => {
  return (
    <>
      <div className="Wrapper">
        <Header />
      </div>
      <div className="Wrapper">
        <section className={styles.SectionSignIn}>
          <SignInForm />
        </section>
      </div>
    </>
  );
};
