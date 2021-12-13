import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import Todo from '../types/Todo'

@Module({
  name: 'todos',
  stateFactory: true,
  namespaced: true
})
export default class TodosModule extends VuexModule {
    public TodoList: Todo[] = []

    @Mutation
    public addTodo (todo: Todo) {
      this.TodoList.push(todo)
      console.log(this.TodoList.length)
    }

    @Mutation
    public removeTodo (todo: Todo) {
      this.TodoList = [...this.TodoList.filter(el => el.id !== todo.id)]
    }

    @Mutation
    public updateTodoCompleted (todo: Todo) {
      const foundTodo = this.TodoList.find(el => el.id === todo.id)
      if (foundTodo) { foundTodo.completed = todo.completed }
    }

    @Mutation
    public updateTodoTitle (todo: Todo) {
      const foundTodo = this.TodoList.find(el => el.id === todo.id)
      if (foundTodo) { foundTodo.title = todo.title }
    }

    @Mutation
    public clearTodos () {
      this.TodoList = []
    }

    @Mutation
    public setTodos (todos: Todo[]) {
      this.TodoList = todos
    }

    // For Mock Data
    @Mutation
    public initTodos () {
      this.TodoList = [
        new Todo('Task 1', true),
        new Todo('Task 2', false),
        new Todo('Task 3', false),
        new Todo('Task 4', false),
        new Todo('Task 5', false)
      ]
    }
}
