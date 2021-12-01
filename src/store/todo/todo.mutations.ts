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
import {State, Todo, defaultTodo} from "./todo.module";
import {getTodoList, addTodo, updateTodo, deleteTodo} from "../../api/todo";

export const mutations = {
    [ADD_TODO]: (state: State, payload: any) => {
        state.count += payload
    },
    [SEND_GET_TODO_REQUEST]: (state: State) => {
        state.todoList = [];
        state.loading = true;
        state.errorMessage = '';
    },
    [GET_TODO_SUCCESS]: (state: State, payload: any) => {
        state.todoList = payload || [];
        state.loading = false;
        state.errorMessage = ''
    },
    [GET_TODO_ERROR]: (state: State, payload: any) => {
        state.todoList = [];
        state.loading = false;
        state.errorMessage = payload || '';
    },
    [SEND_ADD_TODO_REQUEST]: (state: State) => {
        state.loading = true;
    },
    [ADD_TODO_SUCCESS]: (state: State) => {
        //    Do something or nothing
    },
    [ADD_TODO_ERROR]: (state: State, payload: any) => {
        state.loading = false;
        state.errorMessage = payload || '';
    },
    [OPEN_ADD_MODAL]: (state: State, payload: Todo) => {
        state.drawer = true;
        state.editTodo = payload ? payload : Object.assign({}, defaultTodo)
    },
    [CLOSE_ADD_MODAL]: (state: State) => {
        state.drawer = false;
        state.editTodo = Object.assign({}, defaultTodo)
    }
};

export const actions = {
    [GET_TODO]: ({commit}: any) => {
        commit(SEND_GET_TODO_REQUEST);
        getTodoList()
            .then(({data}) => {
                commit(GET_TODO_SUCCESS, data.results)
            })
            .catch(({data}) => {
                commit(GET_TODO_SUCCESS, data.results)
            })
    },
    [ADD_TODO]: ({dispatch, commit}: any, payload: any) => {
        commit(SEND_ADD_TODO_REQUEST);
        addTodo(payload)
            .then(() => {
                commit(ADD_TODO_SUCCESS);
                commit(CLOSE_ADD_MODAL);
                setTimeout(() => {
                    dispatch(GET_TODO)
                }, 5000)
            })
            .catch(({data}) => {
                commit(ADD_TODO_ERROR, data.results)
            })
    },
    [EDIT_TODO]: ({dispatch, commit}: any, {id, todo}: any) => {
        commit(SEND_ADD_TODO_REQUEST);
        updateTodo(id, todo)
            .then(() => {
                commit(ADD_TODO_SUCCESS);
                commit(CLOSE_ADD_MODAL);
                setTimeout(() => {
                    dispatch(GET_TODO)
                }, 5000)
            })
            .catch(({data}) => {
                commit(ADD_TODO_ERROR, data.results)
            })
    },
    [DELETE_TODO]: ({dispatch, commit}: any, id: string) => {
        commit(SEND_ADD_TODO_REQUEST);
        deleteTodo(id)
            .then(() => {
                commit(ADD_TODO_SUCCESS);
                setTimeout(() => {
                    dispatch(GET_TODO)
                }, 5000)
            })
            .catch(({data}) => {
                commit(ADD_TODO_ERROR, data.results)
            })
    },
};
