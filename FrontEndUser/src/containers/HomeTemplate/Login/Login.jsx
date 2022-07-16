import React, { useState } from "react";
import "antd/dist/antd.css";
import "./login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { doGet, doPost } from "../../../utils/api/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import instance from "../../../utils/api/Axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { useTranslation } from "react-i18next";

// const responseFacebook = (response) => {
//   console.log(response);
// };

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const responseGoogle = async (response) => {
    try {
      const { data } = await doGet(
        `auth/checkLoginGG?username=${response.profileObj.name}&email=${response.profileObj.email}`
      );
      // console.log(data["username"]);
      console.log(data);

      localStorage.setItem("username", data["username"]);
      Cookies.set("token", data["token"], { expires: 1, path: "/" });
      Cookies.set("refreshToken", data["refreshToken"], {
        expires: 7,
        path: "/",
      });
      // console.log( Cookies.get('token'));
      instance.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "token"
      )}`;
      navigate("/");
    } catch (error) {
      console.log("aaaa", error);
      // setErr(true);
      navigate("/login");
    }
  };
  const onFinish = async ({ username, password }) => {
    try {
      const { data } = await doPost("auth/login", { username, password });
      console.log(data["username"]);
      localStorage.setItem("username", data["username"]);
      Cookies.set("token", data["token"], { expires: 1, path: "/" });
      Cookies.set("refreshToken", data["refreshToken"], {
        expires: 7,
        path: "/",
      });
      // console.log( Cookies.get('token'));
      instance.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
        "token"
      )}`;
      navigate("/");
    } catch (error) {
      console.log("âaaa", error);
      setErr(true);
      navigate("/login");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container-form">
      <h2>
        {t("login.welcom")} <b>Second Hand Town</b>
      </h2>
      <div className="container-login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
              {
                min: 3,
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>{t("login.remember")}</Checkbox>
            </Form.Item>
            <Link to={"/forgotpassword"}>{t("login.passwd")}</Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginRight: "5px" }}
            >
              {t("login.login")}
            </Button>
            {t("login.or")} <Link to={"/register"}>{t("login.register")}</Link>
          </Form.Item>
        </Form>

        <div className="container-right-login">
          <div className="container-button">
            <GoogleLogin
              clientId="176687431821-4q6tbvv2rn86p6rtvp4919tljbnofq3v.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            <button
              className="login-with-facebook"
              style={{ marginTop: "10px" }}
            >
              <i className="fa-brands fa-facebook-f"></i>
              Facebook
            </button>
            {/* <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              // onClick={componentClicked}
              callback={responseFacebook}
            /> */}

            {/* <button className="login-with-google">
              <i className="fa-brands fa-google"></i>
              Google
            </button> */}

            <Button type="default" style={{ marginTop: "125px" }}>
              <Link to={"/"}>{t("login.cancel")}</Link>
            </Button>
          </div>
        </div>
      </div>
      {err && <h5> {t("login.err")}</h5>}
    </div>
  );
};

export default Login;
