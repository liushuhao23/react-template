/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 16:22:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-16 23:29:28
 */
import React, { useState } from "react";
import Routes from "@routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Banner from '@components/Banner/Banner';
// import Home from '@/pages/Home/Home'
import { ConfigProvider,  DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn'
import moment from 'moment';
import 'antd/dist/antd.css';

moment.locale('zh-cn')

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RecoilRoot>
        <Router basename='/'>
          <Routes />
        </Router>
      </RecoilRoot>
    </ConfigProvider>
  );
};
export default App;

