import React from "react";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { useLocation,useNavigate} from "react-router-dom";
import { doGet, doPost } from "../../../utils/api/api";
import { useEffect,useState,useRef } from "react";
import "./checkout.scss"

function CheckOut() {
  const [orders, setOrders] = useState([]);
  const [total,setTotal]=useState(0);
  const [paypalLink,setPaypalLink]=useState("");
  const [alertPlaceOrder,setAlertPlaceOrder]=useState("");
  const navigate = useNavigate();

  const theARef=useRef("");

  //
  const [phoneNumber,setPhoneNumber]=useState("");
  const [address,setAdress]=useState("");

 
// get ALL Order
const handleAllOrder = async () => {
  try {
    const { data } = await doGet("http://localhost:8082/api/cart/listOrder");
    console.log(data.data);
    setOrders(data.data)
    // tinh tong tien 
    let total = 0;
    for (let i = 0; i < data.data.length; i++) {
      total += data.data[i].totalPrice;
    }
    setTotal(total)
    console.log("totalne"+total)

  } catch (e) {
    console.log(e);
  }
};
//
  const location = useLocation();
  const fromDashboard = location;
  console.log(location)
  useEffect(()=>{
    (async () => {
      try {
        handleAllOrder();
      } catch (e) {
        console.log(e);
      }
    })();
      
  },[fromDashboard.key])

  // handleCheckout
  const handleCheckout = async () => {
      var arrayIds=[];
      for (let i = 0; i < orders.length; i++) {
            arrayIds.push(orders[i].productEntities.id)
      }
      try {
      if(total&&address&&phoneNumber){
        const { data } = await doPost("http://localhost:8082/api/order/checkoutOrder",{
        idProducts:arrayIds,
        feeTotal:null,
        total:total,
        address:address,
        phoneNumber:phoneNumber
      });
      console.log("checkout",data) 
      handleAllOrder();
      navigate("/manageOrder");
      setAdress("");
      setPhoneNumber("")
      setAlertPlaceOrder("Bạn đã đặt hàng thành công")
      }
      else if(total){
        setAlertPlaceOrder("Bạn chưa nhập số điện thoại và địa chỉ")
      }else{
        setAlertPlaceOrder("Bạn chưa có đơn hàng nào")
      }
      
    } catch (e) {
      console.log(e);
    }
  }

  // handle OrderWith Papal
  const handleCheckoutPaypal=async(e)=>{
    if(paypalLink==""||theARef.current.href=="http://localhost:3000/checkout"||theARef.current.href=="http://localhost:3000/1"){
      e.preventDefault();
    }
    var arrayIds=[];
    for (let i = 0; i < orders.length; i++) {
          arrayIds.push(orders[i].productEntities.id)
    }
        try {
          const {data}=await doPost(`http://localhost:8082/api/payment/pay?price=${total}`,{
            idProducts:arrayIds,
            feeTotal:null,
            total:total
          })
          setPaypalLink(data.data);
          
          
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <>
      <div>
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
        {/* Hero Section End */}
        {/* Breadcrumb Section Begin */}
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
                  <h2>Checkout</h2>
                  <div className="breadcrumb__option">
                    <a href="./">Home</a>
                    <span>Checkout</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Breadcrumb Section End */}
        {/* Checkout Section Begin */}
        <section className="checkout spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h6>
                  <span className="icon_tag_alt" /> Have a coupon?{" "}
                  <a href="#">Click here</a> to enter your code
                </h6>
              </div>
            </div>
            <div className="checkout__form">
              <h4>Billing Details</h4>
              {/* <form> */}
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Fist Name<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Last Name<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input">
                      <p>
                        Country<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>
                        Address<span>*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="checkout__input__add"
                        value={address}
                        onChange={(e)=>{
                              setAdress(e.target.value)
                        }}
                      />
                      <input
                        type="text"
                        placeholder="Apartment, suite, unite ect (optinal)"
                      />
                    </div>
                    <div className="checkout__input">
                      <p>
                        Town/City<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>
                        Country/State<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input">
                      <p>
                        Postcode / ZIP<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Phone<span>*</span>
                          </p>
                          <input type="text"  value={phoneNumber} onChange={(e)=>{
                                  setPhoneNumber(e.target.value)
                          }} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <p>
                            Email<span>*</span>
                          </p>
                          <input type="text" />
                        </div>
                      </div>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc">
                        Create an account?
                        <input type="checkbox" id="acc" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page
                    </p>
                    <div className="checkout__input">
                      <p>
                        Account Password<span>*</span>
                      </p>
                      <input type="text" />
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="diff-acc">
                        Ship to a different address?
                        <input type="checkbox" id="diff-acc" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="checkout__input">
                      <p>
                        Order notes<span>*</span>
                      </p>
                      <input
                        type="text"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="checkout__order">
                      <h4>Your Order</h4>

                      <div className="checkout__order__products">
                        Products <span>Total</span>
                      </div>
                      <ul>
                        {
                          orders.map((order,index)=>{
                                return <li key={index}>
                                             {order.productEntities.name} 
                                             <span>
                                             {new Intl.NumberFormat("vi-VN", {
                                              style: "currency",
                                            currency: "VND",
                                             }).format(order.totalPrice)}
                                         </span>
                                      </li>
                          })
                        }
                        {/* <li>
                          Vegetable’s Package <span>$75.99</span>
                        </li>
                        <li>
                          Fresh Vegetable <span>$151.99</span>
                        </li>
                        <li>
                          Organic Bananas <span>$53.99</span>
                        </li> */}
                      </ul>
                      <div className="checkout__order__subtotal">
                        Subtotal <span>0</span>
                      </div>
                      <div className="checkout__order__total">
                        Total <span>     {new Intl.NumberFormat("vi-VN", {
                                              style: "currency",
                                            currency: "VND",
                                             }).format(total)}</span>
                      </div>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="acc-or">
                          Create an account?
                          <input type="checkbox" id="acc-or" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adip elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.
                      </p>
                      <div className="checkout__input__checkbox">
                        <label htmlFor="payment">
                          Check Payment
                          <input type="checkbox" id="payment" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="checkout__input__checkbox">
                               <img src="https://canhme.com/wp-content/uploads/2016/01/PayPal-logo.png" alt="" />
                               <a  ref={theARef} href={paypalLink}  target="_blank" onClick={(e)=>{
                                handleCheckoutPaypal(e)
                               }}>Paypal</a>
                               <button href="" className="checkoutPaypal" onClick={()=>{
                                          handleAllOrder();
                               }}>Checkout</button>
                      </div>
                      <button className="site-btn" onClick={handleCheckout}>
                        PLACE ORDER
                      </button>
                      <p style={{color:"red"}}>{alertPlaceOrder}</p>
                    </div>
                  </div>
                </div>
               {/* </form> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CheckOut;
