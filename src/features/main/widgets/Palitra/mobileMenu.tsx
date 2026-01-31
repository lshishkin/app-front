import { motion } from "motion/react";
import { PAGES, PAGES_TITLE } from "../../lib/constant";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const MobileMenu = memo(() => {
  const delay = Math.random() * (2.0 - 0.7) + 0.7;

  const navigate = useNavigate();
  const setPage = (pageId: string) => {
    navigate(pageId === PAGES.HOME ? "/" : `/${pageId}`);
  };

  return (
    <motion.div
      style={{
        height: "100vh",
        background: "linear-gradient(120deg, #03a9f4 0%, #01579b 100%)",
        transition: "flex 0.3s ease",
      }}
      animate={{ height: "100vh" }}
      initial={{ height: 0 }}
      transition={{
        delay,
      }}
    >
      {Object.values(PAGES).map((pageId) => (
        <Title
          onClick={() => {
            setPage(pageId);
          }}
        >
          {PAGES_TITLE[pageId]}
        </Title>
      ))}
    </motion.div>
  );
});

const Title = styled("p")(() => ({
  marginTop: 18,
  marginLeft: 12,
  marginRight: 12,
  writingMode: "vertical-rl",
  fontSize: 24,
  color: "white",
  textTransform: "uppercase",
  cursor: "pointer",
}));
