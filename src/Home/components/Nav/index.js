import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './index.css'
const Nav=(props)=>{
    const {url,title,identity,name}=props;
   return ( 
      <>
      <div className="Nav">
        <Avatar  size={180} icon={<UserOutlined />} src
        ={url} />
        <div style={{marginLeft:'16px'}}>
         <h3>
            {`${name}(${identity})`}
         </h3>
         <p>{title}</p>
        </div>
    </div>
      </>
   
   )
  
}
 export default Nav
 Nav.defaultProps = {
    // 默认图片
    url: 'http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg'
}