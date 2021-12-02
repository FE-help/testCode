<template>
  <el-drawer
          v-model="TodoModule.drawer"
          :title="TodoModule.editTodo.objectId ? 'Edit Todo' : 'Add Todo'"
          direction="rtl"
          size="500px"
          @closed="onClosed"
          @opened="onOpened">
    <el-form ref="form" :model="TodoModule.todo" label-width="120px">
      <el-form-item label="Todo title">
        <el-input v-model="TodoModule.editTodo.title"></el-input>
      </el-form-item>
      <el-form-item label="Todo content">
        <el-input type="textarea" v-model="TodoModule.editTodo.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          {{TodoModule.editTodo.objectId ? 'Edit' : 'Create'}}
        </el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script lang="ts">
    import {ElMessageBox, ElNotification} from 'element-plus'
    import {useStore} from '../../store';
    import {CLOSE_ADD_MODAL, ADD_TODO, EDIT_TODO} from '../../store/todo/todo.types'

    export default {
        setup() {
            const store = useStore();
            const {state} = store;
            const {TodoModule} = state;
            const onOpened = () => {
                console.log(TodoModule.editTodo);
            };
            const onClosed = () => {
                store.commit(`TodoModule/${CLOSE_ADD_MODAL}`);
            };
            const onSubmit = () => {
                if (TodoModule.editTodo.objectId) {
                    store.dispatch(`TodoModule/${EDIT_TODO}`, {
                        id: TodoModule.editTodo.objectId,
                        todo: {
                            title: TodoModule.editTodo.title,
                            content: TodoModule.editTodo.content,
                        }
                    }).then(() => {
                        ElNotification({
                            title: '提示',
                            message: '修改成功',
                            type: 'success',
                        })
                    }).catch(() => {
                        ElNotification({
                            title: '提示',
                            message: '修改失败',
                            type: 'error',
                        })
                    })
                } else {
                    store.dispatch(`TodoModule/${ADD_TODO}`, Object.assign({}, TodoModule.editTodo))
                        .then(() => {
                            ElNotification({
                                title: '提示',
                                message: '添加成功',
                                type: 'success',
                            })
                        }).catch(() => {
                        ElNotification({
                            title: '提示',
                            message: '添加失败',
                            type: 'error',
                        })
                    })
                }
            };
            const onCancel = () => {
                store.commit(`TodoModule/${CLOSE_ADD_MODAL}`);
            };
            return {
                TodoModule,
                onOpened,
                onSubmit,
                onCancel,
                onClosed,
            }
        },
    }
</script>
