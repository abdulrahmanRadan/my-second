import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "ol/ol.css";
import Home from "./pages/Home";
import Users from "./user/pages/Users";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UpdatePlace from "./places/pages/UpdatePlace";
function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
          {/* Redirect to home page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
