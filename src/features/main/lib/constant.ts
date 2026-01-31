import { generateId } from "./utils";

export const PAGES = {
  HOME: "home",
  BLOG: "blog",
  ABOUT_ME: "about_me",
  CONTACTS: "contacts",
} as const;

export const PAGES_TITLE = {
  [PAGES.HOME]: "Главная",
  [PAGES.BLOG]: "Блог",
  [PAGES.ABOUT_ME]: "Обо мне",
  [PAGES.CONTACTS]: "Контакты",
};



export const COLORS = [
  {
    id: PAGES.HOME,
    color: "linear-gradient(120deg, #81d4fa 0%, #29b6f6 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #01579b 0%, #0277bd 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #4fc3f7 0%, #0288d1 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #03a9f4 0%, #01579b 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #29b6f6 0%, #039be5 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #0277bd 0%, #81d4fa 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #0288d1 0%, #4fc3f7 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #039be5 0%, #01579b 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #81d4fa 0%, #0288d1 100%)",
  },
  {
    id: generateId(),
    color: "linear-gradient(120deg, #03a9f4 0%, #0277bd 100%)",
  },
    {
    id: generateId(),
    color: "linear-gradient(120deg, #01579b 0%, #0277bd 100%)",
  },
  {
    id: PAGES.BLOG,
    color: "linear-gradient(120deg, #4fc3f7 0%, #01579b 100%)",
  },
  {
    id: PAGES.ABOUT_ME,
    color: "linear-gradient(120deg, #29b6f6 0%, #0277bd 100%)",
  },
  {
    id: PAGES.CONTACTS,
    color: "linear-gradient(120deg, #81d4fa 0%, #039be5 100%)",
  },
] as const;

