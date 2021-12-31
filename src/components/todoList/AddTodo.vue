<template>
  <el-drawer
    v-model="TodoModule.drawer"
    :title="TodoModule.editTodo.objectId ? 'Edit Todo' : 'Add Todo'"
    direction="rtl"
    size="500px"
    @closed="onClosed"
    @opened="onOpened"
  >
    <TodoForm></TodoForm>
  </el-drawer>
</template>

<script setup lang="ts">
import { useStore } from "../../store";
import { CLOSE_ADD_MODAL } from "../../store/todo/todo.types";
import TodoForm from "./TodoForm.vue";
const store = useStore();
const { state } = store;
const { TodoModule } = state;
const onOpened = (): void => {
  /* console.log(TodoModule.editTodo); */
};
const onClosed = (): void => {
  store.commit(`TodoModule/${CLOSE_ADD_MODAL}`);
};
</script>
