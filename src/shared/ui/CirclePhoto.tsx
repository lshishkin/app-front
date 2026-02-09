import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styleConstant } from "../config/styleConstant";

export const CirclePhoto = ({
  src,
  size = 420,
}: {
  src: string;
  size?: number;
}) => {
  const theme = useTheme(); // Получаем текущую тему для доступа к breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Проверяем, меньше ли экран 'sm' (600px по умолчанию)
  return (
    <div
      style={{
        width: size / (isMobile ? 1.5 : 1),
        border: `12px solid ${styleConstant.background.second}`,
        borderRadius: "12px",
      }}
    >
      <img
        src={src}
        alt="Your photo"
        style={{
          width: "100%",
          height: "100%",
          filter: "grayscale(100%)",
        }}
      />
    </div>
  );
};
