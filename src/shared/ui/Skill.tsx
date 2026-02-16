import { styled } from "@mui/material/styles";
import { styleConstant } from "../config/styleConstant";

export const Skill = ({
  iconPath,
  name,
}: {
  iconPath: string;
  name: string;
}) => {
  return (
    <Root>
      <Image src={iconPath} alt={name} />
      <Text>{name}</Text>
    </Root>
  );
};

const Root = styled("a")(({ theme }) => ({
  textDecoration: "none",
  height: 200,
  width: 189,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: styleConstant.background.second,
  borderRadius: 10,
  justifyContent: "flex-end",
  boxShadow: styleConstant.boxShadow.main,
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
  [theme.breakpoints.down("sm")]: {
    width: 100,
    height: 120,
  },
}));

const Text = styled("div")(({ theme }) => ({
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 60,
  marginTop: 18,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 30,
    marginTop: 9,
    fontSize: 14,
  },
}));

const Image = styled("img")(({ theme }) => ({
  marginTop: 20,
  maxHeight: 80,
  maxWidth: 140,
  [theme.breakpoints.down("sm")]: {
    marginTop: 10,
    maxHeight: 40,
    maxWidth: 70,
  },
}));
