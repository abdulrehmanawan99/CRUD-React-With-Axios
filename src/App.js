import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import View from './components/View';
import Edit from './components/Edit';

function App() {
  return ( 
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/View/:id" element={<View/>} />
    <Route path="/Edit/:id" element={<Edit/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
