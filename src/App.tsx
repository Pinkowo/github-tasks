import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import AuthPage from './pages/auth';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/auth/:code" element={<AuthPage />} />
            </Routes>
        </Router>
    );
}

export default App;