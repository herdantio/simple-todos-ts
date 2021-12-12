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
    }

    @Mutation
    public removeTodo (todo: Todo) {
      this.TodoList.splice(this.TodoList.indexOf(todo), 1)
    }

    @Mutation
    public updateTodo (todo: Todo) {
      this.TodoList.splice(this.TodoList.indexOf(todo), 1, todo)
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
        new Todo('Task 1', false),
        new Todo('Task 2', false),
        new Todo('Task 3', false),
        new Todo('Task 4', false),
        new Todo('Task 5', false)
      ]
    }
}
