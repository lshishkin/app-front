import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main";
import { PAGES } from "@/features/main/lib/constant";
import { BlogPage } from "@/pages/blog";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(PAGES).map((pageId) => {
          return (
            <Route
              key={pageId}
              path={pageId === PAGES.HOME ? "/" : `/${pageId}`}
              element={<MainPage />}
            />
          );
        })}

        <Route path="/blog-page" element={<BlogPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
