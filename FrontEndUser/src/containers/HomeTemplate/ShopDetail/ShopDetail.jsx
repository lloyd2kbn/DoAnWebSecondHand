import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doPost } from "../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import styles from "./ShopDetail.module.scss";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";

// Import Swiper React components

import Image from "rc-image";
import useProductDetail from "./hook/useProductDetail";
function ShopDetail() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [quantity, setQuantity] = useState();
  const { product, loading } = useProductDetail(id);
  console.log(product);
  console.log(id);
  const handleChangeQuatity = (id) => {
    (async () => {
      try {
        const data = await doPost(`cart/addUpdateRemove?action=add`, {
          productId: id,
          quantity: quantity,
        });
        console.log(data);
        navigate("/shoppingCart");
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    })();
  };
  return (
    <>
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
        data-setbg="img/breadcrumb.jpg"
      >
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Vegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <a href="./">Home</a>
                  <a href="./">Vegetables</a>
                  <span>Vegetable’s Package</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* Breadcrumb Section End */}
      {/* Product Details Section Begin */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <Image
                    className="product__details__pic__item--large"
                    src= {`/assets/img/secondhand/accessories/${product?.imageEntity?.[0].url}`}
                  />
                </div>
                {/* <div className={styles.wrapper}></div> */}
                {/* <div className="product__details__pic__slider owl-carousel">
                  <Image
                    // data-imgbigurl="img/product/details/product-details-2.jpg"
                    src="/assets/img/product/details/thumb-1.jpg"
                  />
                  <Image
                    // data-imgbigurl="img/product/details/product-details-3.jpg"
                    src="/assets/img/product/details/thumb-2.jpg"
                  />
                  <Image
                    data-imgbigurl="img/product/details/product-details-5.jpg"
                    src="assets/img/product/details/thumb-3.jpg"
                  />
                </div> */}
              </div>
            </div>
            {product && (
              <div className="col-lg-6 col-md-6">
                <div className="product__details__text">
                  <h3>{product.name}</h3>
                  <div className="product__details__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star-half-o" />
                    <span>(18 reviews)</span>
                  </div>
                  <div className="product__details__price">
                    {" "}
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </div>
                  <p>
                   {product?.descriptions}
                  </p>
                  <div className="product__details__quantity">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input
                          onChange={(e) => setQuantity(e.target.value)}
                          type="number"
                          name="points"
                          min="0"
                          max="100"
                          step="1"
                          defaultValue={1}
                          onInput={(e) =>
                            e.target.value < 1
                              ? (e.target.value = 1)
                              : (e.target.value = e.target.value.slice(0, 2))
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => handleChangeQuatity(product.id)}
                    className="primary-btn"
                  >
                    ADD TO CARD
                  </div>
                  <a href="#" className="heart-icon">
                    <span className="icon_heart_alt" />
                  </a>
                  <ul>
                    <li>
                      <b>sourceOrigin</b> <span>{product.sourceOrigin}</span>
                    </li>
                    <li>
                      <b>Shipping</b>{" "}
                      <span>
                        01 day shipping. <samp>Free pickup today</samp>
                      </span>
                    </li>
                    <li>
                      <b>Weight</b> <span>0.5 kg</span>
                    </li>
                    <li>
                      <b>Share on</b>
                      <div className="share">
                        <a href="#">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter" />
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram" />
                        </a>
                        <a href="#">
                          <i className="fa fa-pinterest" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui.
                        Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
      {/* Related Product Section Begin */}
      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage:
                      "url(" + "assets/img/product/product-1.jpg" + ")",
                  }}
                  data-setbg="assets/img/product/product-1.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage:
                      "url(" + "assets/img/product/product-2.jpg" + ")",
                  }}
                  data-setbg="assets/img/product/product-2.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage:
                      "url(" + "assets/img/product/product-3.jpg" + ")",
                  }}
                  data-setbg="assets/img/product/product-3.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage:
                      "url(" + "assets/img/product/product-7.jpg" + ")",
                  }}
                  data-setbg="assets/img/product/product-7.jpg"
                >
                  <ul className="product__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related Product Section End */}
    </>
  );
}

export default ShopDetail;
