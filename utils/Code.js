const codeArr=[
    // {code:200,msg:'请求成功'},
    // {code:201,msg:'创建成功'},
    // {code:202,msg:'更新成功'},
    // {code:204,msg:'永久重定向'},
    {code:400,msg:'请求包含不支持的参数'},
    {code:401,msg:'未授权'},
    {code:403,msg:'被禁止访问'},
    {code:404,msg:'请求的资源不存在'},
    {code:413,msg:'上传的File体积太大'},
    {code:500,msg:'内部错误'},
    {code:1000,msg:'输入参数错误'},
    {code:1001,msg:'输入的json格式不正确'},
    {code:1002,msg:'找不到资源'},
    {code:1003,msg:'未知错误'},
    {code:1004,msg:'禁止访问'},
    {code:1005,msg:'不正确的开发者key'},
    {code:1006,msg:'服务器内部错误'},
    {code:2000,msg:'你已经点过赞了'},
    {code:2001,msg:'你还没点过赞'},
    {code:3000,msg:'该期内容不存在'},
]

function arrayToMap(arr){
    let map=new Map();
    arr.forEach(e => {
        map.set(e.code,e.msg);
    });
    return map
}
const httpCode=arrayToMap(codeArr)
export default httpCode