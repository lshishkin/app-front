import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import { DrawerAppBar } from "./AppBar";
import { styleConstant } from "@/shared/config/styleConstant";
import { Home } from "./Home";
import { About } from "./About";

export const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: styleConstant.background.main,
        minHeight: "100vh",
        color: styleConstant.color.main,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
        }}
      >
        <CssBaseline />
        <DrawerAppBar />
        <Box component="main" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Home />
          <About />
        </Box>
      </div>
    </Box>
  );
};
