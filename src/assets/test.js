/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-17 21:50:08
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-17 22:39:13
 */
const a = [[],1, [], 3]
a.forEach((item, index) => {
    try {
        console.log(item.push(1), index);
    } catch (error) {
        console.log(error, '444');
    }
});