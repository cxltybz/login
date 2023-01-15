import React, { useContext, useState } from "react";
import { useNavigate} from 'react-router-dom'
import Header from '../Header'
import { Dropdown, Space } from 'antd';
import './index.css'
import CountContext from "../../const";
const LoginDialog=()=>{
  // 弹窗是否显示
    const [open,setOpen]=useState(false)
    // 获取静态的数据
    const value=useContext(CountContext)
    // 获取路由
    const navigate=useNavigate()
    // 点击退出事件
    const onClick = ({ key }) => {
        if(key==3){
            // 删除登录的权限
            localStorage.removeItem('token')
            // 给登录页面已经登录过的数据
            navigate('/',{state:{...value,flag:false}})
        }
      };
      // 弹窗内容
      const items = [
        {
          label: `账号:${value.name}`,
          key: '1',
        },
        {
          label: `身份:${value.identity}`,
          key: '2',
        },
        {
          label: '退出登录',
          key: '3',
        },
      ];
      
      
    return (<div  className="Header"> <Dropdown menu={{ items, onClick }} open={open} onOpenChange={()=>setOpen(!open)} trigger={['click']}>
        <a style={{height:'30px'}} onClick={(e) => e.preventDefault()}>
          <Space>
            <Header />
          </Space>
        </a>
      </Dropdown></div>)
}
export default LoginDialog