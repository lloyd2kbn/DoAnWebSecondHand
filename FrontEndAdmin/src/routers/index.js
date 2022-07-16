// import Login from "../containers/HomeTemplate/Login";
import Product from "../views/Product/Product";
import Order from "../views/Order/Order";
import Login from "../views/Login/Login";
import Homepage from "../views/Homepage/Homepage";
import "antd/dist/antd.css";
import User from "../views/User/User";
import AddProduct from "../components/AddProduct/AddProduct";
import DetailOrder from "../components/DetailOrder/DetailOrder";
import DetailProduct from "../components/DetailProduct/DetailProduct";
import DetailSell from "../components/DetailSell/DetailSell";
import DetailUser from "../components/DetailUser/DetailUser";
import ListOrder from "../components/ListOrder/ListOrder";
import ListProduct from "../components/ListProduct/ListProduct";
import ListSell from "../components/ListSell/ListSell";
import ListUser from "../components/ListUser/ListUser";
const publicRouterUser = [
  { path: "/", component: Login, layout: null },
  { path: "/homepage", component: Homepage },
  { path: "/user", component: User },
  { path: "/order", component: Order },
  { path: "/product", component: Product },
  // 
  {path:"/addProduct",component:AddProduct},
  {path:"/detailOrder",component:DetailOrder},
  {path:"/detailProduct",component:DetailProduct},
  {path:"/detailSell",component:DetailSell},
  {path:"/detailSell",component:DetailSell},
  {path:"/listUser/:id",component:DetailUser},//done
  {path:"/listUser/:id/:id",component:DetailOrder},//test
  {path:"/detailUser",component:DetailUser},
  {path:"/listOrder",component:ListOrder},//done
  {path:"/listOrder/:id",component:DetailOrder},
  {path:"/listProduct",component:ListProduct},
  {path:"/listSell",component:ListSell},
  {path:"/listUser",component:ListUser},//done
  {path:"/listProduct/:id",component:DetailProduct},

];
export { publicRouterUser };
