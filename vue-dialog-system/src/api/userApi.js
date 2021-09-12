import request from "@/common/request";

/**
 * 用户登录
 * @param {*} data
 * @returns
 */
export const userLogin = data => {
	return request({
		url: "user/login",
		method: "post",
		data: data
	});
};

/**
 * 用户注册
 * @param {*} data
 * @returns
 */
export const userRegister = data => {
	return request({
		url: "user/register",
		method: "post",
		data: data
	});
};

/**
 * 重置密码
 * @param {*} data
 * @returns
 */
export const userResetPwd = data => {
	return request({
		url: "user/resetpwd",
		method: "post",
		data: data
	});
};
