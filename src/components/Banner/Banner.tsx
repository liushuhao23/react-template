import React, { FC, useEffect, useCallback } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./banner.css";
import { useRecoilState } from "recoil";
import { loginSel } from "@recoil/selectors/loginSelectors";
import { user } from "@api/index";
import { storage } from "@utils/index";
const Banner: FC<{}> = () => {

  const [loginInfo, setLoginInfo] = useRecoilState(loginSel);

  const history = useHistory();
  
  const location = useLocation();

//   相当于 class didmount
  useEffect(() => {
    if (!loginInfo.headimgurl && location.pathname !== "/") {
      history.push({
        pathname: "/login",
        state: {
          from: {
            pathname: location.pathname,
          },
        },
      });
    }
    // 相当于destroy
    // return ()=>{}
  },[]);

  return (
    <></>
  );
};
export default React.memo(Banner);
