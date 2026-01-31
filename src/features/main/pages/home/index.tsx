import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";
import { HomeTitleText } from "../../assets/HomeTitleText";
import { LapTop } from "../../assets/Laptop";
import { motion } from "motion/react";
import { useAtom } from "jotai";
import { isHomeTitleAnimationAtom } from "../../jotai";
import { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Shishkin } from "../../assets/Shishkin";
import { Leonid } from "../../assets/Leonid";
import { Frontend } from "../../assets/Frontend";
import { Developer } from "../../assets/Developer";

export const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isHomeTitleAnimation, setIsHomeTitleAnimation] = useAtom(
    isHomeTitleAnimationAtom,
  );
  useEffect(() => {
    return () => {
      setIsHomeTitleAnimation(true);
    };
  }, []);
  return (
    <PageLayout title="Главная" id={PAGES.HOME}>
      <Root>
        <motion.div
          style={{ marginTop: "50%", marginLeft: 60 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: isHomeTitleAnimation ? 0 : 2,
          }}
        >
          <LapTop isMobile={isMobile} />
          <div>
            <TitleContainer isMobile={isMobile}>
              <Shishkin />
              <Leonid />
            </TitleContainer>
            <TitleContainer isMobile={isMobile}>
              <Frontend />
              <Developer />
            </TitleContainer>
          </div>
        </motion.div>
      </Root>
    </PageLayout>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
});

const TitleContainer = styled("div")(({ isMobile }: { isMobile: boolean }) => ({
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  gap: 12,
  marginBottom: 12,
  width: 300,
}));
