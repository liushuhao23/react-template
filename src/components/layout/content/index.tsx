/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-12 19:16:43
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-13 23:08:25
 */
import React, { useState, useRef, FC, useContext, useEffect } from "react";

import Draggable from "@components/draggable";

import "./index.less";

import { TestContext } from '../../../pages/Home/index'

interface Res {
  value: string
}

const Content: FC<{}> = (props) => {
  return (
    <div className="draggableParent">
      <Draggable></Draggable>
    </div>
  );
};

export default React.memo(Content);

