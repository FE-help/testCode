import { ADD_TODO, GET_TODO } from './todo.types'
import { Module  } from 'vuex';
import { RootState } from "../interface";
import { request } from '../../api'

export interface State {
    todoList: Array<any>,
    count: number,
    loading: boolean,
}
export const TodoModule: Module<State, RootState>  = {
    namespaced: true,
    state: () => ({
        todoList: [],
        count: 0,
        loading: true
    }),
    getters: {
        completedTodo: (state: State) => {
            return state.count + 1
        }
    },
    mutations: {
        [ADD_TODO]: (state: State, payload: any) => {
            state.count += payload
        },
        [GET_TODO]: (state: State, payload: any) => {
            state.todoList = payload
        }
    },
    actions: {
        [GET_TODO]: () => {
            request.get('/todo')
        }
    }
};
