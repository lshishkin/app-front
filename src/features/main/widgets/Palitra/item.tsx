import { motion } from "motion/react";
import { PAGES } from "../../lib/constant";
import { memo, useMemo } from "react";
import { Components } from ".";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useGetPage } from "../../lib/hooks";

export const Item = ({
  background,
  id,
}: {
  background: string;
  id: string;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // меньше чем sm
  const page = useGetPage();
  const delay = Math.random() * (2.0 - 0.7) + 0.7;
  const isNoPage =
    id !== PAGES.HOME &&
    id !== PAGES.BLOG &&
    id !== PAGES.ABOUT_ME &&
    id !== PAGES.CONTACTS;
  const flexGrow = () => {
    if (isMobile) {
      console.log(page, id);
      return page === id || page === PAGES.HOME ? 1 : 0;
    } else {
      if (isNoPage && page !== PAGES.HOME) {
        return 0;
      } else if (page === id && id !== PAGES.HOME) {
        return 18;
      }
      return 1;
    }
  };
  return (
    <motion.div
      style={{
        flexGrow: flexGrow(),
        height: "100vh",
        background: `${
          page === id && id !== PAGES.HOME
            ? "white"
            : background
        }`,
        transition: "flex 0.3s ease",
      }}
      animate={{ height: "100vh" }}
      initial={{ height: 0 }}
      transition={{
        delay,
      }}
    >
      {isNoPage ? null : Components[id]}
    </motion.div>
  );
};
