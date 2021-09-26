import axios from "axios";

axios.defaults.baseURL = "/api"; //请求基本路径
axios.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded;charset=UTF-8"; // post请求头的设置
axios.defaults.timeout = 10000; // 设置请求超时
// 请求拦截
axios.interceptors.request.use(
	config => {
		// token认证写在这里
		return config;
	},
	err => {
		Promise.reject(err);
	}
);

// 响应拦截
axios.interceptors.response.use(
	config => {
		return config;
	},
	err => {
		Promise.reject(err);
	}
);


export default axios;