/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 16:47:26
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-16 23:29:44
 */
import "./Home.less";
import React, { FC, useState } from "react";
import LeftMenu from '@components/layout/leftMenu/index';
import Content from '@components/layout/content/index';
import { Button } from 'antd';
import { TestContext } from './index'

const Home: FC<{}> = () => {
  return (
    <>
      <div className='home layout-container'>
            <div className="leftMenu">
                <LeftMenu ></LeftMenu>
              </div>
              <div className="content">
                <Content></Content>
              </div>
        </div>
    </>
  );
};
export default Home;
