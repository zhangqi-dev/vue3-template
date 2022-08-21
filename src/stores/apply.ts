import { defineStore } from "pinia";
import * as types from './types/action-type';
import type { IResponseProps } from '@/api/interface';
import { applyEnterprise, applyIdentity, applyList } from '@/api/api-apply';
/**
 * pinia  不存在mutations 统一使用actions
 * apply 申请信息  
 * 
 * actions 提示信息统一返回在页面中处理
 */
interface IApplyState{
    // 登录token
    token: string;
}


export const useApplyStore = defineStore('apply', {
    state: (): IApplyState => {
        return {
          token: ""
        }
    },
    getters: {
        
    },
    actions: {
        //申请列表 T 代表传入的参数
        async [types.APPLY_LIST]<T = any>(payload: T ): Promise<IResponseProps<any> | undefined> {
            // 
            const res = await applyList<T>(payload);
            if (res.code === "S00000") {
                //成功后 存储全局状态字段
                const { token } = res.data;

            } else {
                // 错误统一在页面中处理
                
                return res
            }
        },
        // 身份信息
        async [types.APPLY_IDENTITY]<T>(payload: T): Promise<IResponseProps<any>> {
            // 直接返回即可，
            return await applyIdentity(payload);
        },
        // 企业信息
        async [types.APPLY_ENTERPRISE]<T>(payload: T): Promise<IResponseProps<any>> {
            
            return await applyEnterprise(payload);
        }
        

    }
})