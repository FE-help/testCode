<template>
  <div class="item-box">
    {{title}}
    <span class="time">{{format(todo.createdAt)}}</span>
    <el-icon v-on:click.stop="onClickDelete" size="16">
      <delete/>
    </el-icon>
    <el-icon v-on:click.stop="onClickEdit" size="16">
      <edit/>
    </el-icon>
  </div>
</template>

<script lang="ts">
    import {Delete, Edit} from '@element-plus/icons'
    import {useStore} from '../../store';
    import {OPEN_ADD_MODAL, DELETE_TODO} from '../../store/todo/todo.types'
    import moment from 'moment'
    import {ElMessageBox, ElMessage} from 'element-plus'

    export default {
        components: {Delete, Edit},
        props: ['todo', 'test'],
        setup(props: any) {
            const store = useStore();
            const todo = props.todo;
            const onClickEdit = () => {
                store.commit(`TodoModule/${OPEN_ADD_MODAL}`, Object.assign({}, todo));
            };
            const onClickDelete = () => {
                ElMessageBox.confirm(
                    '确定要删除吗',
                    'Warning',
                    {
                        confirmButtonText: 'OK',
                        cancelButtonText: 'Cancel',
                        type: 'warning',
                    }
                )
                    .then(() => {
                        store.dispatch(`TodoModule/${DELETE_TODO}`, todo.objectId)
                    })
                    .catch(() => {
                        ElMessage({
                            type: 'info',
                            message: 'Delete canceled',
                        })
                    });
            };
            const format = (time) => {
                return moment(time).format('YYYY-MM-DD HH:DD:SS');
            };
            return {
                title: todo.title || {},
                onClickDelete,
                onClickEdit,
                format,
            }
        }
    }
</script>
<style lang="less">
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
