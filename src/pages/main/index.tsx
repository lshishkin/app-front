import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import {
  Header,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ContactSection,
  Footer,
} from "@/widgets";

export const MainPage = () => {
  return (
    <Root>
      <Container>
        <CssBaseline />
        <Header />
        <Box component="main" sx={{ p: { xs: 2, sm: 3 }, width: "100%" }}>
          <Toolbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
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
