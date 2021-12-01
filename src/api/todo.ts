import { request } from './index'
interface Todo {
    title: string,
    content: string,
    completed?: boolean
}

export const getTodoList = () => {
    return request.get('/todo');
};

export const addTodo = (todo: Todo) => {
    return request.post('/todo', todo);
};

export const deleteTodo = (id: string) => {
    return request.delete(`/todo/${id}`)
};

export const updateTodo = (id: string, todo: Todo) => {
    return request.put(`/todo/${id}`, todo)
};
