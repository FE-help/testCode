<template>
  <div>
    <div>root state:{{test}}</div>
    <div>TodoModule state: {{TodoModule.count}}</div>
    <div>TodoModule getters: {{getters['TodoModule/completedTodo']}}</div>
    <div>{{TodoModule.loading}}</div>

    <div><button @click="handleClickAdd()">add count</button></div>
  </div>
</template>

<script lang="ts">
    import {useStore} from '../../store';
    import { GET_TODO, ADD_TODO } from '../../store/todo/todo.types'
    export default {
        setup() {
            const store = useStore();
            const { state, getters } = store;
            const init = () => {
                store.dispatch(`TodoModule/${GET_TODO}`);
            };
            const handleClickAdd = () => {
                store.commit(`TodoModule/${ADD_TODO}`, 2);
            };
            init();
            return {
                ...state,
                getters,
                handleClickAdd,
            }
        }
    }
</script>
