import {NotificationParams} from 'element-plus'

export const ADD_SUCCESS: NotificationParams = {title: '提示', message: '新增成功', type: 'success'};
export const ADD_FAIL: NotificationParams = {title: '提示', message: '新增失败', type: 'error'};
export const EDIT_SUCCESS: NotificationParams = {title: '提示', message: '修改成功', type: 'success'};
export const EDIT_FAIL: NotificationParams = {title: '提示', message: '修改失败', type: 'error'};
export const DELETE_SUCCESS: NotificationParams = {title: '提示', message: '删除成功', type: 'success'};
export const DELETE_FAIL: NotificationParams = {title: '提示', message: '删除失败', type: 'error'};

export default function getMessage(title: string, message: string, type: string) {
    return {
        title,
        message,
        type
    }
};
