import { BrowserRouter ,  Routes, Route ,  } from 'react-router-dom';
import './App.css';
import './Responsive.css'
import About from './Pages/About';


function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<About/>} />
   </Routes>
   {/* <Footer/> */}
   </BrowserRouter>
  </>
  );
}

export default App;
