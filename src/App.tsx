import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import AuthPage from './pages/auth';
import TasksPage from './pages/tasks';
import TaskPage from './pages/task';

export interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/auth/:code" element={<AuthPage />} />
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/task/:number" element={<TaskPage />} />
            </Routes>
        </Router>
    );
}

export default App;