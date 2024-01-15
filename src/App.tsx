
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteGenerator from './pages/QuoteGenerator';
import './App.css';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<QuoteGenerator />} />                         
            <Route path="/random-quote" element={<QuoteGenerator />} />
        </Routes>
    </Router>
  );
}

export default App;