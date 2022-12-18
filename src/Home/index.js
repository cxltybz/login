import React,{useEffect,useState} from "react";
import {useLocation} from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import Header from './components/Header'
import Nav from "./components/Nav";
import { Spin } from 'antd';
// 登录请求的个人信息
const list ={name: 'admin', password: 'admin', identity: '组长',title:'大淘宝-逛逛&光合-常州基地',url:'https://i03piccdn.sogoucdn.com/8e76a1d0527f349b'}
const Home=()=>{
  const navigate=useNavigate()
  // 版本6通过useParams,useSearchParams,useLocation传递参数
  const location=useLocation()
  const {state}=location
    // 个人信息
    const [information, setInformation] = useState({});
    // 动态加载
    const [statusLoading,setStatusLoading]=useState(true);

    useEffect(() => {
      let timer;
   if(state){
    // 获取信息请求
    timer = setTimeout(() => {
        setInformation({...list})
        setStatusLoading(false)
      }, 1000)
   }else{
    navigate('/')
   }
      return () => {
        // 删除定时器
        clearTimeout(timer)
      }
    }, [])
   return ( 
  <>
    <Spin size="large" spinning={statusLoading} tip='个人信息加载中...'>
    <div>
       <Header url={information.url}/>
       <Nav {...information}/>
    </div>
    </Spin>
    </>
   )
  
}
 export default Home