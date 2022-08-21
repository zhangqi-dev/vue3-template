// 检验六位数字
export const validator6number = (val: string) => {
    if (!val) return '请输入验证码';
    if (!/\d{6}/.test(val)) return '请输入6位数字验证码';
    return true;
};
// 校验手机号
export const validatorPhone = (phone: string) => {
    const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (!phone) return '请输入手机号';
    if (!reg.test(phone)) return '请输入正确手机号';
    return true;
}

// 手机号脱敏
export const phoneFormat = (val: string) => {
	return val.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
};
