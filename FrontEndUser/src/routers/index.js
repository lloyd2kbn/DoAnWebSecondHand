// import Login from "../containers/HomeTemplate/Login";
import BlogDetail from "../containers/HomeTemplate/BlogDetail";
import Product from "../containers/HomeTemplate/product/Product";
import Blog from "../containers/HomeTemplate/Blog";
import CheckOut from "../containers/HomeTemplate/CheckOut";
import Contact from "../containers/HomeTemplate/Contact";
import Home from "../containers/HomeTemplate/Home";
import ShopDetail from "../containers/HomeTemplate/ShopDetail";
import ShopGrid from "../containers/HomeTemplate/ShopGrid";
import ShoppingCart from "../containers/HomeTemplate/ShoppingCart";
import Register from "../containers/HomeTemplate/Register";
import Login from "../containers/HomeTemplate/Login/Login";
import Wishlist from "../containers/HomeTemplate/Wishlist";
import EditUser from "../containers/HomeTemplate/EditUser";
import Sell from "../containers/HomeTemplate/Sell";
import ForgotPassword from "../containers/HomeTemplate/ForgotPassword";
import ManageOrder from "../containers/HomeTemplate/MangageOrder";
import ManageSell from "../containers/HomeTemplate/ManageSell/ManageSell";
const publicRouterUser = [
  { path: "/", component: Home },
  { path: "/blogDetail", component: BlogDetail },
  { path: "/blog", component: Blog },
  { path: "/checkout", component: CheckOut },
  { path: "/contact", component: Contact },
  { path: "/home", component: Home },
  { path: "/:id", component: ShopDetail },
  { path: "/shopDetail", component: ShopDetail },
  { path: "/shopGrid", component: ShopGrid },
  { path: "/shopGrid/:id", component: ShopGrid },
  { path: "/shoppingCart", component: ShoppingCart },
  { path: "/wishlist", component: Wishlist },
  { path: "/edituser", component: EditUser },
  { path: "/sell", component: Sell },
  { path: "/product", component: Product, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/login", component: Login, layout: null },
  { path: "/manageOrder", component: ManageOrder },
  { path: "/manageSell", component: ManageSell },
  { path: "/forgotpassword", component: ForgotPassword, layout: null },
];
export { publicRouterUser };
