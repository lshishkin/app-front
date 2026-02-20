import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { experience } from "@/entities/experience";

export const ExperienceSection = () => {
  return (
    <Root id="experience">
      <Title>Мои опыт</Title>
      <ExperienceContainer>
        {experience.map((item) => (
          <ExperienceItem key={item.company}>
            <Name>{item.company}</Name>
            <Value>{item.role}</Value>
            <Value>{item.period}</Value>
            <Value>{item.description}</Value>
            <Value>
              <strong>Обязанности:</strong>
              <ul>
                {item.responsibilities.map((resp, index) => (
                  <ListItem key={index}>{resp}</ListItem>
                ))}
              </ul>
            </Value>
            {item.achievements && (
              <Value>
                <strong>Достижения:</strong>
                <ul>
                  {item.achievements.map((ach, index) => (
                    <ListItem key={index}>{ach}</ListItem>
                  ))}
                </ul>
              </Value>
            )}
            <Value>
              <strong>Стек технологий:</strong> {item.stack.join(", ")}
            </Value>
          </ExperienceItem>
        ))}
      </ExperienceContainer>
    </Root>
  );
};

const Root = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  alignItems: "center",
  flexDirection: "column",
}));

const ExperienceContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  gap: "2rem",
}));

const ExperienceItem = styled("div")(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
}));

const ListItem = styled("li")(() => ({
  marginLeft: "1.5rem",
}));

const Name = styled("p")(({ theme }) => ({
  fontSize: "2.2rem",
  color: styleConstant.color.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.4rem",
  },
}));

const Value = styled("p")(({ theme }) => ({
  fontSize: "1.5rem",
  color: styleConstant.color.gray,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
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
