// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardPage from "../pages/DashboardPage";
import PipelineBuilderPage from "../pages/PipelineBuilderPage";
import RunningPipelinePage from "../pages/RunningPipelinePage";
import DatabasePage from "../pages/DatabasePage";
import AdminPage from "../pages/AdminPage";
import Settings from "../pages/Settings";
import MainLayout from "../components/layout/MainLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* All routes are wrapped within MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/builder" element={<PipelineBuilderPage />} />
        <Route path="/running" element={<RunningPipelinePage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
