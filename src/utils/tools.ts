
export function getSlidingVerificationCode<T, E>(id: string = '#nc'): Promise<T> {
    return new Promise((resolve, reject) => {
        const nc_token = ['FFFF00000000017CD889', new Date().getTime(), Math.random()].join(':');
        const nc = NoCaptcha.init({
            renderTo: id,
            appkey: 'FFFF00000000017CD889',
            scene: 'nc_message_h5',
            token: nc_token,
            trans: { key1: 'code300' },
            elementID: ['usernameID'],
            is_Opt: 0,
            language: 'cn',
            timeout: 10000,
            retryTimes: 5,
            errorTimes: 5,
            inline: false,
            apimap: {
                // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
                // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
            },
            bannerHidden: false,
            initHidden: false,
            callback: (data: T) => {
                resolve(data)
            },
            error: function (s: E) {
                nc.reset();
                reject(s);
            }
        });
        NoCaptcha.setEnabled(true);
        nc.reset(); //请务必确保这里调用一次reset()方法
        //this.nc = nc;
        NoCaptcha.upLang('cn', {
            LOADING: '加载中...', //加载
            SLIDER_LABEL: '请按住滑块，拖动到最右边', //等待滑动
            CHECK_Y: '验证成功！', //通过
            ERROR_TITLE: '非常抱歉，这出错了...', //拦截
            CHECK_N: '验证未通过', //准备唤醒二次验证
            OVERLAY_INFORM: '经检测你当前操作环境存在风险，请输入验证码', //二次验证
            TIPS_TITLE: '验证码错误，请重新输入' //验证码输错时的提示
        });
    })

}
