// src/components/PageLoader.js
import React, { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const PageLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Preloader />}
      <Outlet /> {/* Renders the child routes */}
    </>
  );
};

export default PageLoader;
