import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './index.css'
const Header=(props)=>{
    // 传递的参数
    const {url}=props;
    // url 照片地址
   return ( 
    <div className="Header">
        <Avatar  size={30} icon={<UserOutlined />} src
        ={url} />
    </div>
   )
  
}
Header.defaultProps = {
    // 默认图片
    url: 'http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg'
}
 export default Header
