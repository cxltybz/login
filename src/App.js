import React, { useState, useCallback, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import CountContext from "./const";

// 模拟的账号数据
const list = { name: "admin", password: "admin" };
// 登录常量
const logon = "1";

const App = () => {
    // 登录的状态
    const [loginStatus, setLoginStatus] = useState(false);
    // 登录请求的个人信息
    const [informationList, setInformationList] = useState({
        name: "admin",
        identity: "组长",
        title: "大淘宝-逛逛&光合-常州基地",
        url: "https://i03piccdn.sogoucdn.com/8e76a1d0527f349b",
    });

    // 判断是否退出登录的状态
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("tokenStatus") === logon)) {
            setLoginStatus(true);
        } else {
            setLoginStatus(false);
        }
    }, []);

    return (
        <CountContext.Provider
            value={{
                informationList,
                loginStatus,
                list,
                setLoginStatus,
                setInformationList,
            }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="/home" exact element={<Home />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </CountContext.Provider>
    );
};

export default App;
