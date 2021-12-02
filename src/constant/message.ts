export const ADD_SUCCESS = {title: '提示', message: '新增成功', type: 'success'};
export const ADD_FAIL = {title: '提示', message: '新增失败', type: 'error'};
export const EDIT_SUCCESS = {title: '提示', message: '修改成功', type: 'success'};
export const EDIT_FAIL = {title: '提示', message: '修改失败', type: 'error'};
export const DELETE_SUCCESS = {title: '提示', message: '删除成功', type: 'success'};
export const DELETE_FAIL = {title: '提示', message: '删除失败', type: 'error'};

export default function getMessage(title: string, message: string, type: string) {
    return {
        title,
        message,
        type
    }
};
