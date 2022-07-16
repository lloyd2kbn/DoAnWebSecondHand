import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { Link } from "react-router-dom";
import { doGet } from "../../../../utils/api/api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { createBrowserHistory } from "history";

function Header(props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    console.log(lng);
    i18n.changeLanguage(lng);
    console.log(lng);
    localStorage.setItem("lang", lng);
  };

  const [userName, setUserName] = useState();
  const [checkLogin, setCheckLogin] = useState(true);
  console.log(checkLogin);
  useEffect(() => {
    const userName = localStorage.getItem("username");
    console.log(userName);
    if (userName !== null) {
      setUserName(userName);
      console.log(checkLogin);
      setCheckLogin(false);
      console.log(checkLogin);
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                {/* <div className="header__top__left">
                  <ul>
                    <li style={{ display: "flex" }}>
                      <i className="fa fa-user" aria-hidden="true"></i>
                      <p>
                        {" "}
                        {userName && checkLogin === false && (
                          <p> {userName} </p>
                        )}
                      </p>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  {/* <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div> */}
                  <div className="header__top__right__language">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ marginRight: "10px" }}
                    />
                    <div>{t("header.languages")}</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a onClick={() => changeLanguage("en")} href="#">
                          {t("header.languages_1")}
                        </a>
                      </li>
                      <li>
                        <a onClick={() => changeLanguage("vn")} href="#">
                          {" "}
                          {t("header.languages_2")}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <FormLogin
                    checkLogin={checkLogin}
                    setCheckLogin={setCheckLogin}
                  />
                  {/* <div className="header__top__right__auth">
                  <Link to={"/login"}>Login</Link>
                </div>
                <div className="header__top__right__auth">
                  <Link to={"/register"} style={{ marginLeft: "18px" }}>
                    {" "}
                    Register
                  </Link>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to="/">
                  <img src="assets/img/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <Link to={"/"}>{t("header.home")}</Link>
                  </li>
                  <li>
                    <Link to={"/shopGrid"}>{t("header.shop")}</Link>
                  </li>
                  <li>
                    <a href="#">{t("header.page")}</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <Link to={"/shoppingCart"}>{t("header.cart")}</Link>
                      </li>
                      <li>
                        <Link to={"/checkout"}>{t("header.checkout")}</Link>
                      </li>
                      <li>
                        <Link to={"/blogDetail"}>{t("header.details")}</Link>
                      </li>
                      <li>
                        <Link to={"/manageOrder"}>ManageOrder</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/blog"}>{t("header.blog")}</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>{t("header.contract")}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <Link to="/sell">
                      <i className="fa fa-dollar"></i>
                      {/* <span>1</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist">
                      <i className="fa fa-heart"></i>
                      {/* <span>1</span> */}
                    </Link>
                  </li>
                  <li>
                    <Link to="/shoppingCart">
                      <i className="fa fa-shopping-bag"></i>
                      {/* <span>3</span> */}
                    </Link>
                  </li>
                </ul>
                <div className="header__cart__price">
                  {t("header.item")}: <span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <NavBelowHeader /> */}
    </>
  );
}
function FormLogin({ checkLogin, setCheckLogin }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("username");
    if (userName !== null) {
      setUserName(userName);
      console.log(checkLogin);
      setCheckLogin(false);
      console.log(checkLogin);
    }
  }, []);

  const handleLogout = () => {
    const userName = localStorage.getItem("username");
    (async () => {
      const data = await doGet(`auth/logout?userName=${userName}`);
      console.log(data);
      localStorage.removeItem("username");
      setCheckLogin(true);
      navigate("/");
    })();
  };

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      setVisible(false);
      navigate("/edituser", { replace: true });
    }
    if (e.key === "2") {
      setVisible(false);
      navigate("/", { replace: true });
    }
    if (e.key === "3") {
      setVisible(false);
      handleLogout();
    }
  };

  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: t("header.editUser"),
          key: "1",
        },
        {
          label: t("header.history"),
          key: "2",
        },
        {
          label: t("header.logout"),
          key: "3",
        },
      ]}
    />
  );

  if (checkLogin === true) {
    console.log(checkLogin);
    return (
      <>
        <div className="header__top__right__auth">
          <Link to={"/login"}>{t("header.login")}</Link>
        </div>
        <div className="header__top__right__auth">
          <Link to={"/register"} style={{ marginLeft: "18px" }}>
            {t("header.register")}
          </Link>
        </div>
      </>
    );
  } else {
    console.log(checkLogin);
    return (
      <div className="header__top__right__language">
        <Dropdown
          overlay={menu}
          onVisibleChange={handleVisibleChange}
          visible={visible}
        >
          <Space>
            <i className="fa fa-user" aria-hidden="true"></i>
            <p> {userName && checkLogin === false && <p> {userName} </p>}</p>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    );
  }
}
export default Header;
