<script lang="ts">
  import { Todo } from '$lib/models';

  let newTodoTitle = '';

  let todoList = [new Todo({ title: 'Добавить новый пункт в список' })];

  function addTodo(text: string) {
    const newItem = new Todo({ title: text });
    todoList.unshift(newItem);
    todoList = todoList;
    newTodoTitle = '';
  }

  function setEditMode(i: number, state: boolean) {
    todoList[i].editing = state;
  }

  let remoteTodo = (i: number) => {
    todoList.splice(i, 1);
    todoList = todoList; // NOTE:
  };
</script>

<div class="flex flex-col flex-auto content-center">
  <h1 class="text-4xl text-center py-4">СПИСОК ДЕЛ</h1>
  <div class="flex flex-col flex-auto items-center">
    <div class="card bg-base-100 shadow-xl w-3/4">
      <div class="card-body items-center text-center">
        <p class="card-title text-center">Добавить в список</p>

        <div class="flex flex-row flex-auto">
          <input
            class=" input input-primary p-1 px-4"
            name="title"
            placeholder="Назавание для дела..."
            bind:value={newTodoTitle}
          />
          <button
            class="btn btn-primary px-3"
            on:click={() => addTodo(newTodoTitle)}
            disabled={newTodoTitle.length < 1}>Добавить</button
          >
        </div>
      </div>
    </div>

    <!-- NOTE: отображение списка дел -->
    <div class="card bg-lime-300 w-3/4 mt-2">
      <div class="card-body lex flex-col flex-auto min-h-screen">
        {#each todoList as todo, i}
          <div class="flex flex-row py-1">
            <div class="px-2 flex flex-auto items-center">
              <input
                bind:checked={todo.checked}
                class="checkbox checkbox-info pr-2"
                type="checkbox"
              />
              {#if todo.editing}
                <input class="input input-info flex-auto p-2" bind:value={todo.title} />
              {:else}
                <span class="text-ellipsis whitespace-break-spaces"> {todo.title}</span>
              {/if}
            </div>
            <div class="flex flex-row pl-2 flex-grow-0">
              {#if todo.editing}
                <button class="btn btn-success px-1 m-1" on:click={() => setEditMode(i, false)}
                  >Сохранить</button
                >
              {:else}
                <button class="btn btn-success px-1 m-1" on:click={() => setEditMode(i, true)}
                  >Изменить</button
                >
              {/if}
              <button class="btn btn-warning px-1 m-1" on:click={() => remoteTodo(i)}
                >Удалить</button
              >
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
