import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    GET_TODO,
    GET_TODO_SUCCESS,
    GET_TODO_ERROR,
    SEND_GET_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_ERROR,
    SEND_ADD_TODO_REQUEST,
    OPEN_ADD_MODAL,
    CLOSE_ADD_MODAL
} from "./todo.types";
import {defaultTodo} from "./todo.module";
import {getTodoList, addTodo, updateTodo, deleteTodo} from "../../api/todo";

export const mutations = {
    [ADD_TODO]: (state: todoType.State, payload: any): void => {
        state.count += payload
    },
    [SEND_GET_TODO_REQUEST]: (state: todoType.State): void => {
        state.todoList = [];
        state.loading = true;
        state.errorMessage = '';
    },
    [GET_TODO_SUCCESS]: (state: todoType.State, payload: any): void => {
        state.todoList = payload || [];
        state.loading = false;
        state.errorMessage = ''
    },
    [GET_TODO_ERROR]: (state: todoType.State, payload: any): void => {
        state.todoList = [];
        state.loading = false;
        state.errorMessage = payload || '';
    },
    [SEND_ADD_TODO_REQUEST]: (state: todoType.State): void => {
        state.loading = true;
    },
    [ADD_TODO_SUCCESS]: (state: todoType.State): void => {
        //    Do something or nothing
    },
    [ADD_TODO_ERROR]: (state: todoType.State, payload: any): void => {
        state.loading = false;
        state.errorMessage = payload || '';
    },
    [OPEN_ADD_MODAL]: (state: todoType.State, payload: todoType.Todo): void => {
        state.drawer = true;
        state.editTodo = payload ? payload : Object.assign({}, defaultTodo)
    },
    [CLOSE_ADD_MODAL]: (state: todoType.State): void => {
        state.drawer = false;
        state.editTodo = Object.assign({}, defaultTodo)
    }
};

export const actions = {
    [GET_TODO]: ({commit}: any): void => {
        commit(SEND_GET_TODO_REQUEST);
        getTodoList()
            .then(({data}: any): void => {
                commit(GET_TODO_SUCCESS, data.results)
            })
            .catch(({data}: any): void => {
                commit(GET_TODO_SUCCESS, data.results)
            })
    },
    [ADD_TODO]: ({dispatch, commit}: any, payload: any): object => {
        commit(SEND_ADD_TODO_REQUEST);
        return new Promise<void>((resolve, reject): void => {
            addTodo(payload)
                .then((): void => {
                    commit(ADD_TODO_SUCCESS);
                    commit(CLOSE_ADD_MODAL);
                    setTimeout((): void => {
                        dispatch(GET_TODO);
                        resolve()
                    }, 5000)
                })
                .catch(({data}: any): void => {
                    commit(ADD_TODO_ERROR, data.results);
                    reject();
                })
        })
    },
    [EDIT_TODO]: ({dispatch, commit}: any, {id, todo}: any): object => {
        commit(SEND_ADD_TODO_REQUEST);
        return new Promise<void>((resolve, reject) => {
            updateTodo(id, todo)
                .then((): void => {
                    commit(ADD_TODO_SUCCESS);
                    commit(CLOSE_ADD_MODAL);
                    setTimeout((): void => {
                        dispatch(GET_TODO);
                        resolve()
                    }, 5000)
                })
                .catch(({data}: any): void => {
                    commit(ADD_TODO_ERROR, data.results);
                    reject()
                })
        })
    },
    [DELETE_TODO]: ({dispatch, commit}: any, id: string): object => {
        commit(SEND_ADD_TODO_REQUEST);
        return new Promise<void>((resolve, reject): void => {
            deleteTodo(id)
                .then((): void => {
                    commit(ADD_TODO_SUCCESS);
                    setTimeout((): void => {
                        dispatch(GET_TODO);
                        resolve();
                    }, 5000)
                })
                .catch(({data}: any): void => {
                    commit(ADD_TODO_ERROR, data.results);
                    reject();
                })
        })
    },
};
