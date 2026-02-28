import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { about } from "@/entities/about";
import { CodeTyping3D } from "@/shared/ui/CodeTyping3D";

export const AboutSection = () => {
  return (
    <Root id="about">
      <Title>Обо мне</Title>
      <AboutContainer>
        <PhotoSide>
          <CodeTyping3D />
        </PhotoSide>

        <TextSide>
          <Description>{about.main}</Description>
          <Description>{about.outro}</Description>
        </TextSide>
      </AboutContainer>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  alignItems: "center",
    [theme.breakpoints.down("sm")]: {
    minHeight: "auto",
     marginBottom: "2rem",
  },
}));

const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 18,
  },
}));

const TextSide = styled("div")({
  flex: 1,
});
const PhotoSide = styled("div")({
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
});

const Description = styled("p")(({ theme }) => ({
  fontSize: "1.5rem",
  color: styleConstant.color.gray,
  marginTop: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
    marginTop: "1rem",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  color: styleConstant.color.second,
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    marginBottom: "1.5rem",
  },
}));
