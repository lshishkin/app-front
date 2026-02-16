# 📋 SEO Configuration Guide

SEO метаданные находятся в файле: `src/index.html`

## 🔄 Как обновить SEO данные

Откройте файл `src/index.html` и обновите:

### 1. **Основные метатеги** (в разделе `<head>`)

- `<title>` - название страницы (видно в поисковых результатах)
- `description` content - описание (155-160 символов оптимально)
- `keywords` content - ключевые слова (5-10 слов через запятую)
- `author` content - имя автора

### 2. **Open Graph теги** (для соцсетей)

- `og:title` - название для соцсетей
- `og:description` - описание для соцсетей
- `og:image` content - путь к изображению (1200x630px)
- **Важно:** Убедитесь, что og:image находится в `/public/og-image.png`

### 4. **JSON-LD Schemas**

Два скрипта в формате JSON-LD:

#### Person Schema
```json
{
  "@type": "Person",
  "name": "Леонид Шишкин",
  "jobTitle": "фронтенд разработчик",
  "url": "https://shishkin.site",
  "knowsAbout": ["React", "TypeScript"]
}
```

#### WebSite Schema
```json
{
  "@type": "WebSite",
  "url": "https://shishkin.site",
  "name": "Леонид Шишкин",
  "description": "Frontend-разработчик с 6+ годами опыта в React и TypeScript. Корпоративные платформы, микрофронтенды, производительность."
}
```

### 5. **Canonical URL**
```html
<link rel="canonical" href="https://your-actual-domain.com" />
```

## 📝 Пример обновления

**Было:**
```html
<meta name="description" content="Frontend-разработчик" />
<meta property="og:title" content="Old Title" />
```

**Стало:**
```html
<meta name="description" content="Frontend-разработчик с новым описанием" />
<meta property="og:title" content="New Title" />
```

## 🖼️ Подготовка og-image

1. Размер: **1200x630px**
2. Формат: PNG, JPG
3. Поместить в: `/public/og-image.png`
4. Содержание: ваше имя, профессия, фотография

## ✅ Проверка

После изменений:
1. Выполните `npm run build`
2. Проверьте `dist/index.html` в браузере (F12 → Elements)
3. Убедитесь, что мета-теги на месте

## 🚀 Развертывание

```bash
npm run build
# Затем загрузите /dist на хостинг
```

## 📊 Инструменты проверки

- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

**Все SEO данные теперь в одном файле `src/index.html` - легко обновлять и поддерживать!**
