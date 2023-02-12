import React, { useContext, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import CountContext from "../../../const";

const Header = () => {
    // 传递的参数
    const value = useContext(CountContext);
    const [getUrl, setGetUrl] = useState("");
    const { informationList } = value;
    let timer;
    useEffect(() => {
        timer = setTimeout(() => {
            setGetUrl(informationList);
        }, 1000);
        return () => {};
    }, []);

    // url 照片地址
    const url =
        getUrl.url ||
        "http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg";
    return (
        <div>
            <Avatar size={30} icon={<UserOutlined />} src={url} />
        </div>
    );
};
export default Header;
