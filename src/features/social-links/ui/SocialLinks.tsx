import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import { styleConstant } from "@/shared/config/styleConstant";
import { contacts } from "@/entities";

const socialLinks = [
  {
    icon: <TelegramIcon />,
    link: `https://t.me/${contacts.telegram.replace("@", "")}`,
    title: "Telegram",
  },
  {
    icon: <AlternateEmailOutlinedIcon />,
    link: `mailto:${contacts.email}`,
    title: "Email",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/lshishkin/",
    title: "Instagram",
  },
];

export const SocialLinks = () => {
  return (
    <Root>
      {socialLinks.map((item) => (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.link}
          title={item.title}
        >
          {item.icon}
        </Link>
      ))}
    </Root>
  );
};

const Link = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 47,
  height: 47,
  borderRadius: 8,
  textDecoration: "none",
  color: styleConstant.color.second,
  background: styleConstant.background.second,
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
  },
});

const Root = styled("div")({
  display: "flex",
  gap: "1rem",
});
