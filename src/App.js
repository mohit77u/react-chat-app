import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Chat from './pages/Chat'

function App() {

  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:username' element={<Chat />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
