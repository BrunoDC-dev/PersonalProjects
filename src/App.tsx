
import {  BrowserRouter ,Routes, Route  , HashRouter} from 'react-router-dom';
import QuoteGenerator from './pages/QuoteGenerator';
import './App.css';
import MarkdownPreview from './pages/MarkdownPreview';
import Drum from './pages/Drum';
import Calculator from './pages/Calculator';
import Clock from './pages/Clock';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Clock />} />                         
            <Route path="/random-quote" element={<QuoteGenerator />} />
            <Route path="/markdown-live-previewer" element={<MarkdownPreview />} />
            <Route path="/drum" element={<Drum />} />
            <Route path='/calculator' element={<Calculator/>} />
            <Route path='/clock' element={<Clock/>} />
        </Routes>
    </BrowserRouter>
    <HashRouter>
        <Routes>
            <Route path="/markdown-live-previewer" element={<QuoteGenerator />} />
            <Route path="/random-quote" element={<MarkdownPreview />} />
            <Route path="/drum" element={<Drum />} />
            <Route path='/calculator' element={<Calculator/>} />
            <Route path='/clock' element={<Clock/>} />
        </Routes>
    </HashRouter>
</>
  );
}

export default App;