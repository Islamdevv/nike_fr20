import React from "react";
import Admin from "../components/admin/Admin";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

const MainRoutes = () => {
  const PUBLIC = [
    {
      link: "/admin",
      element: <Admin />,
      id: 1,
    },
    {
      link: "/",
      element: <MainPage />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
