/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 16:47:26
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-13 23:26:31
 */
import "./Home.less";
import React, { FC, useState } from "react";
import LeftMenu from '@components/layout/leftMenu/index';
import Content from '@components/layout/content/index';
import { Button } from 'antd';
import { TestContext } from './index'

const Home: FC<{}> = () => {
  const [value, setValue] = useState('父组件测试数据');
  const changeValue = () => {
    // setValue(value + 1)
  }
  const ss = {value}
  return (
    <>
      <div className='home layout-container'>
          <TestContext.Provider value={{rs: value}}>
            <div className="leftMenu">
                <Button type="primary" onClick={changeValue}>Primary Button</Button>
                <LeftMenu ></LeftMenu>
              </div>
              <div className="content">
                <Content></Content>
              </div>
          </TestContext.Provider>
        </div>
    </>
  );
};
export default Home;
