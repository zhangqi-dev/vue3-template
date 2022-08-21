import { defineStore } from "pinia";
import { types } from ".";

/**
 * pinia  不存在mutations 统一使用actions
 * main 全局共享数据
 */
interface IMainState {
    token: string;
    [key: string]: any
    //   counter: number;
}
export const mainStore = defineStore('main', {
    state: (): IMainState => {
        return {
            // counter: 1,
            token: ''
        }
    },
    getters: {
        // doubleCount: (state) => state.counter * 2,
    },
    actions: {
        // 登录
        async [types.USER_LOGIN]<T>(payload: T) {

        }
    }
})