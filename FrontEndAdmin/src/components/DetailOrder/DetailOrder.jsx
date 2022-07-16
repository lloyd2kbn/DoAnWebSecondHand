import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./DetailOrder.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";
import { doGet, doPost } from "../../utils/api/api";
import { useParams } from "react-router-dom";
export const defaultValue = {};

function DetailOrder() {
  const [isReload, setIsReload] = useState(false);
  const [listOrderDetail, setListOrderDetail] = useState([]);
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const initData = async () => {
      const response = await doPost(`/order/admin/orderDetailByIdOrder/${id}`);

      if (response.data.status == 200) {
        setListOrderDetail(response.data.data.listOrderDetail);
        setAddress(response.data.data.addressOrder);
        setPhone(response.data.data.phone);
        const initialValue = 0;
        const sumWithInitial = response.data.data.listOrderDetail.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.totalOrderDetailPrice,
          initialValue
        );
        console.log("sum" + sumWithInitial);
        setTotal(sumWithInitial);
      }
    };

    initData();
  }, [isReload]);
  console.log(listOrderDetail);
  return (
    <main id="content" role="main" className="main">
      {/* Content */}
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header d-print-none">
          <div className="row align-items-center">
            <div className="col-sm mb-2 mb-sm-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-no-gutter">
                  <li className="breadcrumb-item">
                    <a className="breadcrumb-link" href="order-management.html">
                      Đơn hàng
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Chi tiết
                  </li>
                </ol>
              </nav>
              <div className="d-sm-flex align-items-sm-center">
                <h1 className="page-header-title">Mã đơn hàng {id}</h1>
                <span className="badge badge-soft-success ml-sm-3">
                  <span className="legend-indicator bg-success" />
                  Đã thanh toán
                </span>
                <span className="badge badge-soft-info ml-2 ml-sm-3">
                  <span className="legend-indicator bg-info" />
                  Hoàn thành
                </span>
                <span className="ml-2 ml-sm-3">
                  <i className="tio-date-range" /> Aug 17, 2020, 5:48 (ET)
                </span>
              </div>
              <div className="mt-2">
                <a className="text-body mr-3">
                  <i className="tio-print mr-1" /> In đơn hàng
                </a>
                {/* Unfold */}
                {/* <div class="hs-unfold">
          <a class="js-hs-unfold-invoker text-body" href="javascript:;" data-hs-unfold-options='{
                 "target": "#moreOptionsDropdown",
                 "type": "css-animation"
               }'>
            More options <i class="tio-chevron-down"></i>
          </a>

          <div id="moreOptionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
            <a class="dropdown-item" href="#">
              <i class="tio-copy dropdown-item-icon"></i> Duplicate
            </a>
            <a class="dropdown-item" href="#">
              <i class="tio-clear dropdown-item-icon"></i> Cancel order
            </a>
            <a class="dropdown-item" href="#">
              <i class="tio-archive dropdown-item-icon"></i> Archive
            </a>
            <a class="dropdown-item" href="#">
              <i class="tio-visible dropdown-item-icon"></i> View order status page
            </a>
            <a class="dropdown-item" href="#">
              <i class="tio-edit dropdown-item-icon"></i> Edit order
            </a>
          </div>
        </div> */}
                {/* End Unfold */}
              </div>
            </div>
            <div className="col-sm-auto">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle mr-1"
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Đơn hàng trước"
              >
                <i className="tio-arrow-backward" />
              </a>
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                href="#"
                data-toggle="tooltip"
                data-placement="top"
                title="Đơn hàng tiếp theo"
              >
                <i className="tio-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        {/* End Page Header */}
        <div className="row">
          <div className="col-lg-8 mb-3 mb-lg-0">
            {/* Card */}
            <div className="card mb-3 mb-lg-5">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">
                  Chi tiết đơn hàng{" "}
                  <span className="badge badge-soft-dark rounded-circle ml-1"></span>
                </h4>
                {/* <a class="link" href="javascript:;">Chỉnh sửa</a> */}
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Media */}
                {listOrderDetail.map((item, index) => {
                  return (
                    <div className="media" key={index}>
                      <div className="avatar avatar-xl mr-3">
                        <img
                          src={`http://localhost:3000/assets/img/secondhand/accessories/${item.productEntity.imageEntity[0].url}`}
                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                      <div className="media-body">
                        <div className="row">
                          <div className="col-md-6 mb-3 mb-md-0">
                            <a
                              className="h5 d-block"
                              href="ecommerce-product-details.html"
                            >
                              {item.productEntity.name}
                            </a>
                            <div className="font-size-sm text-body">
                              <span>Gender:</span>
                              <span className="font-weight-bold">Women</span>
                            </div>
                            <div className="font-size-sm text-body">
                              <span>Color:</span>
                              <span className="font-weight-bold">Green</span>
                            </div>
                            <div className="font-size-sm text-body">
                              <span>Size:</span>
                              <span className="font-weight-bold">UK 7</span>
                            </div>
                          </div>
                          <div className="col col-md-2 align-self-center">
                            <h5>{item.productEntity.price}</h5>
                          </div>
                          <div className="col col-md-2 align-self-center">
                            <h5>{item.quantity}</h5>
                          </div>
                          <div className="col col-md-2 align-self-center text-right">
                            <h5>{item.totalOrderDetailPrice}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* End Media */}

                <hr />
                <div className="row justify-content-md-end mb-3">
                  <div className="col-md-8 col-lg-7">
                    <dl className="row text-sm-right">
                      <dt className="col-sm-6">Tổng giá:</dt>
                      <dd className="col-sm-6">{total}</dd>
                    </dl>
                    {/* End Row */}
                  </div>
                </div>
                {/* End Row */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
            {/* Card */}
            <div className="card">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">
                  Tình trạng đơn hàng
                  <span className="badge badge-soft-dark ml-1">
                    <span className="legend-indicator bg-dark" />
                    Được đánh dấu là đã hoàn thành
                  </span>
                </h4>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                {/* Step */}
                <ul className="step step-icon-xs">
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <small className="step-divider">
                        Wednesday, 19 August
                      </small>
                    </div>
                  </li>
                  {/* End Step Item */}
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                      <div className="step-content">
                        <h5 className="mb-1">
                          <a className="text-dark" href="#">
                            Đã giao hàng
                          </a>
                        </h5>
                        <p className="font-size-sm mb-0">4:17 AM</p>
                      </div>
                    </div>
                  </li>
                  {/* End Step Item */}
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <small className="step-divider">Tuesday, 18 August</small>
                    </div>
                  </li>
                  {/* End Step Item */}
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                      <div className="step-content">
                        <h5 className="mb-1">
                          <a className="text-dark" href="#">
                            Mã số để theo dõi
                          </a>
                        </h5>
                        <a className="link" href="#">
                          3981241023109293
                        </a>
                        <p className="font-size-sm mb-0">6:29 AM</p>
                      </div>
                    </div>
                  </li>
                  {/* End Step Item */}
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                      <div className="step-content">
                        <h5 className="mb-1">
                          <a className="text-dark" href="#">
                            Đơn hàng đã được gửi đi
                          </a>
                        </h5>
                        <p className="font-size-sm mb-0">6:29 AM</p>
                      </div>
                    </div>
                  </li>
                  {/* End Step Item */}
                  {/* Step Item */}
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <span className="step-icon step-icon-soft-dark step-icon-pseudo" />
                      <div className="step-content">
                        <h5 className="mb-1">
                          <a className="text-dark" href="#">
                            Đơn hàng đã được đặt
                          </a>
                        </h5>
                        <p className="font-size-sm mb-0">Đơn hàng #32543</p>
                      </div>
                    </div>
                  </li>
                  {/* End Step Item */}
                </ul>
                {/* End Step */}
                {/* <small>Times are shown in the local time zone.</small> */}
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
          <div className="col-lg-4">
            {/* Card */}
            <div className="card">
              {/* Header */}
              <div className="card-header">
                <h4 className="card-header-title">Khách hàng</h4>
              </div>
              {/* End Header */}
              {/* Body */}
              <div className="card-body">
                <a
                  className="media align-items-center"
                  href="ecommerce-customer-details.html"
                >
                  <div className="avatar avatar-circle mr-3"></div>
                  <div className="media-body">
                    <span className="text-body text-hover-primary">.</span>
                  </div>
                  <div className="media-body text-right">
                    <i className="tio-chevron-right text-body" />
                  </div>
                </a>
                <hr />
                <a
                  className="media align-items-center"
                  href="ecommerce-customer-details.html"
                >
                  <div className="icon icon-soft-info icon-circle mr-3">
                    <i className="tio-shopping-basket-outlined" />
                  </div>
                  <div className="media-body">
                    <span className="text-body text-hover-primary">
                      7 đơn hàng
                    </span>
                  </div>
                  <div className="media-body text-right">
                    <i className="tio-chevron-right text-body" />
                  </div>
                </a>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Thôn tin liên lạc</h5>
                  {/* <a class="link" href="javascript:;">Sửa</a> */}
                </div>
                <ul className="list-unstyled list-unstyled-py-2">
                  <li>
                    <i className="tio-online mr-2" />
                    ella@example.com
                  </li>
                  <li>
                    <i className="tio-android-phone-vs mr-2" />
                    {phone}
                  </li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h5>Địa chỉ giao hàng</h5>
                  {/* <a class="link" href="javascript:;">Sửa</a> */}
                </div>
                <span className="d-block">
                  45 Roker Terrace
                  <br />
                  Latheronwheel
                  <br />
                  KW5 8NW, London
                  <br />
                  UK{" "}
                  <img
                    className="avatar avatar-xss avatar-circle ml-1"
                    src="assets\vendor\flag-icon-css\flags\1x1\gb.svg"
                  />
                </span>
                <hr />
                <div className="mt-3">
                  <h5 className="mb-0">Mastercard</h5>
                  <span className="d-block">Số thẻ: ************4291</span>
                </div>
              </div>
              {/* End Body */}
            </div>
            {/* End Card */}
          </div>
        </div>
        {/* End Row */}
      </div>
      {/* End Content */}
    </main>
  );
}

export default DetailOrder;
