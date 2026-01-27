import { motion } from "motion/react";
import { PAGES } from "../../lib/constant";
import { memo, type Dispatch } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../../jotai";
import { Components } from ".";

export const Item = memo(
  ({ background, id }: { background: string; id: string }) => {
    const [page, setPage] = useAtom(pageAtom);
    const delay = Math.random() * (2.0 - 0.7) + 0.7;
    const isNoPage =
      id !== PAGES.HOME &&
      id !== PAGES.BLOG &&
      id !== PAGES.ABOUT_US &&
      id !== PAGES.CONTACTS;
    return (
      <motion.div
        style={{
          flexGrow:
            isNoPage && page !== PAGES.HOME
              ? 0
              : page === id && id !== PAGES.HOME
                ? 18
                : 1,
          height: "100vh",
          background,
          transition: "flex 0.3s ease",
        }}
        animate={{ height: "100vh" }}
        initial={{ height: 0 }}
        transition={{
          delay,
        }}
        onClick={() => {
          if (
            id === PAGES.HOME ||
            id === PAGES.BLOG ||
            id === PAGES.ABOUT_US ||
            id === PAGES.CONTACTS
          )
            setPage(id);
        }}
      >
        {isNoPage ? null : Components[id]}
      </motion.div>
    );
  },
);
