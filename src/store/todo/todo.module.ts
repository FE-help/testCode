import {Module} from 'vuex';
import { mutations, actions } from './todo.mutations'

export const defaultTodo = {
    title: '',
    content: '',
};

export const TodoModule: Module<todoType.State, RootState> = {
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
        completedTodo: (state: todoType.State): number => {
            return state.todoList.length
        }
    },
    mutations: mutations,
    actions: actions
};
