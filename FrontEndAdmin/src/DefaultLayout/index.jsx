import { useState, useEffect } from "react";
import classNames from "classnames";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";

function DefaultLayout({ children }) {
  const [navShow, setNavShow] = useState([false, false, false, false]);

  const handleNavShow = (index) => {
    setNavShow([
      ...navShow.slice(0, index),
      !navShow[index],
      ...navShow.slice(index + 1),
    ]);
  };
  return (
    <div>
      <div className="App">
        <header
          id="header"
          className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered"
        >
          <div className="navbar-nav-wrap">
            <div className="navbar-brand-wrapper">
              {/* Logo */}
              <a className="navbar-brand" to="/" href="#">
                <img
                  className="navbar-brand-logo"
                  src="assets\svg\logos\logo.svg"
                  alt="Logo"
                />
                <img
                  className="navbar-brand-logo-mini"
                  src="assets\svg\logos\logo-short.svg"
                  alt="Logo"
                />
              </a>
              {/* End Logo */}
            </div>
            <div className="navbar-nav-wrap-content-left">
              {/* Navbar Vertical Toggle */}
              <button
                type="button"
                className="js-navbar-vertical-aside-toggle-invoker close mr-3"
              >
                <i
                  className="tio-first-page navbar-vertical-aside-toggle-short-align"
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Collapse"
                />
                <i
                  className="tio-last-page navbar-vertical-aside-toggle-full-align"
                  data-template='<div class="tooltip d-none d-sm-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Expand"
                />
              </button>
              {/* End Navbar Vertical Toggle */}
              {/* Search Form */}
              {/* Bỏ Search form */}
              {/* End Search Form */}
            </div>
            {/* Secondary Content */}
            <div className="navbar-nav-wrap-content-right">
              {/* Navbar */}
              <ul className="navbar-nav align-items-center flex-row">
                <li className="nav-item d-md-none">
                  {/* Search Trigger */}
                  <div className="hs-unfold">
                    <a
                      className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle"
                      href="javascript:;"
                      data-hs-unfold-options='{
                        "target": "#searchDropdown",
                        "type": "css-animation",
                        "animationIn": "fadeIn",
                        "hasOverlay": "rgba(46, 52, 81, 0.1)",
                        "closeBreakpoint": "md"
                      }'
                    >
                      <i className="tio-search" />
                    </a>
                  </div>
                  {/* End Search Trigger */}
                </li>
                {/* Bỏ Notification (Thông báo trên thanh bar ngang) */}
                {/* <li class="nav-item d-none d-sm-inline-block">
                    </li> */}
                {/* Bỏ App (phần app trên thanh bar ngang) */}
                {/* <li class="nav-item d-none d-sm-inline-block">
                    </li> */}
                {/* Bỏ Activity (Phần Activity trên thanh bar ngang) */}
                {/* <li class="nav-item d-none d-sm-inline-block">
                    </li> */}
                <li className="nav-item">
                  {/* Account */}
                  <div className="hs-unfold">
                    <a
                      className="js-hs-unfold-invoker navbar-dropdown-account-wrapper"
                      href="javascript:;"
                      data-hs-unfold-options='{
                        "target": "#accountNavbarDropdown",
                        "type": "css-animation"
                      }'
                    >
                      <div className="avatar avatar-sm avatar-circle">
                        <img
                          className="avatar-img"
                          src="assets\img\160x160\img6.jpg"
                          alt="Image Description"
                        />
                        <span className="avatar-status avatar-sm-status avatar-status-success" />
                      </div>
                    </a>
                    <div
                      id="accountNavbarDropdown"
                      className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account"
                      style={{ width: "16rem" }}
                    >
                      <div className="dropdown-item-text">
                        <div className="media align-items-center">
                          <div className="avatar avatar-sm avatar-circle mr-2">
                            <img
                              className="avatar-img"
                              src="assets\img\160x160\img6.jpg"
                              alt="Image Description"
                            />
                          </div>
                          <div className="media-body">
                            <span className="card-title h5">Mark Williams</span>
                            <span className="card-text">mark@example.com</span>
                          </div>
                        </div>
                      </div>
                      <div className="dropdown-divider" />
                      {/* Unfold */}
                      {/* <div class="hs-unfold w-100">
                        <a class="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="javascript:;" data-hs-unfold-options='{
                            "target": "#navSubmenuPagesAccountDropdown1",
                            "event": "hover"
                          }'>
                          <span class="text-truncate pr-2" title="Set status">Set status</span>
                          <i class="tio-chevron-right navbar-dropdown-submenu-item-invoker ml-auto"></i>
                        </a>
      
                        <div id="navSubmenuPagesAccountDropdown1" class="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                          <a class="dropdown-item" href="#">
                            <span class="legend-indicator bg-success mr-1"></span>
                            <span class="text-truncate pr-2" title="Available">Available</span>
                          </a>
                          <a class="dropdown-item" href="#">
                            <span class="legend-indicator bg-danger mr-1"></span>
                            <span class="text-truncate pr-2" title="Busy">Busy</span>
                          </a>
                          <a class="dropdown-item" href="#">
                            <span class="legend-indicator bg-warning mr-1"></span>
                            <span class="text-truncate pr-2" title="Away">Away</span>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">
                            <span class="text-truncate pr-2" title="Reset status">Reset status</span>
                          </a>
                        </div>
                      </div> */}
                      {/* End Unfold */}
                      <a className="dropdown-item" href="#">
                        <span
                          className="text-truncate pr-2"
                          title="Profile & account"
                        >
                          Hồ sơ &amp; Tài khoản
                        </span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="text-truncate pr-2" title="Settings">
                          Cài đặt
                        </span>
                      </a>
                      <div className="dropdown-divider" />
                      {/* <a class="dropdown-item" href="#">
                        <div class="media align-items-center">
                          <div class="avatar avatar-sm avatar-dark avatar-circle mr-2">
                            <span class="avatar-initials">HS</span>
                          </div>
                          <div class="media-body">
                            <span class="card-title h5">Htmlstream <span class="badge badge-primary badge-pill text-uppercase ml-1">PRO</span></span>
                            <span class="card-text">hs.example.com</span>
                          </div>
                        </div>
                      </a> */}
                      {/* <div class="dropdown-divider"></div> */}
                      {/* Unfold */}
                      {/* <div class="hs-unfold w-100">
                        <a class="js-hs-unfold-invoker navbar-dropdown-submenu-item dropdown-item d-flex align-items-center" href="javascript:;" data-hs-unfold-options='{
                            "target": "#navSubmenuPagesAccountDropdown2",
                            "event": "hover"
                          }'>
                          <span class="text-truncate pr-2" title="Customization">Customization</span>
                          <i class="tio-chevron-right navbar-dropdown-submenu-item-invoker  ml-auto"></i>
                        </a>
      
                        <div id="navSubmenuPagesAccountDropdown2" class="hs-unfold-content hs-unfold-has-submenu dropdown-unfold dropdown-menu navbar-dropdown-sub-menu">
                          <a class="dropdown-item" href="#">
                            <span class="text-truncate pr-2" title="Invite people">Invite people</span>
                          </a>
                          <a class="dropdown-item" href="#">
                            <span class="text-truncate pr-2" title="Analytics">Analytics</span>
                            <i class="tio-open-in-new"></i>
                          </a>
                          <a class="dropdown-item" href="#">
                            <span class="text-truncate pr-2" title="Customize Front">Customize Front</span>
                            <i class="tio-open-in-new"></i>
                          </a>
                        </div>
                      </div> */}
                      {/* End Unfold */}
                      {/* <a class="dropdown-item" href="#">
                        <span class="text-truncate pr-2" title="Manage team">Manage team</span>
                      </a>
      
                      <div class="dropdown-divider"></div> */}
                      <a className="dropdown-item" href="#">
                        <span className="text-truncate pr-2" title="Sign out">
                          Đăng xuất
                        </span>
                      </a>
                    </div>
                  </div>
                  {/* End Account */}
                </li>
              </ul>
              {/* End Navbar */}
            </div>
            {/* End Secondary Content */}
          </div>
        </header>
        <div id="sidebarMain">
          <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered  ">
            <div className="navbar-vertical-container">
              <div className="navbar-vertical-footer-offset">
                <div className="navbar-brand-wrapper justify-content-between">
                  {/* Logo */}
                  <a
                    className="navbar-brand"
                    href="index.html"
                    aria-label="Front"
                  >
                    <img
                      className="navbar-brand-logo"
                      src="assets\svg\logos\logo.svg"
                      alt="Logo"
                    />
                    <img
                      className="navbar-brand-logo-mini"
                      src="assets\svg\logos\logo-short.svg"
                      alt="Logo"
                    />
                  </a>
                  {/* End Logo */}
                  {/* Navbar Vertical Toggle */}
                  <button
                    type="button"
                    className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark"
                  >
                    <i className="tio-clear tio-lg" />
                  </button>
                  {/* End Navbar Vertical Toggle */}
                </div>
                {/* Content */}
                <div className="navbar-vertical-content">
                  <ul className="navbar-nav navbar-nav-lg nav-tabs">
                    {/* Dashboards */}
                    <li className="navbar-vertical-aside-has-menu show">
                      <a
                        // to="/homepage"
                        className="js-nav-tooltip-link nav-link"
                        href="homepage"
                        title="Dashboards"
                      >
                        <i className="tio-home-vs-1-outlined nav-icon" />
                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                          Tổng quan
                        </span>
                      </a>
                    </li>
                    {/* End Dashboards */}
                    {/* Managerment */}
                    <li className="nav-item">
                      <small className="nav-subtitle" title="Pages">
                        Quản lý
                      </small>
                      <small className="tio-more-horizontal nav-subtitle-replacer" />
                    </li>
                    {/* End Managerment */}
                    {/* User Managerment */}
                    <li
                      className={classNames("navbar-vertical-aside-has-menu")}
                    >
                      <Link
                        to="/user"
                        className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle "
                        // href="javascript:;"
                        title="Customer Managerment"
                      >
                        <i className="tio-user-outlined nav-icon" />
                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                          Tài khoản{" "}
                        </span>
                      </Link>
                      <ul
                        className={classNames(
                          "js-navbar-vertical-aside-submenu nav nav-sub"
                        )}
                      >
                        <li className="nav-item">
                          <Link
                            to="/user"
                            className="nav-link "
                            title="Customers"
                          >
                            <span className="tio-circle nav-indicator-icon" />

                            <Link to="/listUser">
                              <span className="text-truncate">Danh sách</span>
                            </Link>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* End User Managerment */}
                    {/* Order Managerment */}
                    <li
                      className={classNames("navbar-vertical-aside-has-menu")}
                    >
                      <a
                        className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle "
                        href="javascript:;"
                        title="Order Management"
                        data-placement="left"
                        onClick={() => handleNavShow(1)}
                      >
                        <i className="tio-shopping-cart-outlined nav-icon" />
                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                          Sản phẩm
                        </span>
                      </a>
                      <ul
                        className={classNames(
                          "js-navbar-vertical-aside-submenu nav nav-sub"
                        )}
                      >
                        <li className="nav-item">
                          <a className="nav-link" title="Orders">
                            <span className="tio-circle nav-indicator-icon" />
                            <Link to="/listProduct">
                              <span className="text-truncate">Danh sách</span>
                            </Link>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* End Order Managerment */}
                    {/* Product Managerment */}
                    <li
                      className={classNames("navbar-vertical-aside-has-menu")}
                    >
                      <a
                        className="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle "
                        href="javascript:;"
                        title="Product Managerment"
                        onClick={() => handleNavShow(2)}
                      >
                        <i className="tio-shop-outlined nav-icon" />
                        <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                          Đơn hàng
                        </span>
                      </a>
                      <ul
                        className={classNames(
                          "js-navbar-vertical-aside-submenu nav nav-sub"
                        )}
                      >
                        <li className="nav-item">
                          <a className="nav-link " title="Products">
                            <span className="tio-circle nav-indicator-icon" />
                            <Link to="/listOrder">
                              <span className="text-truncate">Danh sách</span>
                            </Link>
                          </a>
                        </li>
                      </ul>
                    </li>
                    {/* End Product Managerment */}
                    {/* Sale Request Managerment */}

                    {/* No Sale Request Managerment */}
                    <li className="nav-item">
                      <div className="nav-divider" />
                    </li>
                    {/* Front Builder */}
                    {/* <li >
                        <a class="d-flex d-md-none nav-link nav-link-toggle" href="">
                        <i class="tio-tune nav-icon"></i>
                        </a>
                      </li> */}
                    {/* End Front Builder */}
                    {/* Front Builder */}
                    {/* <li class="nav-item nav-footer-item ">
                        <a class="d-none d-md-flex js-hs-unfold-invoker nav-link nav-link-toggle" href="javascript:;" data-hs-unfold-options='{
                            "target": "#styleSwitcherDropdown",
                            "type": "css-animation",
                            "animationIn": "fadeInRight",
                            "animationOut": "fadeOutRight",
                            "hasOverlay": true,
                            "smartPositionOff": true
                          }'>
                          <i class="tio-tune nav-icon"></i>
                        </a>
                        <a class="d-flex d-md-none nav-link nav-link-toggle" href="javascript:;">
                          <i class="tio-tune nav-icon"></i>
                        </a>
                      </li> */}
                    {/* End Front Builder */}
                    {/* Help */}
                    {/* <li class="navbar-vertical-aside-has-menu nav-footer-item ">
                        <a class="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " href="javascript:;" title="Help">
                          <i class="tio-home-vs-1-outlined nav-icon"></i>
                          <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Help</span>
                        </a>
      
                        <ul class="js-navbar-vertical-aside-submenu nav nav-sub">
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Resources &amp; tutorials">
                              <i class="tio-book-outlined dropdown-item-icon"></i> Resources &amp; tutorials
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Keyboard shortcuts">
                              <i class="tio-command-key dropdown-item-icon"></i> Keyboard shortcuts
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Connect other apps">
                              <i class="tio-alt dropdown-item-icon"></i> Connect other apps
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="What's new?">
                              <i class="tio-gift dropdown-item-icon"></i> What's new?
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Contact support">
                              <i class="tio-chat-outlined dropdown-item-icon"></i> Contact support
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    {/* End Help */}
                    {/* Language */}
                    {/* <li class="navbar-vertical-aside-has-menu nav-footer-item ">
                          <a class="js-navbar-vertical-aside-menu-link nav-link nav-link-toggle " href="javascript:;" title="Language">
                          <img class="avatar avatar-xss avatar-circle" src="assets\vendor\flag-icon-css\flags\1x1\us.svg" alt="United States Flag">
                          <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">Language</span>
                          </a>
      
                          <ul class="js-navbar-vertical-aside-submenu nav nav-sub">
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="English (US)">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\us.svg" alt="Flag">
                            English (US)
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="English (UK)">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg" alt="Flag">
                            English (UK)
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Deutsch">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\de.svg" alt="Flag">
                            Deutsch
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Dansk">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\dk.svg" alt="Flag">
                            Dansk
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="Italiano">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\it.svg" alt="Flag">
                            Italiano
                            </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" title="中文 (繁體)">
                            <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\cn.svg" alt="Flag">
                            中文 (繁體)
                            </a>
                          </li>
                          </ul>
                        </li> */}
                    {/* End Language */}
                  </ul>
                </div>
                {/* End Content */}
                {/* Footer */}
                <div className="navbar-vertical-footer">
                  <ul className="navbar-vertical-footer-list">
                    <li className="navbar-vertical-footer-list-item">
                      {/* Unfold */}
                      {/* <div class="hs-unfold">
                        <a class="hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle"  data-hs-unfold-options='{
                          "target": "#styleSwitcherDropdown",
                          "type": "css-animation",
                          "animationIn": "fadeInRight",
                          "animationOut": "fadeOutRight",
                          "hasOverlay": true,
                          "smartPositionOff": true
                          }'>
                          <i class="tio-tune"></i>
                        </a>
                        </div> */}
                      {/* End Unfold */}
                    </li>
                    <li className="navbar-vertical-footer-list-item">
                      {/* Other Links */}
                      {/* <div class="hs-unfold">
                        <a class="hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="" data-hs-unfold-options='{
                          "target": "#otherLinksDropdown",
                          "type": "css-animation",
                          "animationIn": "slideInDown",
                          "hideOnScroll": true
                          }'>
                          <i class="tio-help-outlined"></i>
                        </a>
      
                        <div id="otherLinksDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown">
                          <span class="dropdown-header">Help</span>
                          <a class="dropdown-item" href="#">
                          <i class="tio-book-outlined dropdown-item-icon"></i>
                          <span class="text-truncate pr-2" title="Resources &amp; tutorials">Resources &amp; tutorials</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <i class="tio-command-key dropdown-item-icon"></i>
                          <span class="text-truncate pr-2" title="Keyboard shortcuts">Keyboard shortcuts</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <i class="tio-alt dropdown-item-icon"></i>
                          <span class="text-truncate pr-2" title="Connect other apps">Connect other apps</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <i class="tio-gift dropdown-item-icon"></i>
                          <span class="text-truncate pr-2" title="What's new?">What's new?</span>
                          </a>
                          <div class="dropdown-divider"></div>
                          <span class="dropdown-header">Contacts</span>
                          <a class="dropdown-item" href="#">
                          <i class="tio-chat-outlined dropdown-item-icon"></i>
                          <span class="text-truncate pr-2" title="Contact support">Contact support</span>
                          </a>
                        </div>
                        </div> */}
                      {/* End Other Links */}
                    </li>
                    <li className="navbar-vertical-footer-list-item">
                      {/* Language */}
                      {/* <div class="hs-unfold">
                        <a class="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;" data-hs-unfold-options='{
                          "target": "#languageDropdown",
                          "type": "css-animation",
                          "animationIn": "slideInDown",
                          "hideOnScroll": true
                          }'>
                          <img class="avatar avatar-xss avatar-circle" src="assets\vendor\flag-icon-css\flags\1x1\us.svg" alt="United States Flag">
                        </a>
      
                        <div id="languageDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu navbar-vertical-footer-dropdown">
                          <span class="dropdown-header">Select language</span>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\us.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="English">English (US)</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="English">English (UK)</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\de.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="Deutsch">Deutsch</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\dk.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="Dansk">Dansk</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\it.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="Italiano">Italiano</span>
                          </a>
                          <a class="dropdown-item" href="#">
                          <img class="avatar avatar-xss avatar-circle mr-2" src="assets\vendor\flag-icon-css\flags\1x1\cn.svg" alt="Flag">
                          <span class="text-truncate pr-2" title="中文 (繁體)">中文 (繁體)</span>
                          </a>
                        </div>
                        </div> */}
                      {/* End Language */}
                    </li>
                  </ul>
                </div>
                {/* End Footer */}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
