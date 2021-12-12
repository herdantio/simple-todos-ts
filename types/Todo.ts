const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

interface ITodo {
    id: string;
    title: string;
    desc: string;
    completed: boolean;
    createdAt: Date;
    deletedAt?: Date;
}

class Todo implements ITodo {
    id: string;
    title: string;
    desc: string;
    completed: boolean;
    createdAt: Date;
    deletedAt?: Date;

    constructor (title: string, desc: string, completed: boolean) {
      this.id = s4()
      this.title = title
      this.desc = desc
      this.completed = completed
      this.createdAt = new Date()
    }
}

export {
  ITodo
}
export default Todo
