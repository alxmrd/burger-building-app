import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import HomePage from "./pages/HomePage";
import PrivateRoutes from "./helpers/PrivateRoutes";
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/profile" element={<HomePage />} />
        </Route>
        <Route path="/" element={<LogIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
