import { reactive, nextTick, toRefs, watch } from 'vue';

import { getSlidingVerificationCode } from '@/utils/tools';


export interface IVerifyCodeProps{
    afsSessionId: string;
    afsToken: string;
    afsSig: string;
    afsScene: string;
}

export interface ISliderProps{
    csessionid: string;
    sig: string;
    value: string;
}

/**
 * 滑动验证数据获取
 * @returns 
 */
export function useVerifyCode() {
    const verifyCode = reactive<IVerifyCodeProps>({
		afsSessionId: '',
		afsToken: '',
		afsSig: '',
		afsScene: 'nc_message_h5'
    })
    nextTick(() => {
        getSlidingVerificationCode<ISliderProps, any>().then((data: ISliderProps) => {
            verifyCode.afsSessionId = data.csessionid;
            verifyCode.afsScene = "nc_message_h5";
            verifyCode.afsSig = data.sig;
            verifyCode.afsToken = data.value;
        })
    });
	return verifyCode;
}
