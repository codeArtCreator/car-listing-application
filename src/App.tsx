import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

function App() {
    return (
        <Router>
            <div className="page-container">
                <SearchBar />
                <Routes>
                    <Route path="/" element={<CarList />} />
                    <Route path="/page/:page" element={<CarList />} />
                </Routes>
                <Pagination />
            </div>
        </Router>
    );
}

export default App;
