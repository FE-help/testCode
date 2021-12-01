import {Module} from 'vuex';
import {RootState} from "../interface";
import { mutations, actions } from './todo.mutations'

export interface Todo {
    title: string,
    content: string,
    id?: string
}

export interface State {
    todoList: Array<any>,
    count: number,
    loading: boolean,
    errorMessage: string,
    drawer: boolean,
    editTodo: Todo
}

export const defaultTodo = {
    title: '',
    content: '',
};

export const TodoModule: Module<State, RootState> = {
    namespaced: true,
    state: () => ({
        todoList: [],
        count: 0,
        loading: false,
        errorMessage: '',
        drawer: false,
        editTodo: Object.assign({}, defaultTodo),
    }),
    getters: {
        completedTodo: (state: State) => {
            return state.todoList.length
        }
    },
    mutations: mutations,
    actions: actions
};
