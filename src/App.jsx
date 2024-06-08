import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from '../components/signup';
import LoginPage from '../components/index';
import Home from '../components/modules';
import UserProfile from '../components/profile';
import CameraAccessPage from '../components/cam';
import ActivityPage from '../components/activity';

const App = () =>  {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/modules" element={<Home />} />
        <Route path="/cam" element={<CameraAccessPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/activity" element={<ActivityPage />} />
      </Routes>
    </Router>
    );
  }
  
  export default App;