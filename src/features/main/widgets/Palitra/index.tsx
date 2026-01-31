import { Item } from "./item";
import { HomePage } from "../../pages/home";
import { Blog } from "../../pages/blog";
import { Contacts } from "../../pages/contacts";
import { COLORS } from "../../lib/constant";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MobileMenu } from "./mobileMenu";
import { AboutMe } from "../../pages/aboutMe";

export const Components = {
  home: <HomePage />,
  blog: <Blog />,
  about_me: <AboutMe />,
  contacts: <Contacts />,
};

export const Palitra = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const colorList = isMobile
    ? [COLORS[0], ...COLORS.slice(8, COLORS.length)]
    : COLORS;

  return (
    <Container>
      {isMobile ? <MobileMenu /> : null}
      {colorList.map(({ color, id }) => (
        <Item background={color} key={id} id={id} />
      ))}
    </Container>
  );
};

const Container = styled("div")(() => ({
  maxWidth: "100vw",
  maxHeight: "100vh",
  display: "flex",
  alignItems: "flex-end",
  overflow: "hidden",
}));
