import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";
import { HomeTitleText } from "../../assets/HomeTitleText";
import { LapTop } from "../../assets/Laptop";
import { motion } from "motion/react";
import { useAtom } from "jotai";
import { isHomeTitleAnimationAtom } from "../../jotai";
import { useEffect } from "react";

export const HomePage = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        <motion.div
          style={{ marginBottom: 60, marginLeft: 60 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: isHomeTitleAnimation ? 0 : 2,
          }}
        >
          <LapTop />
          <HomeTitleText />
        </motion.div>
      </div>
    </PageLayout>
  );
};


