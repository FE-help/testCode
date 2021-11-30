import { ADD_TODO } from './todo.types'
import { Module  } from 'vuex';
import { RootState } from "../interface";

export interface State {
    todoList: Array<any>,
    count: number,
}
export const TodoModule: Module<State, RootState>  = {
    namespaced: true,
    state: () => ({
        todoList: [],
        count: 0
    }),
    getters: {
        completedTodo: (state: State) => {
            return state.todoList.filter((todo: any) => todo.completed)
        }
    },
    mutations: {
        [ADD_TODO]: (state: State, payload: any) => {
            state.todoList.push(payload)
        }
    },
    actions: {}
};
