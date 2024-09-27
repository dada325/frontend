// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/MainRoutes"; // Import the routes component

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes /> {/* Render the routes */}
    </Router>
  );
};

export default App;
