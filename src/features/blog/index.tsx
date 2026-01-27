
import Router from "./Router";
import UserContextProvider from "./contexts/UserContextProvider";

export const BlogPage = () => {
  return (
    <div className="App">
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </div>
  );
};
