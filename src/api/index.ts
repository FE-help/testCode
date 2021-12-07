import axios from 'axios';

function getInstance(baseUrl: string) {
    const instance = axios.create({
        baseURL: `${baseUrl}`,
        timeout: 10000,
        headers: {
            'X-Custom-Header': 'foobar',
            ['X-LC-Id']: 'nxyzr8b8h1EU6jqinnvYhxdO-gzGzoHsz',
            ['X-LC-Key']: 'pCb1NCrIuBGGhY4GLxebm6pe',
            ['Content-Type']: 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
        }
    });

// 添加请求拦截器
    axios.interceptors.request.use((config): any => {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    return instance
}

export const request = getInstance('/1.1/classes');

