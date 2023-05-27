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

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
