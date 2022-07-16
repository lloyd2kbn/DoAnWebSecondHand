
import "antd/dist/antd.css";
import { Space, Table, Tag ,Button} from "antd";
import React, {  useEffect ,useState} from "react";
import { doGet, doPost } from "../../../utils/api/api";
import {Link} from "react-router-dom";
// 

function ManageSell() {
  const [sells, setSells] = useState([]);
  const [change,setChange]=useState(false);

  // callAPI
  const columns = [
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
      render: (text) => <a>{text}</a>
    },
    ,
    {
      title: "idSell",
      dataIndex: "idSell",
      key: "idSell"
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Name Product",
      dataIndex: "nameProduct",
      key: "nameProduct"
    }
    ,
    {
      title: "Note",
      dataIndex: "note",
      key: "note"
    },  
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size"
    },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Space size="middle">
          <a style={{color:"green"}}>Đang chờ duyệt</a>
        </Space> 
      )
    },
    {
      title: "Cancel",
      key: "cancel",
      dataIndex: "cancel",
      render: (_, { idSell }) => (
        <>
            <Button onClick={()=>{
              handleOrderCancle(idSell);
            }}>Hủy</Button>
        </>
      )
    },
  ];
  const data=sells.map((item,index)=>{
        return {
          key:index,
          idSell:item.id,
          dateCreated:item.dateCreated.slice(0,10),
          brand:item.brand,
          description:item.description,
          email:item.email,
          nameProduct:item.nameProduct,
          note:item.note,
          price:item.price,
          size:item.size,
          status:"status",
          cancel:"cancel"
        }
  })
  // const data=[{
  //   key:"index",
  //   idSell:"idSell",
  //   dateCreated:"dateCreated",
  //   brand:"brand",
  //   description:"description",
  //   email:"email",
  //   nameProduct:"nameProduct",
  //   note:"note",
  //   price:"price",
  //   size:"size",
  //   status:"status",
  //   cancel:"cancel"
  // }]
  const handleOrderCancle=(id)=>{
    // console.log(id)
    (async () => {
      try {
        const { data } = await doPost(`sell/deleteSell/${id}`);
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
      const { data } = await doGet("sell/listSell");
      console.log(data.data);
      setSells(data.data)
    } catch (e) {
   
    }
  })();
}, [change]);
  return (
    <>
        <h3>Danh sách hàng đã đăng  </h3>
        <Table columns={columns} dataSource={data} />
        <Link to="/">Back</Link>
     
    </>
  );
}

export default ManageSell;
