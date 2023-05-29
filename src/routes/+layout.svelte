<script>
  import { base } from '$app/paths';
  import '../app.postcss';
  let navMenu = [
    { title: 'Список дел', path: '/' },
    { title: 'О приложении', path: '/about' }
  ];
</script>

<header>
  <nav class="flex flex-col items-center">
    <ul class="flex flex-row">
      {#each navMenu as itemMenu}
        <li class="px-2 py-3">
          <a href="{base}{itemMenu.path}">{itemMenu.title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
<main class="flex flex-col flex-auto bg-orange-400">
  <slot />
</main>
<footer class="footer p-10 bg-neutral text-neutral-content">
  <a href="mailto:nikolay.gerzhan@yandex.ru">Отправить email автору</a>
</footer>
