import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import { DrawerAppBar } from "./AppBar";
import { styleConstant } from "@/shared/config/styleConstant";
import { Home } from "./Home";
import { About } from "./About";
import { styled } from "@mui/material/styles";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <Root>
      <Container>
        <CssBaseline />
        <DrawerAppBar />
        <Box component="main" sx={{ p: { xs: 2, sm: 3 }, width: "100%" }}>
          <Toolbar />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
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

const Container = styled("div")(({ theme }) => ({
  maxWidth: 1440,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "0 1rem",
  },
}));
