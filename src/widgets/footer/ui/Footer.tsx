import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { profile } from "@/entities/profile";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Root>
      <Container>
        <ContentWrapper>
          <LeftSection>
            <Copyright>
              Copyright ©{currentYear},{" "}
              <HighlightText>{profile.name}</HighlightText>. Все права защищены
            </Copyright>
          </LeftSection>

          <RightSection>
            <NavLink href="#about">О мне</NavLink>
            <NavLink href="#skills">Навыки</NavLink>
            <NavLink href="#experience">Опыт</NavLink>
            <NavLink href="#contacts">Контакты</NavLink>
          </RightSection>
        </ContentWrapper>

        <BackToTop href="#top">
          <ArrowIcon>⬆</ArrowIcon>
        </BackToTop>
      </Container>
    </Root>
  );
};

const Root = styled("footer")({
  marginTop: "4rem",
  paddingTop: "2rem",
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  backgroundColor: styleConstant.background.main,
  color: styleConstant.color.main,
});

const Container = styled("div")(({ theme }) => ({
  padding: "2rem 3rem",
  maxWidth: 1440,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1.5rem",
    textAlign: "center",
    padding: "2rem 1rem",
  },
}));

const ContentWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  width: "100%",
  gap: "2rem",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1.5rem",
  },
}));

const LeftSection = styled("div")({
  flex: 1,
});

const RightSection = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flex: 1,
  justifyContent: "flex-end",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    gap: "1rem",
    flexWrap: "wrap",
  },
}));

const Copyright = styled("p")(({ theme }) => ({
  color: styleConstant.color.gray,
  fontSize: "0.875rem",
  margin: 0,
  lineHeight: 1.6,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const HighlightText = styled("span")({
  color: styleConstant.color.second,
  fontWeight: 600,
});

const NavLink = styled("a")(({ theme }) => ({
  color: styleConstant.color.gray,
  textDecoration: "none",
  fontSize: "0.875rem",
  transition: "color 0.3s ease",
  fontWeight: 500,

  "&:hover": {
    color: styleConstant.color.second,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const BackToTop = styled("a")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  backgroundColor: styleConstant.background.second,
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  color: styleConstant.color.second,
  textDecoration: "none",
  transition: "all 0.3s ease",
  flexShrink: 0,

  "&:hover": {
    backgroundColor: styleConstant.color.second,
    color: styleConstant.background.main,
    transform: "translateY(-3px)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "2rem",
    height: "2rem",
  },
}));

const ArrowIcon = styled("span")({
  fontSize: "1.25rem",
});
