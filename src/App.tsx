import "./App.css";
// ✅ Убираем импорт BrowserRouter, так как он теперь в main.tsx
import { Route, Routes } from "react-router-dom";

// ✅ Импортируем компонент для защиты роута
import { ProtectedRoute } from "./components/ProtectedRoute";

// Ваши страницы
import { Home } from "./components/Pages/Home/Home";
import { UserProfile } from "./components/Pages/UserProfile/UserProfile";
import { SignIn } from "./components/Pages/SignIn/SignIn";
import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import { UserAgreement } from "./components/Pages/UserAgreement/UserAgreement";
import { ForgotPassword } from "./components/Pages/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./components/Pages/ResetPassword/ResetPassword";

function App() {
  return (
    // ✅ Убираем <Router>, так как он теперь в main.tsx
    <Routes>
      {/* --- Публичные роуты --- */}
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/user-agreement" element={<UserAgreement />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* --- Приватный роут --- */}
      <Route
        path="/user-profile"
        element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
export default App;


// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Home } from "./components/Pages/Home/Home";
// import { UserProfile } from "./components/Pages/UserProfile/UserProfile";
// import { SignIn } from "./components/Pages/SignIn/SignIn";
// import { PrivacyPolicy } from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
// import { UserAgreement } from "./components/Pages/UserAgreement/UserAgreement";
// import { ForgotPassword } from "./components/Pages/ForgotPassword/ForgotPassword";
// import { ResetPassword } from "./components/Pages/ResetPassword/ResetPassword";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user-profile" element={<UserProfile />} />
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/user-agreement" element={<UserAgreement />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password" element={<ResetPassword />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;
