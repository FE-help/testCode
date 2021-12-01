import {createStore, Store, useStore as baseUseStore} from "vuex";
import { InjectionKey } from 'vue';
import { TodoModule } from './todo/todo.module'
import { RootState } from './interface'
export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state: {
    test: 'RootState'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    TodoModule
  }
});

export function useStore(){
  return baseUseStore(key);
}
