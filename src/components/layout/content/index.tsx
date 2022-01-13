/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-12 19:16:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-13 17:39:54
 */
import React, { useState, useRef, FC, useContext, useEffect } from "react";

import "./index.less";

import { TestContext } from '../../../pages/Home/index'

interface Res {
  value: string
}

const Content: FC<{res: Res}> = (props) => {
  const { rs } = useContext(TestContext);
  console.log(rs, '333');
  console.log(props.res, 'props');
  
  // console.log(value, 'xjxjxw');
  // const res: any = JSON.parse(value)
  // console.log(res, 'xxx');
  useEffect(() => {
    console.log(3333333);
  }, [])

  let [a, setA] = useState('xxj')
  let [c, setc] = useState(9)


  useEffect(() => {
    console.log(3333333);
  }, [a])
  let b = 1
  

  const change = () => {
    //
  }
  console.log(a, 'xxxxx');
  console.log(b, 'xhxh');
  return (
    <div>
      <span onClick={change}>这是子组件</span>
      <span>{rs}</span>
      <span>{a}</span>
      <span>{b}</span>

    </div>
  );
};

export default React.memo(Content);

