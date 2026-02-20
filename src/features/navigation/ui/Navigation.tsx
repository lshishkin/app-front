import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styleConstant } from "@/shared/config/styleConstant";
import { Link } from "react-scroll";

const drawerWidth = 240;
const navItems = [
  { name: "home", title: "Главная" },
  { name: "about", title: "Обо мне" },
  { name: "skills", title: "Навыки" },
  { name: "experience", title: "Опыт" },
  { name: "contacts", title: "Контакты" },
];

export const Navigation = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        МUI
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ name, title }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={name} smooth={true} duration={500} offset={-70}>
                <ListItemText primary={title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = document.body;

  return (
    <>
      <AppBar
        component="nav"
        style={{
          background: styleConstant.background.main,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                fontFamily: "Pacifico",
                fontSize: "2rem",
              },
            }}
          >
            <Link
              to={"home"}
              smooth={true}
              duration={500}
              offset={-70}
              style={{
                textDecoration: "none",
                color: "inherit",
                fontFamily: "Pacifico",
                fontSize: "2rem",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  color: styleConstant.color.second,
                  fontFamily: "Pacifico",
                  fontStyle: "italic",
                }}
              >
                Л
              </span>
              еонид{" "}
              <span
                style={{
                  color: styleConstant.color.second,
                  fontFamily: "Pacifico",
                  fontStyle: "italic",
                }}
              >
                Ш
              </span>
              ишкин
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ name, title }) => (
              <Button key={name} sx={{ color: "#fff" }}>
                <Link to={name} smooth={true} duration={500} offset={-70}>
                  {title}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
