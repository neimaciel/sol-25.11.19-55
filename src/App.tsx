import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KanbanBoard from './components/KanbanBoard';
import Analytics from './pages/Analytics';
import Drivers from './pages/Drivers';
import DriverProfile from './pages/DriverProfile';
import NewDriver from './pages/NewDriver';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KanbanBoard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/drivers/new" element={<NewDriver />} />
        <Route path="/drivers/:id" element={<DriverProfile />} />
      </Routes>
    </BrowserRouter>
  );
}