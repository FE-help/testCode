import { request } from './index'

export const getTodoList = (): any => {
    return request.get('/todo');
};

export const addTodo = (todo: todoType.Todo): any => {
    return request.post('/todo', todo);
};

export const deleteTodo = (id: string): any => {
    return request.delete(`/todo/${id}`)
};

export const updateTodo = (id: string, todo: todoType.Todo): any => {
    return request.put(`/todo/${id}`, todo)
};
