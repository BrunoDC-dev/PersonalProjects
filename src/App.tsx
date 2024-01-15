
import {  Routes, Route  , HashRouter} from 'react-router-dom';
import QuoteGenerator from './pages/QuoteGenerator';
import './App.css';

const App = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<QuoteGenerator />} />                         
            <Route path="/quote" element={<QuoteGenerator />} />
        </Routes>
    </HashRouter>
  );
}

export default App;