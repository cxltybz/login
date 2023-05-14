import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./index.css";

const DetailedInformation = props => {
    // 传递的参数

    const { url, title, identity, name } = props;
    //  url 照片地址,title公司地址, identity职位,name 用户
    return (
        <>
            <div className="detailed">
                <Avatar size={180} icon={<UserOutlined />} src={url} />
                <div style={{ marginLeft: "16px" }}>
                    <h3>{`${name}(${identity})`}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </>
    );
};
DetailedInformation.defaultProps = {
    // 默认图片
    url: "http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg",
    name: "用户",
    identity: "职位",
    title: "住址",
};
export default DetailedInformation;
