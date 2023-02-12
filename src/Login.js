import React, { useContext, useEffect, useMemo, useState } from "react";
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import LoginContext from "./const";
// 模拟的账号数据
const list = { name: "admin", password: "admin" };
// 定时器
let timer;
const Login = () => {
    // 版本6不通过history传递
    const navigate = useNavigate();
    // 获取登录的context
    const value = useContext(LoginContext);
    const { loginStatus, successChange, signOutChange } = value;

    // 协议判断
    const [checkStatus, setCheckStatus] = useState(false);
    // 账号验证显示
    const [nameStatus, setNameStatus] = useState(false);
    // 密码验证提示
    const [passwordStatus, setPasswordStatus] = useState(false);
    // form 表单
    const [form] = Form.useForm();
    // 登录提交验证
    const onSubmit = values => {
        timer = setTimeout(() => {
            if (values.name !== list.name) {
                setNameStatus(true);
            }
            if (values.password !== list.password) {
                setPasswordStatus(true);
            }
            if (
                values.name === list.name &&
                values.password === list.password
            ) {
                message.success("登录成功");
                delete values.checked;
                //   加密
                localStorage.setItem(
                    "token",
                    window.btoa(
                        window.encodeURIComponent(JSON.stringify(values))
                    )
                );
                // 登录的状态
                localStorage.setItem("tokenStatus", true);
                successChange();
                navigate("/home");
            } else {
                message.success("登录失败", 2.5);
            }
        }, 1000);
    };
    // 协议确认事件
    const onCheckChange = e => {
        setCheckStatus(e.target.checked);
    };
    useEffect(() => {
        // 获取账号是否已经登录
        if (loginStatus) {
            navigate("/home");
        } else if (localStorage.getItem("token")) {
            const value = JSON.parse(
                decodeURIComponent(window.atob(localStorage.getItem("token")))
            );
            // 如果账号已经登录过就填充填写的数据
            form.setFieldsValue({
                name: value.name,
                password: value.password,
                identity: value.identity,
            });
        }
        return () => {
            clearTimeout(timer);
        };
    }, [loginStatus]);

    return (
        <>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                onFinish={onSubmit}
                autoComplete="off"
                form={form}
            >
                <Form.Item
                    label="账号"
                    name="name"
                    onChange={() => setNameStatus(false)}
                    rules={[{ required: true, message: "请输入你的账号!" }]}
                    extra={nameStatus ? "账号输入错误" : false}
                    shouldUpdate
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    onChange={() => setPasswordStatus(false)}
                    rules={[{ required: true, message: "请输入你的密码!" }]}
                    extra={passwordStatus ? "密码输入错误" : false}
                    shouldUpdate
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="身份"
                    name="identity"
                    rules={[{ required: true, message: "请选择你的身份!" }]}
                >
                    <Select>
                        <Select.Option value="组长">组长</Select.Option>
                        <Select.Option value="区长">区长</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="checked"
                    wrapperCol={{ offset: 8, span: 8 }}
                    rules={[{ required: true, message: "请同意协议!" }]}
                    valuePropName="checked"
                >
                    <Checkbox checked={checkStatus} onChange={onCheckChange}>
                        <Button
                            type="link"
                            onClick={() =>
                                window.open(
                                    "https://www.baidu.com/s?ie=UTF-8&wd=%E4%B8%96%E7%95%8C%E6%9D%AF"
                                )
                            }
                        >
                            协议
                        </Button>
                    </Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default Login;
