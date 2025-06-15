import {HashRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CoachPage from './pages/CoachPage/CoachPage';
import StudentRoutinesPage from './pages/StudentRoutinesPage/StudentRoutinePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/coach" element={<CoachPage/>}/>
        <Route path="/coach/students/:studentId/routines" element={<StudentRoutinesPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
