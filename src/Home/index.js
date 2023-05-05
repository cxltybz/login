import React, { useContext, useEffect, useState } from "react";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

import DetailedInformation from "./components/DetailedInformation";
import PersonalDataDropdown from "./components/PersonalDataDropdown";

import CountContext from "../const";

const Home = () => {
    const navigate = useNavigate();
    // 版本6通过useParams,useSearchParams,useLocation传递参数
    // 获取登录人的个人信息
    const [information, setInformation] = useState({});
    // 页面登录的状态和信息
    const value = useContext(CountContext);
    const { informationList, loginStatus, num } = value;
    console.log(loginStatus, num);
    // 动态加载
    const [statusLoading, setStatusLoading] = useState(true);

    useEffect(() => {
        let timer;
        if (loginStatus) {
            // 获取信息请求
            timer = setTimeout(() => {
                setInformation({ ...informationList });
                setStatusLoading(false);
            }, 1000);
        } else {
            navigate("/");
        }
        return () => {
            // 删除定时器
            clearTimeout(timer);
        };
    }, []);
    return (
        <div>
            <Spin size="large" spinning={statusLoading} tip="个人信息加载中...">
                <div>
                    <PersonalDataDropdown />
                    <DetailedInformation {...information} />
                </div>
            </Spin>
        </div>
    );
};
export default Home;
