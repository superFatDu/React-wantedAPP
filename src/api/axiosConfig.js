import axios from "axios/index";
import { Toast } from "antd-mobile/lib/index";
import qs from "qs";

axios.interceptors.request.use(config => {
  Toast.loading("加载中", 0);
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  Toast.hide();
  return response;
});

/*
method: 请求方式get,post
url:    请求地址
type:   请求类型 0为'application/x-www-form-urlencoded', 1为'application/json', 2为'multipart/form-data'
params: 请求参数{key:value}
token:  是否需要添加token,true为添加，false为不添加
*/
function ajaxRequest(method, url, type, params, token){
  let contentType = ['application/x-www-form-urlencoded', 'application/json', 'multipart/form-data'],
    headers = { 'content-type': contentType[type] };
  if(token === true){
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }
  if(type === 0){
    params = qs.stringify(params);
  }
  return axios({
    method,
    url,
    headers,
    data: params
  });
}


export default ajaxRequest;