import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        {/* <Route path="/blog-page" element={<BlogPage />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
