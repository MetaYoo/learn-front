/**
 * 是否带小数点
 * @param strValue
 * @returns {boolean}
 */
function isDecimal(strValue) {
    let reg = /^\d+\.\d+$/;
    return reg.test(strValue);
}

/**
 * 检验是否中文名称组成
 * @param strValue
 * @returns {boolean}
 */
function isChinese(strValue) {
    let reg = /^[\u4E00-\u9FA5]{2,4}$/;
    return reg.test(strValue);
}

/**
 * 检验是否全由8位数字组成
 * @param strValue
 * @returns {boolean}
 */
function isNumber(strValue) {
    let reg = /^[0-9]{8}$/;
    return reg.test(strValue);
}

/**
 * 检验是否是电话号码
 * @param strValue
 * @returns {boolean}
 */
function isTelCode(strValue) {
    let reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(strValue);
}


function isEmail(strValue) {
   let reg = /^w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
   return reg.test(strValue);
}
