import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import UserRegistrationPage from './Pages/UserRegistrationPage';
import UserAuthorizationPage from './Pages/UserAuthorizationPage';
import UsersListPage from './Pages/UsersListPage';
import CompaniesListPage from './Pages/CompaniesListPage';
import CompanyProfilePage from './Pages/CompanyProfilePage';
import UserProfilerPage from "./Pages/UserProfilerPage";
import ModalWindow from "./Compponents/ModalWindow";

const App = () => {
  return (
    <Router>
      <div>
        <h1>React App with Mock Data</h1>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/register" element={<UserRegistrationPage />} />
          <Route path="/login" element={<UserAuthorizationPage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/users/:id" element={<UserProfilerPage />} />
          <Route path="/companies" element={<CompaniesListPage />} />
          <Route path="/companies/:id" element={<CompanyProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
