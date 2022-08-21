// 所有store 导出
// action-type
export * as types from './types/action-type';
// 全局共享数据为默认导出，其他为具名导出
export { mainStore as default } from './main';
export { useUserStore  } from './user';