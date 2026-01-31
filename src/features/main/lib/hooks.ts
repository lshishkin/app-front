import { useLocation } from "react-router-dom";

export const useGetPage = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return "home";
  return pathname.split("/")?.[1] || "home";
};
