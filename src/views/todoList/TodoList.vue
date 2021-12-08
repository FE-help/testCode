<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>Todo List</el-header>
        <el-main v-loading="TodoModule.loading">
          <div class="collapse">
            <el-collapse v-model="activeNames">
              <el-collapse-item v-for="(todo, index) in TodoModule.todoList" :name="index+''" :key="index">
                <template #title>
                  <todo-item :todo="todo" :test="111"></todo-item>
                </template>
                <div class="text-content">{{todo.content}}</div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-main>
        <el-footer>
          <el-row>
            <el-button v-on:click="handleClickInit">Init</el-button>
            <el-button type="primary" v-on:click="handleClickAdd">Add Todo</el-button>
            <el-button type="success">Success</el-button>
          </el-row>
        </el-footer>
      </el-container>
    </div>
    <add-todo></add-todo>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue';
    import {useStore} from '../../store';
    import {GET_TODO, OPEN_ADD_MODAL, ADD_TODO} from '../../store/todo/todo.types'
    import TodoItem from '../../components/todoList/TodoItem.vue'
    import AddTodo from '../../components/todoList/AddTodo.vue'

    const store = useStore();
    const {state} = store;
    const {TodoModule} = state;
    const activeNames = ref([]);
    const init = (): void => {
        store.dispatch(`TodoModule/${GET_TODO}`);
    };
    const handleClickAdd = (): void => {
        store.commit(`TodoModule/${OPEN_ADD_MODAL}`);
        store.commit(`TodoModule/${ADD_TODO}`, 4);
    };
    const handleClickInit = (): void => {
        init();
    };
    init();
</script>
