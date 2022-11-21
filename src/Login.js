import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Select, message } from 'antd';
import axios from 'axios';
const Login = () => {
    const [form] = Form.useForm();
    const [checkNick, setCheckNick] = useState(false);
    // 登录提交验证
    const onFinish = (values) => {
        console.log(values);
        axios.get('/api/login').then(res => {
            const user = res.data
            user.map(item => {
                if (item.name == values.name && item.password == values.name && item.identity == values.identity) {
                    message.success('登录成功', 2.5)
                    return false;
                } else {
                    message.success('账号验证失败', 2.5)
                    return false;
                }
            })

        }).catch(() => {
            console.log('error');
            message.error('登录失败', 2.5)
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onCheckboxChange = (e) => {
        setCheckNick(e.target.checked);
    };
    // 清除按钮
    const onReset = () => {
        form.resetFields();
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{
                remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
        >
            <Form.Item
                label="账号"
                name="name"
                rules={[{ required: true, message: '请输入你的账号!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入你的密码!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item label="身份" name="identity"
                rules={[{ required: true, message: '请选择你的身份!' }]}>
                <Select>
                    <Select.Option value="1">组长</Select.Option>
                    <Select.Option value="2">区长</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name="checked" rules={[{ required: true, message: '请同意协议!' }]} valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox checked={checkNick} onChange={onCheckboxChange}>
                    <Button type="link" href='https://www.baidu.com/s?ie=UTF-8&wd=%E4%B8%96%E7%95%8C%E6%9D%AF'>协议</Button>
                </Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button htmlType="button" onClick={onReset}>重置</Button>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    登录
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;