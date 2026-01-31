import { styled } from "@mui/material/styles";
import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";

export const Blog = () => {
  return (
    <PageLayout title="Блог" id={PAGES.BLOG}>
      <Text>Страница в разработке</Text>
    </PageLayout>
  );
};

const Text = styled("h1")({
  color: "#ffffff",
  margin: 12,
});
