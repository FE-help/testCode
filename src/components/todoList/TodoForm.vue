<template>
  <div>
    <el-form
      ref="form"
      :rules="rules"
      :model="TodoModule.editTodo"
      label-width="120px"
    >
      <el-form-item label="Todo title" prop="title">
        <el-input v-model="TodoModule.editTodo.title"></el-input>
      </el-form-item>
      <el-form-item label="Todo content" prop="content">
        <el-input
          type="textarea"
          v-model="TodoModule.editTodo.content"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          {{ TodoModule.editTodo.objectId ? "Edit" : "Create" }}
        </el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElNotification } from "element-plus";
import { useStore } from "../../store";
import {
  CLOSE_ADD_MODAL,
  ADD_TODO,
  EDIT_TODO,
} from "../../store/todo/todo.types";
import {
  EDIT_SUCCESS,
  EDIT_FAIL,
  ADD_SUCCESS,
  ADD_FAIL,
} from "../../constant/message";
import { ref } from "vue";

const store = useStore();
const { state } = store;
const { TodoModule } = state;
const rules = {
  title: [
    {
      required: true,
      message: "Please input title",
      trigger: "blur",
    },
  ],
  content: [
    {
      required: true,
      message: "Please input content",
      trigger: "blur",
    },
  ],
};

const form = ref();
const onSubmit = (): void => {
  (form as any).value.validate().then((result: boolean) => {
    if (result && TodoModule.editTodo.objectId) {
      store
        .dispatch(`TodoModule/${EDIT_TODO}`, {
          id: TodoModule.editTodo.objectId,
          todo: {
            title: TodoModule.editTodo.title,
            content: TodoModule.editTodo.content,
          },
        })
        .then((): void => {
          ElNotification(EDIT_SUCCESS);
        })
        .catch((): void => {
          ElNotification(EDIT_FAIL);
        });
    } else {
      store
        .dispatch(
          `TodoModule/${ADD_TODO}`,
          Object.assign({}, TodoModule.editTodo)
        )
        .then((): void => {
          ElNotification(ADD_SUCCESS);
        })
        .catch((): void => {
          ElNotification(ADD_FAIL);
        });
    }
  });
};
const onCancel = (): void => {
  store.commit(`TodoModule/${CLOSE_ADD_MODAL}`);
};
</script>
