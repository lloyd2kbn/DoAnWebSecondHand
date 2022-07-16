import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import { Link } from "react-router-dom";
import { doGet } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import NavBelowHeader from "../../../components/Layout/NavBelowHeader/NavBelowHeader";
function Wishlist(props) {
  const [dataWishList, setDataWishList] = useState([]);
  const [checkData, setCheckData] = useState(true);
  const navigate = useNavigate();
  console.log("dataWishlish"+dataWishList)
  useEffect(() => {
    (async () => {
      try {
        const { data } = await doGet(`wishlist/findAll?action=show`);
        console.log(data);
        setDataWishList(data);
        setCheckData(true);
      } catch (e) {
        console.log(e);
        console.log("ahihi");
        navigate("/login");
      }
    })();
  }, [checkData]);
  const handleRemove = (id) => {
    (async () => {
      try {
        const { data } = await doGet(
          `wishlist/findAll?action=remove&favProductId=${id}`
        );
        console.log(data);
        setCheckData(false);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };
  return (
    <>
    <NavBelowHeader></NavBelowHeader>
    
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
                <h2>Wishlist</h2>
                <div className="breadcrumb__option">
                  <a href="./">Home</a>
                  <span>Wishlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {dataWishList &&
                      dataWishList.map((items, index) => (
                          
                        <tr key={index}>
                          {console.log("vc"+items?.productEntities?.imageEntity?.[0]?.url)}
                          <td className="shoping__cart__item">
                            <img  style={{
                          backgroundImage:
                            "url(" +
                            `/assets/img/secondhand/accessories/${items?.productEntities?.imageEntity?.[0]?.url}` +
                            ")",
                            width:"50px",
                            height:"50px",
                            backgroundSize:"cover"
                        }}/>
                            <h5>{items.productEntities.name}</h5>
                          </td>
                          <td className="shoping__cart__price">
                            {" "}
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(items.productEntities.price)}
                          </td>
                          <td className="shoping__cart__item__close">
                            <span
                              className="icon_close"
                              onClick={() =>
                                handleRemove(items.productEntities.id)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to="/" className="primary-btn cart-btn">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Wishlist.propTypes = {};

export default Wishlist;
