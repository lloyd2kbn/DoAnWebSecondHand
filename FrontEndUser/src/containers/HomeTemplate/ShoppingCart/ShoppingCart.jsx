import React, { useState, useEffect } from "react";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { doGet, doPost } from "../../../utils/api/api";
import { useNavigate, Link } from "react-router-dom";
function ShoppingCart() {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [checkChage, setChechChange] = useState(true);
  const navigate = useNavigate();
  console.log(cartItem);
  const handleChangeQuatity = (e, id) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log(id);
    (async () => {
      try {
        const data = await doPost(`cart/addUpdateRemove?action=change`, {
          productId: id,
          quantity: e.target.value,
        });
        console.log(data);
        setChechChange(false);
        // console.log("input", checkChage);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleRemove = (id) => {
    (async () => {
      const { data } = await doPost("cart/addUpdateRemove?action=remove", {
        productId: id,
        quantity: 0,
      });

      // console.log(data);
      setChechChange(false);
    })();
  };
  const handleBackHome = () => {
    navigate("/");
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await doGet("cart/listCart");
        // console.log(data.data);
        setCartItem(data.data);
        setChechChange(true);
        // console.log("listcart", checkChage);
        let total = 0;
        for (let i = 0; i < data.data.length; i++) {
          total += data.data[i].totalPrice;
        }
        setTotalPrice(total);
      } catch (e) {
        console.log("aaaaa", e);

        console.log("status", e.status);
        navigate("/login");
      }
    })();
  }, [checkChage]);
  return (
    <>
      {/* Page Preloder */}

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

      {/* Breadcrumb Section Begin */}
      <section
        className="breadcrumb-section set-bg"
        style={{
          backgroundImage: "url(" + "assets/img/breadcrumb.jpg" + ")",
        }}
        data-setbg="assets/img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Shopping Cart</h2>
                <div className="breadcrumb__option">
                  <a href="./">Home</a>
                  <span>Shopping Cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Shoping Cart Section Begin */}
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItem &&
                      cartItem.map((items, key) => (
                        <tr key={key}>
                          <td className="shoping__cart__item">
                            <img
                              width={"50px"}
                              height={"50px"}
                              src={`/assets/img/secondhand/accessories/${items?.productEntities?.imageEntity?.[0].url}`}
                              alt="true"
                            />
                            <h5>{items.productEntities.name}</h5>
                          </td>
                          <td className="shoping__cart__price">
                            {" "}
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(items.productEntities.price)}
                          </td>
                          <td className="shoping__cart__quantity">
                            <div className="quantity">
                              <div
                                className="pro-qty"
                                style={{ width: "50px" }}
                              >
                                <input
                                  onChange={(e) =>
                                    handleChangeQuatity(
                                      e,
                                      items.productEntities.id
                                    )
                                  }
                                  type="number"
                                  name="points"
                                  min="0"
                                  max="100"
                                  step="1"
                                  defaultValue={items.quantity}
                                  onInput={(e) =>
                                    e.target.value < 1
                                      ? (e.target.value = items.quantity)
                                      : (e.target.value = e.target.value.slice(
                                          0,
                                          2
                                        ))
                                  }
                                />
                              </div>
                            </div>
                          </td>
                          <td className="shoping__cart__total">
                            {" "}
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(items.totalPrice)}
                          </td>
                          <td className="shoping__cart__item__close">
                            <span
                              onClick={() =>
                                handleRemove(items.productEntities.id)
                              }
                              className="icon_close"
                            />
                          </td>
                        </tr>
                      ))}

                    {/* <tr>
                      <td className="shoping__cart__item">
                        <img src="assets/img/cart/cart-2.jpg" alt="true" />
                        <h5>Fresh Garden Vegetable</h5>
                      </td>
                      <td className="shoping__cart__price">$39.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">$39.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close" />
                      </td>
                    </tr>
                    <tr>
                      <td className="shoping__cart__item">
                        <img src="assets/img/cart/cart-3.jpg" alt="true" />
                        <h5>Organic Bananas</h5>
                      </td>
                      <td className="shoping__cart__price">$69.00</td>
                      <td className="shoping__cart__quantity">
                        <div className="quantity">
                          <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                          </div>
                        </div>
                      </td>
                      <td className="shoping__cart__total">$69.99</td>
                      <td className="shoping__cart__item__close">
                        <span className="icon_close" />
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <div onClick={handleBackHome} className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </div>
                {/* <a href="#" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading" />
                  Upadate Cart
                </a> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      APPLY COUPON
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>
                    Subtotal{" "}
                    <span>
                      {" "}
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(totalPrice)}
                    </span>
                  </li>
                  <li>
                    Total <span>coming</span>
                  </li>
                </ul>

                <Link
                  to={{
                    pathname: "/checkout",
                  }}
                  className="primary-btn"
                >
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shoping Cart Section End */}
    </>
  );
}

export default ShoppingCart;
