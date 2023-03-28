import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Router basename={process.env.GITHUB_URL}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;