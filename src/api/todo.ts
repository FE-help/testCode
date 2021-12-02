import { request } from './index'

export const getTodoList = () => {
    return request.get('/todo');
};

export const addTodo = (todo: todoType.Todo) => {
    return request.post('/todo', todo);
};

export const deleteTodo = (id: string) => {
    return request.delete(`/todo/${id}`)
};

export const updateTodo = (id: string, todo: todoType.Todo) => {
    return request.put(`/todo/${id}`, todo)
};
