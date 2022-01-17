/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-09-12 16:05:00
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-17 22:54:19
 */
class PubSub {
  public list:  any

  public data: any

  public errDataList: any

  constructor() {
    this.list = [];
    this.data = [];
    this.errDataList = [];
  }

  add(name: string | number, fn: any, errFun: Function) {
    if (!this.list[name]) {
      this.list[name] = [{
        implement: fn,
        err: errFun
      }];
    } else {
      this.list[name].push({
        implement: fn,
        err: errFun
      });
    }
  }

  // eslint-disable-next-line consistent-return
  publish(name: string | number, data: any) {
    const result = this.list[name];
    if (!result) {
      return false;
    }
    result.forEach((item: any) => {
      try {
        item.implement.call(this, data);
      } catch (error) {
        this.errDataList.push({
          name,
          error,
        })
        item.err.call(this, error)
      }
    });
  }

  
}

const sub = new PubSub();

export default sub;
