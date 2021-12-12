interface ITodo {
    id: string;
    title: string;
    desc: string;
    completed: boolean;
}

class Todo implements ITodo {
    id: string;
    title: string;
    desc: string;
    completed: boolean;

    constructor (id: string, title: string, desc: string, completed: boolean) {
      this.id = id
      this.title = title
      this.desc = desc
      this.completed = completed
    }
}

export {
  ITodo
}
export default Todo
