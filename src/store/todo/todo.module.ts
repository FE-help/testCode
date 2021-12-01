import {Module} from 'vuex';
import {RootState} from "../interface";
import { mutations, actions } from './todo.mutations'

export interface State {
    todoList: Array<any>,
    count: number,
    loading: boolean,
    errorMessage: string
}

export const TodoModule: Module<State, RootState> = {
    // namespaced: true,
    state: () => ({
        todoList: [],
        count: 0,
        loading: false,
        errorMessage: ''
    }),
    getters: {
        completedTodo: (state: State) => {
            return state.todoList.length
        }
    },
    mutations: mutations,
    actions: actions
};
