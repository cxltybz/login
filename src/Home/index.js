import React,{useEffect,useState} from "react";
import Header from './components/Header'
import Nav from "./components/Nav";
import { Spin } from 'antd';

const Home=()=>{
    // 个人信息
    const [information, setInformation] = useState({});
    // 动态加载
    const [statusLoading,setStatusLoading]=useState(true);

    useEffect(() => {
    let timer;
    // 获取信息请求
    timer = setTimeout(() => {
        setInformation(JSON.parse(localStorage.getItem('LoginName')))
        setStatusLoading(false)
      }, 1000)
      return () => {
        // 删除定时器
        clearTimeout(timer)
      }
    }, [])
   return ( 
  <>
    <Spin size="large" spinning={statusLoading}>
    <div>
       
       <Header url={information.url}/>
       <Nav {...information}/>
    </div>
    </Spin>
    </>
   )
  
}
 export default Home