
import "antd/dist/antd.css";
import { Space, Table, Tag ,Button} from "antd";
import React, {  useEffect ,useState} from "react";
import { doGet, doPost } from "../../../utils/api/api";
import {Link} from "react-router-dom";
// 

function ManageOrder() {
  const [orders, setOrders] = useState([]);
  const [change,setChange]=useState(false);
  // callAPI
  const columns = [
    {
      title: "Ngày tạo",
      dataIndex: "ngaytao",
      key: "ngaytao",
      render: (text) => <a>{text}</a>
    },
    {
      title: "Số điện thoại",
      dataIndex: "sdt",
      key: "sdt"
    },
    {
      title: "Mã đơn hàng ",
      dataIndex: "madh",
      key: "madh"
    },
    {
      title: "Địa chỉ",
      dataIndex: "diachi",
      key: "diachi"
    },
    {
      title: "Tổng tiền",
      key: "tongtien",
      dataIndex: "tongtien",
      render: (_, { tongtien }) => (
        <>
          {tongtien.map((tongtien) => {
            let color = tongtien.length > 5 ? "red" : "blue";
  
           
  
            return (
              <Tag color={color} key={tongtien}>
                {tongtien.toUpperCase()}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "Trạng thái đơn hàng",
      key: "trangthai",
      render: (_, record) => (
        <Space size="middle">
          <a style={{color:"green"}}>Đang giao</a>
        
        </Space>
        
      )
    },
    {
      title: "Hủy đơn hàng",
      key: "huydh",
      dataIndex: "huydh",
      render: (_, { madh }) => (
        <>
            <Button onClick={()=>{
              handleOrderCancle(madh);
            }}>Hủy</Button>
        </>
      )
    },
  ];
  const data=orders.map((item,index)=>{
        return {
          key:index,
          ngaytao:item.dateCreated.slice(0,10),
          sdt:item.phoneNumber,
          diachi:item.address,
          madh:item.id,
          tongtien:[`${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(item.totalPriceOrder)}`]
        }
  })
  const handleOrderCancle=(id)=>{
    // console.log(id)
    (async () => {
      try {
        const { data } = await doPost(`order/deleteOrder/${id}`);
        console.log(data);
        setChange(!change)
      } catch (e) {
        console.log(e);   
      }
    })();
  }
useEffect(() => {
  (async () => {
    try {
      const { data } = await doGet("order/listOrder");
      console.log(data.data);
      setOrders(data.data)
    } catch (e) {
   
    }
  })();
}, [change]);
  return (
    <>
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
                <h2>Order History</h2>
                <div className="breadcrumb__option">
                  <a href="./">Home</a>
                  <span>Order History</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Table columns={columns} dataSource={data} />
        <Link to="/">Back</Link>
     
    </>
  );
}

export default ManageOrder;
