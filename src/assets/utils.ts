/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-17 21:28:20
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-17 21:48:04
 */
interface Props {
    fn: <T, U>(...params: any) => U
}
class EventEmitter  {
    private  list: any = [];
    constructor() {

        
    }

    // 添加
    add(name: string, fn: Props['fn']) {
        if (!this.list['name']) {
            this.list['name'] = [fn]
        } else {
            this.list['name'].push(fn)
        }
    }

    // 发布
    publish(name: string, data: unknown) {
        const target = this.list['name'];
        if (target) {
            this.list['name'].forEach((item: any )=> {
                item.call(this, data)
            });
        } else {
            return false
        }
    }
}