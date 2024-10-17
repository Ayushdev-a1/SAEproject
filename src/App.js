import { BrowserRouter ,  Routes, Route ,  } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import'./leaderboard.css';
import About from './Pages/About';
import LeaderBoard from './Pages/LeaderBoard';


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<About/>} />
    <Route path= '/leaderboard' element={<LeaderBoard/>} />
   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>
  </>
  );
}

export default App;
