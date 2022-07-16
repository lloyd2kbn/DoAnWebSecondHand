import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./edit.scss";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Select
} from "antd";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { doGet, doPost } from "../../../utils/api/api";

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

const EditUser = () => {

  const [disable, setDisable] = useState(true);
  const [getCurrentUser, setCurrentUser] = useState([]);
  const [getUsername, setUsername] = useState();
  const [getMail, setMail] = useState();
  const [getPhone, setPhone] = useState();
  const [getGender, setGender] = useState();
  // const [disableverify, setDisableverify] = useState(false);
  let navigate = useNavigate();

  const [form] = Form.useForm();

  form.setFieldsValue({
    username: localStorage.getItem("username"),
    email: getCurrentUser.email,
    phone: getCurrentUser.phone,
    gender: getCurrentUser.gender,

  })

  useEffect(() => {
    (async () => {
      try {
        const userName = localStorage.getItem("username");
        if (userName != undefined) {
          const { data } = await doGet(
            `/auth/getCurrentUser?username=${userName}`,
          );
          setCurrentUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])

  const onFinish = async (values) => {
    const { username, email, phone, gender } = values;
    const { data } = await doPost("auth/updateUser", {
      userName: username,
      email,
      phone,
      gender,
    });
  };

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
  return (<>
    <section className="hero hero-normal">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all">
                <i className="fa fa-bars" />
                <span>All departments</span>
              </div>
              <ul>
                <li>
                  <a href="#">Fresh Meat</a>
                </li>
                <li>
                  <a href="#">Vegetables</a>
                </li>
                <li>
                  <a href="#">Fruit &amp; Nut Gifts</a>
                </li>
                <li>
                  <a href="#">Fresh Berries</a>
                </li>
                <li>
                  <a href="#">Ocean Foods</a>
                </li>
                <li>
                  <a href="#">Butter &amp; Eggs</a>
                </li>
                <li>
                  <a href="#">Fastfood</a>
                </li>
                <li>
                  <a href="#">Fresh Onion</a>
                </li>
                <li>
                  <a href="#">Papayaya &amp; Crisps</a>
                </li>
                <li>
                  <a href="#">Oatmeal</a>
                </li>
                <li>
                  <a href="#">Fresh Bananas</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <SearchProduct />
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="hero__search__phone__text">
                  <h5>+65 11.188.888</h5>
                  <span>support 24/7 time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="breadcrumb-section set-bg"
      style={{
        backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="breadcrumb__text">
              <h2>Edit Information</h2>
              <div className="breadcrumb__option">
                <a href="./">Home</a>
                <span>Edit Information</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container-edit">

      <div className="container-edit-form">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          scrollToFirstError
        >

          <Form.Item
            name="username"
            label="username"
            rules={[
              {
                type: "text",
              },
              {
                min: 6,
              },
              // {
              //   required: true,
              //   message: "Please input your username!",
              // },
              // {
              //   async validator(_, value) {
              //     const data = await handleCheckUser();

              //     if (data.data.status === 404 && disableverify === false) {
              //       console.log(disableverify);
              //       console.log("user is already taken!");
              //       return Promise.reject(new Error("user is already taken!"));
              //     }
              //     return Promise.resolve();
              //   },
              // },
            ]}

          >
            <Input disabled />
          </Form.Item>

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

              ({ getFieldValue }) => ({
                validator(_, value) {
                  var mailformat =
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                  if (
                    form.getFieldValue("username") !== undefined &&
                    getFieldValue("username").length > 6 &&
                    value.match(mailformat)
                  ) {
                    setDisable(false);
                    // console.log(typeof getFieldValue("username").length);
                    return Promise.resolve();
                  }
                  setDisable(true);
                  // return Promise.reject(
                  //   new Error("username must be at least 6 characters")
                  // );
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                min: 10,
                message: "phone must have at  10 numbers",
              },
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <InputNumber
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div></>

  );
};

export default EditUser;
