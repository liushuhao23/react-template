/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-01-13 22:51:41
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-16 22:41:49
 */
import React, { useState, useRef, FC, useContext, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import './index.less';

const draggableCom: FC<{}> = (props) => {
  const positon = {
    left: 0,
    top: 0,
  };
  return (
    <div className='drag_parent'>
      <Rnd
        default={{
          x: 0,
          y: 0,
          width: 200,
          height: 200,
        }}
        className= "drag_item"
        bounds='.drag_parent'
      >
        <h3>5555555</h3>
      </Rnd>
    </div>
  );
};

export default React.memo(draggableCom);
