import { styled, useTheme } from "@mui/material/styles";
import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";
import useMediaQuery from "@mui/material/useMediaQuery";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";

export const Contacts = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <PageLayout title="Контакты" id={PAGES.CONTACTS}>
      <Container isMobile={isMobile}>
        <Item>
          <PhoneIcon /> <Link href="tel:+79505435739">+7 (950) 543-57-39</Link>
        </Item>
        <Item>
          <EmailIcon />
          <Link href="mailto:lshishkin150586@gmail.com">
            lshishkin150586@gmail.com
          </Link>
        </Item>
        <Item>
          <TelegramIcon />
          <Link href="https://t.me/kukumber_wow">@kukumber_wow</Link>
        </Item>
        <Item>
          <GitHubIcon />
          <Link href="https://github.com/lshishkin">
            https://github.com/lshishkin
          </Link>
        </Item>
      </Container>
    </PageLayout>
  );
};

const Link = styled("a")({
  color: "inherit",
  textDecoration: "none",
});

const Item = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

const Container = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  fontSize: isMobile ? 17 : 24,
  fontWeight: "bold",
  padding: 24,
  color: "#000000",
  fontStyle: "normal",
}));
