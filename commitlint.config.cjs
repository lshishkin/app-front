module.exports = {
  extends: ['@commitlint/config-conventional'],
  // Опционально: свои правила, например, максимальная длина заголовка
  rules: {
    'header-max-length': [2, 'always', 100],
    'body-leading-blank': [2, 'always'],
  },
};