import GlobalStyles from "@mui/material/GlobalStyles";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./styles/external.css";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <GlobalStyles
        styles={(theme) => ({
          html: {
            fontSize: "100%",
            [theme.breakpoints.down("sm")]: {
              fontSize: "66.666%", // /1.5
            },
          },
        })}
      />
      <App />
    </React.StrictMode>,
  );
}
