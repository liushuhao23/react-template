/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-07-03 14:45:42
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-12 16:35:41
 */
import React, { FC,Suspense } from "react";
import { Route, Switch, RouteProps } from "react-router";
import Loading from '@components/Loading/Loading';
import NotFound from '@pages/NotFound/NotFound';
const Home = React.lazy(() => import("@pages/Home/Home"));
const Test = React.lazy(() => import("@pages/TestCom/Testcom"));

// 定义路由集合
export const routes: RouteProps[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/test",
    exact: true,
    component: Test,
  },
];

// 定义路由组件
const Routes:FC = ()=>{
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                {
                    routes.map((r,index)=>{
                        const {path,exact,component} = r;
                        const LazyCom = component;
                        return (
                            <Route
                                key={index}
                                path={path}
                                exact={exact}
                                render={
                                    (props)=><LazyCom {...props} />
                                }
                             />
                        )
                    })
                }
                {/* 兜底的路由 */}
                <Route component={NotFound} />
            </Switch>
        </Suspense>
    )
}

export default Routes;