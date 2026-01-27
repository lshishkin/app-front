export interface IRouterMeta {
  name?: string;
  path: string;
  isShow: boolean;
  isCommon?: boolean;
  isAuth?: boolean;
  icon?: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  HomePage: {
    name: 'Главная',
    path: '/',
    isShow: true,
    isCommon: true,
  },
  NewArticlePage: {
    name: 'Новая статья',
    path: '/editor',
    isShow: true,
    isAuth: true,
    icon: 'ion-compose',
  },
  EditArticlePage: {
    name: 'Редактирование статьи',
    path: '/editor/:slug',
    isShow: false,
  },
  SettingPage: {
    name: 'Настройки',
    path: '/settings',
    isShow: true,
    isAuth: true,
    icon: 'ion-gear-a',
  },
  ArticlePage: {
    name: 'Статья',
    path: '/article/:slug',
    isShow: false,
  },
  ProfilePage: {
    name: 'Профиль',
    path: '/profile/:username/*',
    isShow: false,
  },
  SignInPage: {
    name: 'Войти',
    path: '/auth',
    isShow: true,
    isAuth: false,
  },
  SignUpPage: {
    name: 'Зарегистрироваться',
    path: '/register',
    isShow: true,
    isAuth: false,
  },
  NotFoundPage: {
    path: '/*',
    isShow: false,
  },
};

export default routerMeta;
