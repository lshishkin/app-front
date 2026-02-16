import { styled } from "@mui/material/styles";
import { Box, TextField, TextareaAutosize } from "@mui/material";
import { useState, useRef } from "react";
import { Button } from "@/shared/ui/Button";
import { styleConstant } from "@/shared/config/styleConstant";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile } from "@/data/profile";
import { contacts } from "@/data/contacts";
import emailjs from "@emailjs/browser";
import { ReCaptchaProvider, ReCaptcha } from "@wojtekmaj/react-recaptcha-v3";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
    const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
    const publicKey = import.meta.env.PUBLIC_KEY;
    try {
      // Здесь можно подключить API вызов
      emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          message: formData.message,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          "g-recaptcha-response": token,
        },
        { publicKey },
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };
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
              <span>Опыт работы в круной финтех компании</span>
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
              title="Telegram"
            >
              <TelegramIcon />
            </SocialLink>
            <SocialLink
              href={`mailto:${contacts.email}`}
              target="_blank"
              title="Email"
            >
              <AlternateEmailOutlinedIcon />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/lshishkin/"
              target="_blank"
              title="Instagram"
            >
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={contacts.github} target="_blank" title="GitHub">
              <GitHubIcon />
            </SocialLink>
          </SocialLinks>
        </LeftSide>

        <RightSide>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Имя</Label>
              <StyledTextField
                fullWidth
                placeholder="Ваше имя"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Электронная почта</Label>
              <StyledTextField
                fullWidth
                placeholder="your@email.com"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Номер телефона</Label>
              <StyledTextField
                fullWidth
                placeholder="+7 (999) 999-99-99"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Тема</Label>
              <StyledTextField
                fullWidth
                placeholder="Тема сообщения"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Сообщение</Label>
              <StyledTextarea
                placeholder="Напишите ваше сообщение..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                minRows={4}
                required
              />
            </FormGroup>

            <SubmitButton
              variant="contained"
              size="large"
              type="submit"
              disabled={loading || !token}
            >
              {loading ? "Отправляю..." : "Отправить сообщение"} 🚀
            </SubmitButton>
            <div
              style={{
                position: "relative",
              }}
            >
              <ReCaptchaProvider
                reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_KEY}
              >
                <ReCaptcha
                  onVerify={(v) => {
                    setToken(v);
                  }}
                />
              </ReCaptchaProvider>
              <div
                style={{
                  fontSize: "11px",
                  textAlign: "center",
                  color: "#777",
                  marginTop: "12px",
                  lineHeight: 1.4,
                }}
              >
                Эта форма защищена <strong>reCAPTCHA</strong> от Google.
                <br />
                Применяются{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#777", textDecoration: "underline" }}
                >
                  Политика конфиденциальности
                </a>{" "}
                и{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#777", textDecoration: "underline" }}
                >
                  Условия использования
                </a>
                .
              </div>
            </div>
            {success && (
              <SuccessMessage>Сообщение успешно отправлено!</SuccessMessage>
            )}
          </Form>
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

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
});

const FormGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const Label = styled("label")({
  color: styleConstant.color.main,
  fontSize: "0.875rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    color: styleConstant.color.main,
    backgroundColor: styleConstant.background.second,
    borderRadius: "0.5rem",

    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
    },

    "&:hover fieldset": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },

    "&.Mui-focused fieldset": {
      borderColor: styleConstant.color.second,
    },
  },

  "& .MuiOutlinedInput-input::placeholder": {
    color: "rgba(255, 255, 255, 0.4)",
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiOutlinedInput-root": {
      fontSize: "0.95rem",
    },
  },
}));

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  padding: "0.75rem",
  backgroundColor: styleConstant.background.second,
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  borderRadius: "0.5rem",
  color: styleConstant.color.main,
  fontFamily: "inherit",
  fontSize: "1rem",
  resize: "vertical",
  transition: "all 0.3s ease",

  "&::placeholder": {
    color: "rgba(255, 255, 255, 0.4)",
  },

  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.2)",
  },

  "&:focus": {
    outline: "none",
    borderColor: styleConstant.color.second,
    boxShadow: `0 0 0 3px rgba(255, 1, 79, 0.1)`,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
    padding: "0.6rem",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: "1rem",
  padding: "0.75rem 2rem",
  fontSize: "1rem",
  fontWeight: 600,
  "&:disabled": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "rgba(255, 255, 255, 0.4)",
    cursor: "not-allowed",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0.6rem 1.5rem",
    fontSize: "0.9rem",
  },
}));

const SuccessMessage = styled("p")({
  color: "#10b981",
  textAlign: "center",
  fontSize: "0.875rem",
  padding: "0.75rem",
  backgroundColor: "rgba(16, 185, 129, 0.1)",
  borderRadius: "0.5rem",
});
