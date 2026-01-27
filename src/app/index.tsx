import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main";
import { BlogPage } from "@/features/blog";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
