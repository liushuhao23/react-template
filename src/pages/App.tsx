/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 16:22:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-12 18:16:34
 */
import React, { useState } from "react";
import Routes from "@routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Banner from '@components/Banner/Banner';
import { ConfigProvider,  DatePicker, message } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn'
import moment from 'moment';
import 'antd/dist/antd.css';

moment.locale('zh-cn')

const App = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value: { format: (arg0: string) => any; }) => {
    message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
    setDate(value);
  };
  return (
    <ConfigProvider locale={zhCN}>
      <div >
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
        </div>
      </div>
      <RecoilRoot>
        <Router basename='/'>
          <Banner />
          <Routes />
        </Router>
      </RecoilRoot>
    </ConfigProvider>
  );
};
export default App;

