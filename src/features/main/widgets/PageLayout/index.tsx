import { useTheme } from "@mui/material/styles";
import { useGetPage } from "../../lib/hooks";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../lib/constant";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { JSX } from "react";
import * as S from "./styles";



export const PageLayout = ({
  title,
  children,
  id,
}: {
  title: string;
  children: JSX.Element;
  id: string;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // меньше чем sm
  const page = useGetPage();
  const navigate = useNavigate();
  const setPage = (pageId: string) => {
    navigate(pageId === PAGES.HOME ? "/" : `/${pageId}`);
  };
  return (
    <S.Root>
      <S.TitleContainer>
        {isMobile ? null : (
          <S.Title onClick={() => setPage(id)}>{title}</S.Title>
        )}
      </S.TitleContainer>
      <S.PageContainer isMobile={isMobile}>
        {page === id ? children : null}
      </S.PageContainer>
    </S.Root>
  );
};
