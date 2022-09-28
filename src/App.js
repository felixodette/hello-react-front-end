import './App.css';
import { Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <div></div>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
}

export default App;
