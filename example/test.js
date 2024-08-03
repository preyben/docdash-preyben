/**
  * @module 公共函数/数字相关
  */
/**
 * @summary 千分位
 * @function thousandth
 * @param {number} val - 数字
 * @param {[string=',']} ch - 符号
 * @description -
 * 这里是注释
 * @returns {string} 数字
 */
export function thousandth(val, ch = ',') {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ch);
}
