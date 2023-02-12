import React, { useState, useCallback, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import CountContext from "./const";
// 登录请求的个人信息
const informationList = {
    name: "admin",
    identity: "组长",
    title: "大淘宝-逛逛&光合-常州基地",
    url: "https://i03piccdn.sogoucdn.com/8e76a1d0527f349b",
};

const App = () => {
    // 登录的状态
    const [loginStatus, setLoginStatus] = useState(false);

    // 登录成功的事件
    const successChange = useCallback(() => {
        setLoginStatus(true);
    }, []);
    // 退出登录的事件
    const signOutChange = useCallback(() => {
        setLoginStatus(false);
    }, []);
    // 判断是否退出登录的状态
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("tokenStatus")) || loginStatus) {
            setLoginStatus(true);
        } else {
            setLoginStatus(false);
        }
        return () => {};
    }, []);

    return (
        <CountContext.Provider
            value={{
                informationList,
                loginStatus,
                successChange,
                signOutChange,
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
