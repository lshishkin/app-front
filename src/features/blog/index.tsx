import { QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import UserContextProvider from "./contexts/UserContextProvider";
import queryClient from "./queries/queryClient";

export const Blog = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
      </QueryClientProvider>
    </div>
  );
};
