
import {  BrowserRouter ,Routes, Route  , HashRouter} from 'react-router-dom';
import QuoteGenerator from './pages/QuoteGenerator';
import './App.css';
import MarkdownPreview from './pages/MarkdownPreview';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MarkdownPreview />} />                         
            <Route path="/random-quote" element={<QuoteGenerator />} />
            <Route path="/markdown-live-previewer" element={<MarkdownPreview />} />
        </Routes>
    </BrowserRouter>
    <HashRouter>
        <Routes>
            <Route path="/markdown-live-previewer" element={<QuoteGenerator />} />
            <Route path="/random-quote" element={<MarkdownPreview />} />
        </Routes>
    </HashRouter>
</>
  );
}

export default App;