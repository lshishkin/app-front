import styled from "styled-components";
import { PAGES } from "../../lib/constant";
import { PageLayout } from "../../widgets/PageLayout";
import Typography from "@mui/material/Typography";

export const AboutUs = () => {
  return (
    <PageLayout title="Обо мне" id={PAGES.ABOUT_US}>
      <Container>
        <Image
          src="https://sun9-63.userapi.com/s/v1/ig2/hKGd_VuYejPBrFhM-bZhkGhsk8NjYe9frLsdYLRkZehFoG2c0XNpNB4CQbEPP2U7JjKal9VbQKmHFWL5sJMLpHT4.jpg?quality=95&as=32x71,48x107,72x160,108x240,160x356,240x533,360x800,480x1067,540x1200,640x1422,720x1600&from=bu&cs=720x0"
          alt="Леонид Шишкин"
        />

        <Typography mb={2}>
          Меня зовут Леонид Шишкин, я frontend-разработчик с более чем 6 годами
          коммерческого опыта в крупных проектах на <strong>React</strong>,{" "}
          <strong>TypeScript</strong> и <strong>JavaScript</strong>.
        </Typography>

        <Typography mb={2}>
          Мой основной стек — React и TypeScript. За годы работы я глубоко
          погрузился в экосистему современного фронтенда: работал с Redux / RTK
          Query, Jotai, TanStack Query, писал приложения на Next.js,
          интегрировал микрофронтенды через Module Federation, оптимизировал
          сборку и производительность. Также есть опыт работы с бэкендом
          (Node.js, Nest.js, REST API, WebSocket), что помогает лучше понимать
          систему целиком и эффективно взаимодействовать с backend-командами.
        </Typography>

        <Typography mb={2}>
          Последние 4 года я работал в Сбере над внутренней корпоративной
          платформой OneKIB — единым входом в аналитические сервисы блока
          корпоративно-инвестиционного бизнеса. В проекте с командой из ~24
          человек я разрабатывал ключевые интерфейсы: главную страницу,
          навигацию, персонализированные дашборды и сложные таблицы с
          фильтрацией, сортировкой и группировкой. Среди результатов — миграция
          части приложения с Redux + Redux-Saga на RTK Query (сокращение кода на
          40–50%), замена Webpack на RsBuild с ускорением сборки в 2–3 раза, а
          также оптимизация рендеринга больших таблиц, что заметно улучшило
          отзывчивость интерфейса.
        </Typography>

        <Typography mb={2}>
          Ранее я работал над интернет-магазином розничной сети Kari, где
          участвовал в разработке каталога, карточек товаров, корзины, checkout
          и личного кабинета пользователя. Также принимал участие в развитии UX,
          включая интеграцию Яндекс Карт для работы с адресами и точками
          самовывоза. Параллельно разрабатывал внутренний HR-портал Kari Job,
          где прошёл полный цикл — от реализации интерфейсов с нуля до
          рефакторинга и перевода классовых компонентов на хуки.
        </Typography>

        <Typography mb={2}>
          Мне близки чистый и поддерживаемый код, внимание к деталям и
          пользовательскому опыту, а также работа с архитектурой и
          производительностью. Английский — на уровне A2, продолжаю развивать.
          Python изучаю на базовом уровне для расширения кругозора и
          практических задач.
        </Typography>
        <Typography mb={2}>
          Ищу проекты, где можно работать с современным стеком, влиять на
          качество продукта и расти профессионально — как разработчик и как
          инженер.
        </Typography>
      </Container>
    </PageLayout>
  );
};

const Image = styled.img`
  float: left;
  width: 220px;
  height: auto;
  border-radius: 8px;
  margin: 0 25px 15px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  padding: 24px;
  font-size: 24px;
  color: #ffffff;
  max-height: -webkit-fill-available;
  overflow-y: auto;

  /* Firefox */
  scrollbar-width: none;

  /* IE / old Edge */
  -ms-overflow-style: none;

  /* Chrome / Safari */
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
