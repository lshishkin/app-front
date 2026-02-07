import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import { styled } from "@mui/material/styles";
import { styleConstant } from "../config/styleConstant";

const list = [
  {
    icon: <TelegramIcon />,
    link: "https://t.me/kukumber_wow_",
  },
  {
    icon: <AlternateEmailOutlinedIcon />,
    link: "mailto:lshishkin150586@gmail.com",
  },
  {
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/lshishkin/",
  },
];

export const ContactIcons = () => {
  return (
    <Root>
      {list.map((item) => (
        <Link href={item.link} target="_blank" key={item.link}>
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

const Root = styled("a")({
  display: "flex",
  gap: "1rem",
});
