/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-12 16:34:52
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-12 16:43:30
 */
// import "./Home.less";
import React, { FC } from "react";
import Swiper from '@components/Gallery/Gallery';
const Home: FC<{}> = () => {
  return (
    <>
      <div className='page-home layout-container'>
        <div className='banner-box'>
            <span>1111</span>
            {/* 轮播组件 swiper */}
            {/* <Swiper /> */}
        </div>
      </div>
    </>
  );
};
export default Home;
