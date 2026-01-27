import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";

export const Blog = () => {
  return (
    <PageLayout title="Блог" id={PAGES.BLOG}>
      <h1 style={{ color: "#ffffff" }}>Страница в разработке</h1>
    </PageLayout>
  );
};
