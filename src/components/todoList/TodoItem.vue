<template>
  <div class="item-box">
    {{todo.title}}
    <span class="time">{{format(todo.createdAt)}}</span>
    <el-icon v-on:click.stop="onClickDelete" size="16">
      <delete/>
    </el-icon>
    <el-icon v-on:click.stop="onClickEdit" size="16">
      <edit/>
    </el-icon>
  </div>
</template>

<script setup lang="ts">
    import {defineProps} from 'vue';
    import {Delete, Edit} from '@element-plus/icons'
    import {useStore} from '../../store';
    import {OPEN_ADD_MODAL, DELETE_TODO} from '../../store/todo/todo.types'
    import moment from 'moment'
    import {ElMessageBox, ElNotification} from 'element-plus'
    import {DELETE_SUCCESS, DELETE_FAIL} from '../../constant/message'

    const store = useStore();
    const props = defineProps({
        todo: Object as todoType.Todo
    });
    const todo = props.todo;
    const onClickEdit = (): void => {
        store.commit(`TodoModule/${OPEN_ADD_MODAL}`, Object.assign({}, todo));
    };
    const onClickDelete = (): void => {
        ElMessageBox.confirm(
            '确定要删除吗',
            'Warning',
            {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
            }
        )
            .then((): void => {
                store.dispatch(`TodoModule/${DELETE_TODO}`, todo.objectId)
                    .then(() => {
                        ElNotification(DELETE_SUCCESS)
                    })
                    .catch((): void => {
                        ElNotification(DELETE_FAIL)
                    })
            })
    };
    const format = (time) => {
        return moment(time).format('YYYY-MM-DD HH:DD:SS');
    };
</script>
<style lang="less" scoped>
  .item-box {
    width: 100%;
    font-size: 15px;

    .el-icon {
      float: right;
      line-height: 50px;
      margin-right: 10px;
    }

    .time {
      font-size: 12px;
      color: #d1d1d1;
    }
  }
</style>
