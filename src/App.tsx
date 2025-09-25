import {  HashRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicyDayStories from './pages/privacyPage';
import Home from './pages/homePage';
import DataDeletionPolicyDayStories from './pages/dataDeletion';
import TermsAndConditionsDayStories from './pages/termsandcondition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyDayStories />} />
        <Route path='/datadeletion' element = {<DataDeletionPolicyDayStories/>} />
        <Route path='/termsandcondition' element = {<TermsAndConditionsDayStories/>} />
      </Routes>
    </Router>
  );
}

export default App;
