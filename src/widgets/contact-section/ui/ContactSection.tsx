import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { ContactForm } from "@/features/contact-form";
import { styleConstant } from "@/shared/config/styleConstant";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile, contacts } from "@/entities";

export const ContactSection = () => {
  return (
    <Root id="contacts">
      <Container>
        <LeftSide>
          <SectionTitle>Связь со мной</SectionTitle>
          <MainTitle>
            Давайте обсудим <Highlight>Наше сотрудничество</Highlight>
          </MainTitle>
          <Description>
            Обсудите проект или просто хотите поздороваться? Свяжитесь со мной
            по электронной почте или по телефону.
          </Description>

          <Features>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>{profile.experienceYears}+ лет опыта</span>
            </FeatureItem>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>Опыт работы в крупной финтех компании</span>
            </FeatureItem>
            <FeatureItem>
              <CheckIcon>✓</CheckIcon>
              <span>
                Большой опыт в разработке и поддержке корпоративных решений
              </span>
            </FeatureItem>
          </Features>

          <SocialLinks>
            <SocialLink
              href={`https://t.me/${contacts.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
            >
              <TelegramIcon />
            </SocialLink>
            <SocialLink
              href={`mailto:${contacts.email}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <AlternateEmailOutlinedIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/lshishkin/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink
              href={contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </SocialLink>
          </SocialLinks>
        </LeftSide>

        <RightSide>
          <ContactForm />
        </RightSide>
      </Container>
    </Root>
  );
};

const Root = styled("section")({
  padding: "4rem 0",
  width: "100%",
});

const Container = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4rem",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
}));

const LeftSide = styled("div")({});

const RightSide = styled("div")({});

const SectionTitle = styled("p")({
  color: styleConstant.color.gray,
  fontSize: "0.875rem",
  textTransform: "uppercase",
  fontWeight: 600,
  letterSpacing: "0.15em",
  marginBottom: "0.5rem",
});

const MainTitle = styled("h2")(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: "1.5rem",
  color: styleConstant.color.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.75rem",
    marginBottom: "1rem",
  },
}));

const Highlight = styled("span")({
  color: styleConstant.color.second,
});

const Description = styled("p")(({ theme }) => ({
  color: styleConstant.color.gray,
  fontSize: "1.125rem",
  lineHeight: 1.6,
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    marginBottom: "1.5rem",
  },
}));

const Features = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginBottom: "2.5rem",
});

const FeatureItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  color: styleConstant.color.main,
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    gap: "0.5rem",
  },
}));

const CheckIcon = styled("span")({
  color: styleConstant.color.second,
  fontWeight: "bold",
  fontSize: "1.25rem",
  flexShrink: 0,
});

const SocialLinks = styled("div")({
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",
});

const SocialLink = styled("a")(({ theme }) => ({
  width: "3rem",
  height: "3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  color: styleConstant.color.second,
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontSize: "1.25rem",
  background: styleConstant.background.second,

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "2.5rem",
    height: "2.5rem",
    fontSize: "1rem",
  },
}));
