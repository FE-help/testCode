declare namespace todoType {
    interface Todo {
        title: string,
        content: string,
        id?: string,
        completed?: boolean
    }
    interface State {
        todoList: Array<any>,
        count: number,
        loading: boolean,
        errorMessage: string,
        drawer: boolean,
        editTodo: Todo
    }
}
