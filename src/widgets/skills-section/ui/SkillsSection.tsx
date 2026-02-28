import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { skills } from "@/entities/skill";
import { Skill } from "@/shared/ui/Skill";

export const SkillsSection = () => {
  return (
    <Root id="skills">
      <Title>Мои навыки</Title>
      <ListContainer>
        {skills.map((skill) => (
          <Skill iconPath={skill.iconPath} name={skill.name} key={skill.name} />
        ))}
      </ListContainer>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
    minHeight: "auto",
     marginBottom: "2rem",
  },
}));

const ListContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "3.5rem",
  flexWrap: "wrap",
  [theme.breakpoints.down("md")]: {
    gap: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    gap: "1.5rem",
  },
}));

const Title = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  color: styleConstant.color.second,
  marginBottom: "4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    marginBottom: "2rem",
  },
}));
