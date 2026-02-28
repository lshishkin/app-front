import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { styleConstant } from "@/shared/config/styleConstant";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import { Button } from "@/shared/ui/Button";
import { SocialLinks } from "@/features/social-links";
import { profile } from "@/entities/profile";
import { Link } from "react-scroll";

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root id="home">
      <TextSide>
        <Greetings>Здравствуйте! Меня зовут</Greetings>
        <Name>
          <FirstName>{profile.firstName}</FirstName>{" "}
          <LastName>{profile.lastName}</LastName>
        </Name>
        <Profession>{profile.role}</Profession>
        <Description>{profile.tagline}</Description>
        {isMobile ? (
          <PhotoMobileWrapper>
            <CirclePhoto src={"/man_1.png"} />
          </PhotoMobileWrapper>
        ) : null}
        <ButtonContainer>
          <Button variant="contained" size="large">
            <a
              href={"/resume.pdf"}
              download
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Скачать резюме
            </a>
          </Button>
          <Button variant="outlined" size="large">
            <Link
              to={"contacts"}
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              Написать мне
            </Link>
          </Button>
        </ButtonContainer>

        <SocialLinks />
      </TextSide>
      {isMobile ? null : (
        <PhotoSide>
          <CirclePhoto src={"/man_1.png"} />
        </PhotoSide>
      )}
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "100vh",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
     marginBottom: "2rem",
     minHeight: "calc(100vh - 100px)",
  },
}));

const TextSide = styled("div")({
  flex: 1,
});

const PhotoSide = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
});

const PhotoMobileWrapper = styled("div")({
  marginTop: "1rem",
});

const Greetings = styled("p")(({ theme }) => ({
  color: styleConstant.color.gray,
  fontSize: "1.25rem",
  textTransform: "uppercase",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

const Name = styled("p")(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const FirstName = styled("span")({
  color: styleConstant.color.second,
});

const LastName = styled("span")({
  color: styleConstant.color.main,
  marginTop: "1rem",
});

const Profession = styled("p")(({ theme }) => ({
  color: styleConstant.color.gray,
  marginTop: "2.25rem",
  fontSize: "1.5rem",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginTop: "1rem",
  },
}));

const Description = styled("p")(({ theme }) => ({
  color: styleConstant.color.main,
  marginTop: "1.5rem",
  fontSize: "1.25rem",
  fontWeight: 400,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    marginTop: "1rem",
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "2rem",
  gap: 18,
  marginBottom: "3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "0.75rem",
    marginTop: "1.5rem",
    marginBottom: "2rem",
  },
}));
