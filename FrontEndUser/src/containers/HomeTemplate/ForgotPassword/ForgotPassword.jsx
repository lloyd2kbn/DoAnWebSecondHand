import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "antd/dist/antd.css";
import "./forgot.scss";
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { doGet, doPost } from "../../../utils/api/api";
import { debounce } from "lodash";
import Password from "antd/lib/input/Password";


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const ForgotPassword = () => {

  const [disable, setDisable] = useState(true);
  const [disableverify, setDisableverify] = useState(false);
  let navigate = useNavigate();
  const [form] = Form.useForm();

  const handleCheckCode = () => {
    return doPost("auth/verifyEmailForgotPassword", {
      verifyCodeEmail: parseInt(form.getFieldValue("captcha")),
    });
  };

  const handleCheckEmail = async () => {
    return doGet(
      `auth/refreshVerifyCodeForgotPassword?email=${form.getFieldValue("email")}`
    ).catch(err => alert("Emai not exist!!!"));
  };

  const onFinish = async (values) => {
    const { email, captcha, password, confirm } = values;
    console.log(values);
    const { data } = await doPost("auth/resetPassword", {
      email: email,
      confirm: confirm,
    });
    // if (data.status === 200) {
    //   navigate("/login");
    // } else {
    //   window.location.reload();
    // }
  };

  const { t } = useTranslation();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  return (
    <div className="container-forgot">
      <h2>Forgot Password</h2>
      <div className="container-forgot-form">
        <Form
          {...formItemLayout}
          form={form}
          name="forgot"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },

            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Code">
            <Row gutter={8}>
              <Col span={15}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the verify code you got!",
                    },
                    {
                      async validator(_, value) {
                        const data = await handleCheckCode();
                        // console.log("data: ", data);
                        if (
                          data.data.status === 404 &&
                          disableverify === false
                        ) {
                          return Promise.reject(
                            new Error("VeriCode is incorrect or already used!")
                          );
                        }
                        setDisableverify(true);
                        setDisable(true);
                        // console.log("user is already taken!");
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input disabled={disableverify} />
                </Form.Item>
              </Col>
              <Col span={7}>
                <Button onClick={handleCheckEmail}>
                  Get verify
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 8,
                message: "Minimum 8 characters",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Pass"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              type="default"
              style={{ marginLeft: '10px' }}
            >
              <Link to={"/login"}>{t('login.cancel')}</Link>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
