import { styled, useTheme } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import useMediaQuery from "@mui/material/useMediaQuery";
import { about } from "@/data/about";
import { CodeTyping3D } from "@/shared/ui/CodeTyping3D";



export const About = () => {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Root>
      {!isMobile && (
        <PhotoSide>
          <CodeTyping3D />
        </PhotoSide>
      )}
      <TextSide>
        <Title>Обо мне</Title>
        <Description>{about.main}</Description>
        <Description>{about.outro}</Description>
      </TextSide>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "calc(100vh - 112px)",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
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

const Title = styled("p")({
  color: styleConstant.color.gray,
  fontSize: "1.25rem",
});

const SubTitle = styled("p")({
  fontSize: "2.5rem",
});

const ColorSubTitle = styled("span")({
  color: styleConstant.color.second,
});

const MainSubTitle = styled("span")(({ theme }) => ({
  color: styleConstant.color.main,
}));

const Profession = styled("p")(({ theme }) => ({
  color: styleConstant.color.gray,
  marginTop: "2.25rem",
  fontSize: "1.5rem",
  fontWeight: 400,
}));

const Description = styled("p")({
  color: styleConstant.color.main,
  marginTop: "1.5rem",
  fontSize: "1.25rem",
  fontWeight: 400,
});

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "2rem",
  gap: 18,
  marginBottom: "3rem",
}));
