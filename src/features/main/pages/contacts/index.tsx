import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";

export const Contacts = () => {
  return (
    <PageLayout title="Контакты" id={PAGES.CONTACTS}>
      <address
        style={{
          fontSize: 24,
          fontWeight: "bold",
          padding: 24,
          color: "#ffffff",
          fontStyle: "normal", // чтобы не было italic
        }}
      >
        <p>
          📞{" "}
          <a
            href="tel:+79505435739"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            +7 (950) 543-57-39
          </a>
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:lshishkin150586@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            lshishkin150586@gmail.com
          </a>
        </p>
        <p>
          Telegram:{" "}
          <a
            href="https://t.me/kukumber_wow"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            @kukumber_wow
          </a>
        </p>
        <p>
          <a
            href="https://github.com/lshishkin"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            https://github.com/lshishkin
          </a>
        </p>
      </address>
    </PageLayout>
  );
};
