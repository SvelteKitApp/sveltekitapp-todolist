# SvelteKitApp "TODO List"

- [github.com/SvelteKitApp/sveltekitapp-todolist](https://github.com/SvelteKitApp/sveltekitapp-todolist)
- [sveltekitapp.github.io/sveltekitapp-todolist/](https://sveltekitapp.github.io/sveltekitapp-todolist/)

> Проект сгенерирован с помощью [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Порядок действий по созданию текущего приложения

- генерация структуры репозитория

```bash
# создание приложения в диреткории
$npm create svelte@latest sveltekitapp-todolist
$cd sveltekitapp-todolist
$npm i
```

## Подготовка к публикации через GitHub Page

- установка адаптера сборки в виде статических html+js+css

```bash
$npm i -D @sveltejs/adapter-static
```

- корректировка `svelte.config.js`

```diff
-import adapter from '@sveltejs/adapter-auto';
+import adapter from '@sveltejs/adapter-static';
```

- изменение параметров сборки для открытия приложения на хостинге github для текущего репозитория

```diff
-		adapter: adapter()
+		adapter: adapter(),
+    appDir: process.env.NODE_ENV === 'production' ? 'docs' : '_app',
+    paths: {
+      base: process.env.NODE_ENV === 'production' ? '/sveltekitapp-todolist' : '',
+  }
```

- создание `+layout.ts` для включения предварительной генерации страниц(ы) приложения

```bash
$echo 'export const prerender = true;' >> ./src/routes/+layout.ts
```

### Отключение `Jekyll`

- создать файл без содержания `.nojekyll`

```
$touch .nojekyll
```

### Подключение пакета `gh-pages`

- установка зависимости

```bash
$npm i -D gh-pages
```

- внесение команды запуска сборки для GitHub Page из локального окружения

```diff
"scripts": {
    "dev": "vite dev",
    "build": "vite build",
+    "gh-pages": "npm run build && npx gh-pages -d build",
    "preview": "vite preview",
```

- запуск публикации из локального окружения

```bash
$npm run gh-pages
```

## Разработка

- запуск

```bash
npm run dev
# запуск с открытием страницы в браузере
npm run dev -- --open
```

## Сборка

- запуск формирования публикуемого приложения

```bash
npm run build
```

Для проверки собранного для публикации кода доступен локальный предпросмотр `npm run preview`.

<div align="center">
<img title="DaisyUI" alt="DaisyUI" height=48 src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg"/>
</div
