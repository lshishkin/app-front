import { useState } from "react";
import { Box, TextField, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Button } from "@/shared/ui/Button";
import { styleConstant } from "@/shared/config/styleConstant";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { profile, contacts } from "@/entities";
import emailjs from "@emailjs/browser";
import { ReCaptchaProvider, ReCaptcha } from "@wojtekmaj/react-recaptcha-v3";

export const ContactForm = () => {
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

      <div style={{ position: "relative" }}>
        <ReCaptchaProvider reCaptchaKey={import.meta.env.PUBLIC_RECAPTCHA_KEY}>
          <ReCaptcha
            onVerify={(v) => {
              setToken(v);
            }}
          />
        </ReCaptchaProvider>
        <RecaptchaDisclaimer>
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
        </RecaptchaDisclaimer>
      </div>

      {success && <SuccessMessage>Сообщение успешно отправлено!</SuccessMessage>}
    </Form>
  );
};

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

const RecaptchaDisclaimer = styled("div")({
  fontSize: "11px",
  textAlign: "center",
  color: "#777",
  marginTop: "12px",
  lineHeight: 1.4,
});
