import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import { DrawerAppBar } from "./AppBar";
import { styleConstant } from "@/shared/config/styleConstant";
import { Home } from "./Home";
import { About } from "./About";
import { styled } from "@mui/material/styles";

export const Main = () => {
  return (
    <Root>
      <Container>
        <CssBaseline />
        <DrawerAppBar />
        <Box component="main" sx={{ p: 3, width: "100%" }}>
          <Toolbar />
          <Home />
          <About />
        </Box>
      </Container>
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  background: styleConstant.background.main,
  minHeight: "100vh",
  color: styleConstant.color.main,
  alignItems: "center",
  flexDirection: "column",
});

const Container = styled("div")({
  maxWidth: 1440,
});
