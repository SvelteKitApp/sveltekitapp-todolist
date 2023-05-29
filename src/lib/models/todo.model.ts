/**
 * Модель данных для приложения
 */
export class Todo {
  title: string;
  checked = false;
  editing = false;

  constructor(input: Partial<Todo>) {
    this.title = input.title || '';
  }
}
