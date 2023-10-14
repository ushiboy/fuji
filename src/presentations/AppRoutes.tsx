import { Route, Routes } from "react-router";

import { HomePage, AboutPage } from "./pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
