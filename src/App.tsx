import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/Pages/Home/Home";
import { UserProfile } from "./components/Pages/UserProfile/UserProfile";
import { SignIn } from "./components/Pages/SignIn/SignIn";
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import { UserAgreement } from "./components/Pages/UserAgreement/UserAgreement";
import { ForgotPassword } from "./components/Pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./components/Pages/ResetPassword/ResetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/UserAgreement" element={<UserAgreement />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
