import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FormProvider } from "./components/PreOrderOffer/components/FormContext/FormContext"; // путь поправь под себя
import { Home } from "./components/Pages/Home/Home";
import { UserProfile } from "./components/Pages/UserProfile/UserProfile";


function App() {
  return (
    <Router>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UserProfile" element={<UserProfile />} />
        </Routes>
      </FormProvider>
    </Router>
  );
}
export default App;