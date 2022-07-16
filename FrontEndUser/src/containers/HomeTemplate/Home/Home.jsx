import React, { useEffect, useState } from "react";
import { doGet, doPost } from "../../../utils/api/api";
import { Link } from "react-router-dom";
import SearchProduct from "../../../components/Layout/Search/SearchProduct";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
import NavBelowHeader from "../../../components/Layout/NavBelowHeader/NavBelowHeader";
import { Pagination } from "antd";

function Home() {
  const [product, setProduct] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [current, setCurrent] = useState(1);
  const [currentCategory, setCurrentCategory] = useState(0);
  const { t, i18n } = useTranslation();
  // console.log(pageIndex)
  // console.log(currentCategory)

  // const [randomProduct, setRandomProduct] = useState([]);
  const [productSilder1, setProductSilder1] = useState([]);
  const [productSilder2, setProductSilder2] = useState([]);
  const [productsilder3, setProductSilder3] = useState([]);

  const handleAddCart = (id) => {
    console.log(id);
    (async () => {
      try {
        const data = await doPost(`cart/addUpdateRemove?action=add`, {
          productId: id,
          quantity: 1,
        });
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const handleAllProduct = async () => {
    try {
      const { data } = await doGet(
        `product/ShowAndsearch?searchValue=all&pageIndex=${pageIndex}`
      );
      // console.log(data.data.products);
      setProduct(data.data.products);
      setCurrentCategory(0);
    } catch (e) {
      console.log(e);
      // setNavigate(true);
    }
  };

  const handleRandomProduct = async () => {
    try {
      const { data } = await doGet(`product/randomProduct?numberProduct=9`);
      // console.log(data.data);
      // console.log(data.data.slice(0, 3));
      // console.log(data.data.slice(3, 6));
      // console.log(data.data.slice(6, 9));
      setProductSilder1(data.data.slice(0, 3));
      setProductSilder2(data.data.slice(3, 6));
      setProductSilder3(data.data.slice(6, 9));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (currentCategory == 0) {
          handleRandomProduct();
          handleAllProduct();
        }
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  }, [pageIndex]);

  const handleAccessories = () => {
    (async () => {
      try {
        const { data } = await doGet(
          "category/showCategory?nameCategory=accessories"
        );
        // console.log(data.data.productResponses);
        setProduct(data.data.productResponses);
        setCurrentCategory(1);
        setCurrent(1);
        setPageIndex(0);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };
  const handleouterwear = () => {
    (async () => {
      try {
        const { data } = await doGet(
          "category/showCategory?nameCategory=outerwear"
        );
        // console.log(data.data.productResponses);

        setProduct(data.data.productResponses);
        setCurrentCategory(1);
        setCurrent(1);
        setPageIndex(0);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };

  const handletops = () => {
    (async () => {
      try {
        const { data } = await doGet("category/showCategory?nameCategory=tops");
        // console.log(data.data.productResponses);
        setProduct(data.data.productResponses);
        setCurrentCategory(1);
        setCurrent(1);
        setPageIndex(0);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };

  const handlebottoms = () => {
    (async () => {
      try {
        const { data } = await doGet(
          "category/showCategory?nameCategory=bottoms"
        );
        // console.log(data.data.productResponses);
        setProduct(data.data.productResponses);
        setCurrentCategory(1);
        setCurrent(1);
        setPageIndex(0);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };

  const handlefootwear = () => {
    (async () => {
      try {
        const { data } = await doGet(
          "category/showCategory?nameCategory=footwear"
        );
        // console.log(data.data.productResponses);
        setProduct(data.data.productResponses);
        setCurrentCategory(1);
        setCurrent(1);
        setPageIndex(0);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };
  const handleWishList = (id) => {
    (async () => {
      try {
        const { data } = await doGet(`wishlist/addWishList?iDProduct=${id}`);
        // console.log(data);
      } catch (e) {
        console.log(e);
        // setNavigate(true);
      }
    })();
  };

  return (
    <>
      <div>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="hero__categories">
                  <div className="hero__categories__all">
                    <i className="fa fa-bars" />
                    <span>{t("navHeader.categories")}</span>
                  </div>
                  <ul>
                    <li>
                      <Link to="/shopGrid/1">{t("navHeader.accessories")}</Link>
                    </li>
                    <li>
                      <Link to="/shopGrid/2">{t("navHeader.outerwear")}</Link>
                    </li>
                    <li>
                      <Link to="/shopGrid/3">{t("navHeader.footwear")}</Link>
                    </li>
                    <li>
                      <Link to="/shopGrid/4">{t("navHeader.tops")}</Link>
                    </li>
                    <li>
                      <Link to="/shopGrid/5">{t("navHeader.bottoms")}</Link>
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
                      <h5>+84 395956546</h5>
                      <span> {t("navHeader.support")}</span>
                    </div>
                  </div>
                </div>
                <div
                  className="hero__item set-bg"
                  data-setbg="img/hero/banner.jpg"
                  style={{
                    backgroundImage:
                      "url(" + "assets/img/hero/banner.jpg" + ")",
                  }}
                >
                  <div className="hero__text">
                    <span>Second Hand Town</span>
                    <h2>
                      {t("home.title")}
                      <br />
                      {t("home.contents_1")}
                    </h2>
                    <p>{t("home.contents_2")}</p>
                    <a href="#" className="primary-btn">
                      {t("home.button")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories">
          <div className="container">
            <div className="row">
              <OwlCarousel
                items={4}
                className="categories__slider owl-carousel"
                loop={true}
                autoPlay={true}
              >
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/categories/acessories.jpg" + ")",
                    }}
                    data-setbg="assets/img/categories/acessories.jpg"
                  >
                    <h5>
                      <a href="#">{t("home.accessories")}</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/categories/outerwear.jpg" + ")",
                    }}
                    data-setbg="assets/img/categories/outerwear.jpg"
                  >
                    <h5>
                      <a href="#">{t("home.outerwear")}</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/categories/tops.jpg" + ")",
                    }}
                    data-setbg="assets/img/categories/tops.jpg"
                  >
                    <h5>
                      <a href="#">{t("home.top")}</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/categories/bottom.jpg" + ")",
                    }}
                    data-setbg="assets/img/categories/bottom.jpg"
                  >
                    <h5>
                      <a href="#">{t("home.bottoms")}</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    style={{
                      backgroundImage:
                        "url(" + "assets/img/categories/footwear.jpg" + ")",
                    }}
                    data-setbg="assets/img/categories/footwear.jpg"
                  >
                    <h5>
                      <a href="#">{t("home.footwear")}</a>
                    </h5>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        {/* Featured Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>{t("home.FeaturedProduct")}</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li
                      className="active"
                      data-filter="*"
                      onClick={handleAllProduct}
                    >
                      {t("home.all")}
                    </li>
                    <li data-filter=".accessories" onClick={handleAccessories}>
                      {t("home.accessories")}
                    </li>
                    <li data-filter=".outerwear" onClick={handleouterwear}>
                      {t("home.outerwear")}
                    </li>
                    <li data-filter=".tops" onClick={handletops}>
                      {t("home.top")}
                    </li>
                    <li data-filter=".bottoms" onClick={handlebottoms}>
                      {t("home.bottoms")}
                    </li>
                    <li data-filter=".footwear" onClick={handlefootwear}>
                      {t("home.footwear")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {product &&
                product.map((items, index) => (
                  <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                    <div className="featured__item">
                      <div
                        className="featured__item__pic set-bg"
                        style={{
                          backgroundImage:
                            "url(" +
                            `/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}` +
                            ")",
                        }}
                        data-setbg="assets/img/featured/feature-2.jpg"
                      >
                        <ul className="featured__item__pic__hover">
                          <li>
                            <a>
                              <i
                                onClick={() => handleWishList(items.id)}
                                className="fa fa-heart"
                              />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i className="fa fa-retweet" />
                            </a>
                          </li>
                          <li>
                            <a>
                              <i
                                onClick={() => handleAddCart(items.id)}
                                className="fa fa-shopping-cart"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <Link to={{ pathname: `/${items.id}` }}>
                            {items.name}
                          </Link>
                        </h6>
                        <h5 fontSize="16px" fontWeight="bold" mr={1}>
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(items.price)}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <Pagination
          style={{ textAlign: "center", position: "relative", bottom: "35px" }}
          current={current}
          defaultCurrent={1}
          onChange={(e) => {
            if (currentCategory == 0) {
              setPageIndex(e - 1);
              setCurrent(e);
            }
          }}
          total={80}
        />
        {/* Featured Section End */}
        {/* Banner Begin */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="assets/img/banner/banner-1.jpg" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="assets/img/banner/banner-2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
        {/* Latest Product Section Begin */}
        <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>{t("home.LatestProducts")}</h4>
                  <OwlCarousel
                    items={1}
                    loop
                    className="latest-product__slider owl-carousel"
                  >
                    <div className="latest-prdouct__slider__item">
                      {productSilder1 &&
                        productSilder1.map((items, index) => (
                          <a
                            key={index}
                            href="#"
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                    <div className="latest-prdouct__slider__item">
                      {productSilder1 &&
                        productSilder1.map((items, index) => (
                          <a
                            href="#"
                            key={index}
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>{t("home.TopSaleProducts")}</h4>
                  <OwlCarousel
                    items={1}
                    loop
                    className="latest-product__slider owl-carousel"
                  >
                    <div className="latest-prdouct__slider__item">
                      {productSilder2 &&
                        productSilder2.map((items, index) => (
                          <a
                            href="#"
                            key={index}
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                    <div className="latest-prdouct__slider__item">
                      {productSilder2 &&
                        productSilder2.map((items, index) => (
                          <a
                            href="#"
                            key={index}
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                  </OwlCarousel>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>{t("home.SaleOff")}</h4>
                  <OwlCarousel
                    items={1}
                    loop
                    className="latest-product__slider owl-carousel"
                  >
                    <div className="latest-prdouct__slider__item">
                      {productsilder3 &&
                        productsilder3.map((items, index) => (
                          <a
                            href="#"
                            key={index}
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                    <div className="latest-prdouct__slider__item">
                      {productsilder3 &&
                        productsilder3.map((items, index) => (
                          <a
                            href="#"
                            key={index}
                            className="latest-product__item"
                          >
                            <div className="latest-product__item__pic">
                              <img
                                src={`/assets/img/secondhand/accessories/${items?.imageEntity[0]?.url}`}
                                style={{ width: "80px", height: "100px" }}
                              />
                            </div>
                            <div className="latest-product__item__text">
                              <h6> {items.name}</h6>
                              <span> {items.price} ₫</span>
                            </div>
                          </a>
                        ))}
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Product Section End */}
        {/* Blog Section Begin */}
        {/* <section className="from-blog spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title from-blog__title">
                  <h2>From The Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="assets/img/blog/blog-1.jpg" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Cooking tips make cooking simple</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="assets/img/blog/blog-2.jpg" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">6 ways to prepare breakfast for 30</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="blog__item">
                  <div className="blog__item__pic">
                    <img src="assets/img/blog/blog-3.jpg" />
                  </div>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <i className="fa fa-calendar-o" /> May 4,2019
                      </li>
                      <li>
                        <i className="fa fa-comment-o" /> 5
                      </li>
                    </ul>
                    <h5>
                      <a href="#">Visit the clean farm in the US</a>
                    </h5>
                    <p>
                      Sed quia non numquam modi tempora indunt ut labore et
                      dolore magnam aliquam quaerat{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Blog Section End */}
      </div>
    </>
  );
}

export default Home;
