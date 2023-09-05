// 引入express模块
const express = require('express');

// 创建应用对象
const app = express();

// 创建路由规则
// request 是对请求报文的封装
// get 请求
app.get('/server', (request, response) => {
    // 设置响应头--允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello AJAX.....GET');
});
// post 请求
app.post('/server', (request, response) => {
    // 设置响应头--允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello AJAX.....POST');
});

// 响应JSON数据
app.get('/json', (request, response) => {
    // 设置响应头--允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
        name: '李白',
        age: 18
    }
    // 对对象进行JSON.stringify
    const str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});

// jquery服务
app.get('/jquery', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    // response.send('Hello jquery.....GET');
    const data={
        name:'李白'
    }
    response.send(JSON.stringify(data));
})

// axios服务
app.all('/axios', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data={
        name:'李白'
    }
    response.send(JSON.stringify(data));
})

// fetch服务
app.all('/fetch', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data={
        name:'李白'
    }
    response.send(JSON.stringify(data));
})


// 监听 9000 端口
app.listen(9000, () => {
    console.log('服务器启动成功,9000端口监听中...');
}); 