import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./sell.scss";
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Row,
  Upload,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { doGet, doPost } from "../../../utils/api/api";
import { debounce } from "lodash";
import Password from "antd/lib/input/Password";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import NavBelowHeader from "../../../components/Layout/NavBelowHeader/NavBelowHeader";
const { Option } = Select;

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
const layout = {
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

const Sell = () => {
  const [base64,setBase64]=useState([]);
  const [soFile,setSoFile]=useState(0);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const {email,name,price,size,brand,description,note,upload } = values;
    const { data } = await doPost("sell/postSell", {
      email,
      name,
      price,
      size,
      brand,
      description,
      note,
      upload:base64
      
    });
    navigate("/manageSell");
  };
  const handleBase64=()=>{
    var file = document.querySelector(
      'input[type=file]')['files'];

  for(var i=0;i<file.length;i++){
    var reader = new FileReader();
    console.log("next");
      
    reader.onload = function () {
       var  base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");
            setBase64([...base64,base64String]);
            setSoFile(soFile+1)
  
        
    }
    reader.readAsDataURL(file[i]);
  }
  }
  console.log(base64)
 
  return (
    <>
      <NavBelowHeader/>
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
                <h2>Sell Product</h2>
                <div className="breadcrumb__option">
                  <a href="./">Home</a>
                  <span>Sell Product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-sell">
        <div className="container-sell-form">
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="email"
              label="Email Seller"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  max: 10000000,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="size"
              label="Size"
              rules={[
                {
                  required: true,
                  message: "Please pick an size!",
                },
              ]}
            >
              <Radio.Group>
                <Radio.Button value="s">Size S</Radio.Button>
                <Radio.Button value="m">Size M</Radio.Button>
                <Radio.Button value="l">Size L</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="brand" label="Brand">
              <Input />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name="note" label="Note">
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Upload"
              // valuePropName="fileList"
              // getValueFromEvent={normFile}
              
            >
                   <input type="file" className="" multiple id="fileId" onChange={()=>{
                          handleBase64();
                   }}/>
                   <p>{soFile+" số files "}</p>
                   {
                    soFile>0? <Button onClick={()=>{
                          document.getElementById("fileId").value="";
                          setSoFile(0)
                          setBase64([])
                    }}>Hủy</Button>:""
                   }
                  
              {/* <Upload name="logo" action="/upload.do" listType="picture">
                <Button > <FontAwesomeIcon icon={faUpload} style={{marginRight:"10px"}}/> Click to upload</Button>
              </Upload> */}
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error("Should accept agreement")),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary"  htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sell;
