import { userLogin, userLoginSendCode, userBindSaleCode } from '@/api/api-user';
import { defineStore } from "pinia";
import * as types from './types/action-type';
import type { IResponseProps } from '@/api/interface';
import type { ILoginState } from '@/interfaces/index'
/**
 * pinia  不存在mutations 统一使用actions
 * user  用户相关共享数据
 * 
 * actions 提示信息统一返回在页面中处理
 */
interface IUserState{
    // 登录token
    token: string;
}


export const useUserStore = defineStore('user', {
    state: (): IUserState => {
        return {
          token: ""
        }
    },
    getters: {
        
    },
    actions: {
        //用户登录 代表传入的参数
        async [types.USER_LOGIN](payload: ILoginState): Promise<IResponseProps<any> | undefined> {
            // 
            const res = await userLogin(payload);
            if (res.code === "S00000") {
                //成功后 存储全局状态字段
                const { token } = res.data;

            } else {
                // 错误统一在页面中处理
                
                return res
            }
        },
        // 登录发送验证码
        async [types.USER_LOGIN_SEND_CODE]<T>(payload: T): Promise<IResponseProps<any>> {
            // 直接返回即可，
            return await userLoginSendCode(payload);
        },
        // 绑定业务code
        async [types.USER_LOGIN_BIND_CODE]<T>(payload: T): Promise<IResponseProps<any>> {
            
            return await userBindSaleCode(payload);
        }
        

    }
})