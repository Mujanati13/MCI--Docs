import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import GuideGeneral from './pages/GuideGeneral';
import GuideTechnique from './pages/GuideTechnique';
import GuideAdmin from './pages/GuideAdmin';
import GuideESN from './pages/GuideESN';
import GuideClient from './pages/GuideClient';
import GuideConsultant from './pages/GuideConsultant';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/general" element={<GuideGeneral />} />
            <Route path="/technique" element={<GuideTechnique />} />
            <Route path="/admin" element={<GuideAdmin />} />
            <Route path="/esn" element={<GuideESN />} />
            <Route path="/client" element={<GuideClient />} />
            <Route path="/consultant" element={<GuideConsultant />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
