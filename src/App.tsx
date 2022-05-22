
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './components';
import { Home, NotFound, SearchResult } from './pagination';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='search/:searchWord' element={<SearchResult />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
