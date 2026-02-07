import { styled, useTheme } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { CirclePhoto } from "@/shared/ui/CirclePhoto";
import { Button } from "@/shared/ui/Button";
import { ContactIcons } from "@/shared/ui/ContactIcons";
import useMediaQuery from "@mui/material/useMediaQuery";
import { profile } from "@/data/profile";

export const Home = () => {
  const theme = useTheme(); // Получаем текущую тему для доступа к breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Проверяем, меньше ли экран 'sm' (600px по умолчанию)

  return (
    <Root>
      <TextSide>
        <Greetings>Здравствуйте! Меня зовут</Greetings>
        <Name>
          <FirstName>{profile.firstName}</FirstName>{" "}
          <LastName>{profile.lastName}</LastName>
        </Name>
        <Profession>{profile.role}</Profession>
        <Description>{profile.tagline}</Description>
        <ButtonContainer>
          <Button variant="contained" size="large">
            Скачать резюме
          </Button>
          <Button variant="outlined" size="large">
            Написать мне
          </Button>
        </ButtonContainer>
        <ContactIcons />
      </TextSide>
      {!isMobile && (
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
  justifyContent: "flex-end",
});

const Greetings = styled("p")({
  color: styleConstant.color.gray,
  fontSize: "1.25rem",
  textTransform: "uppercase",
  fontWeight: 400,
});

const Name = styled("p")({
  fontSize: "4rem",
  fontWeight: 600,
});

const FirstName = styled("span")({
  color: styleConstant.color.second,
});

const LastName = styled("span")(({ theme }) => ({
  color: styleConstant.color.main,
  marginTop: "1rem",
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
