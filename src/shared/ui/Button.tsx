import { styled } from "@mui/material/styles";
import MUIButton, { type ButtonProps } from "@mui/material/Button";
import { styleConstant } from "../config/styleConstant";

export const Button = styled(MUIButton)<ButtonProps>(({ variant }) => ({
  textTransform: "none",
  borderRadius: 8,

  ...(variant === "contained" && {
    backgroundColor: styleConstant.color.second,
    color: styleConstant.color.main,

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }),

  ...(variant === "outlined" && {
    borderColor: styleConstant.color.second,
    color: styleConstant.color.second,

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  }),
}));
