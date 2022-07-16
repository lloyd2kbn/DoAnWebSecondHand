import React, { useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./DetailUser.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";
import { useParams } from 'react-router-dom';
import { doGet, doPost } from "../../utils/api/api";
import {Link} from 'react-router-dom'
export const defaultValue = {

}

function DetailUser() {
  const [isReload, setIsReload] = useState(false);
  const [listDetail, setListDetail] = useState([]);
  const [userName,setUserName]=useState('');
  const {id}=useParams();
  console.log(id)
  useEffect(() => {
    const initData = async () => {
      const response = await doPost(`/manage/admin/listOrderByUser/${id}`);
    
      if(response.data.status==200){
          console.log(response.data.data)
          setListDetail(response.data.data.listDetail)
          setUserName(response.data.data.userName)
       
      }
    }
    
    initData();
  }, [isReload])



  return (
   
    <main id="content" role="main" className="main">
    {/* Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-sm mb-2 mb-sm-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-no-gutter">
                <li className="breadcrumb-item"><a className="breadcrumb-link" href="ecommerce-customers.html">Khách hàng</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Chi tiết</li>
              </ol>
            </nav>
            <h1 className="page-header-title">{userName}</h1>
          </div>
          <div className="col-sm-auto">
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle mr-1" href="#" data-toggle="tooltip" data-placement="top" title="Khách hàng trước đó">
              <i className="tio-arrow-backward" />
            </a>
            <a className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle" href="#" data-toggle="tooltip" data-placement="top" title="Khách hàng tiếp theo">
              <i className="tio-arrow-forward" />
            </a>
          </div>
        </div>
      </div>
      {/* End Page Header */}
      <div className="row">
        <div className="col-lg-8">
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Body */}
            <div className="card-body">
              {/* Media */}
              <div className="d-flex align-items-center mb-5">
                <div className="avatar avatar-lg avatar-circle">
                  <img className="avatar-img" src="data:image/jpeg;base64,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"  />
                </div>
                <div className="mx-3">
                  <div className="d-flex mb-1">
                    <h3 className="mb-0 mr-3">{userName}</h3>
                    {/* Unfold */}
                    {/* <div class="hs-unfold">
                  <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-white rounded-circle" href="javascript:;"
                    data-toggle="tooltip" data-placement="top" title="Sửa" data-hs-unfold-options='{
                         "target": "#editDropdown",
                         "type": "css-animation"
                       }'>
                    <i class="tio-edit"></i>
                  </a>

                  <div id="editDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-card mt-1"
                    style="min-width: 20rem;">
                    <div class="card">
                      <div class="card-body">
                        <div class="form-row">
                          <div class="col-sm-6">
                            <label for="firstNameLabel" class="input-label">Tên</label>
                            <input type="text" class="form-control" name="firstName" id="firstNameLabel"
                              placeholder="Clarice" aria-label="Clarice" value="Anna">
                          </div>

                          <div class="col-sm-6">
                            <label for="lastNameLabel" class="input-label">Họ</label>
                            <input type="text" class="form-control" name="lastName" id="lastNameLabel"
                              placeholder="Boone" aria-label="Boone" value="Richard">
                          </div>
                        </div>

                        <div class="d-flex justify-content-end mt-3">
                          <button type="button" class="btn btn-sm btn-white mr-2">Bỏ</button>
                          <button type="button" class="btn btn-sm btn-primary">Lưu</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                    {/* End Unfold */}
                  </div>
                </div>
                {/* <div class="d-none d-sm-inline-block ml-auto text-right"> */}
                {/* Unfold */}
                {/* <div class="hs-unfold">
                <a class="js-hs-unfold-invoker btn btn-sm btn-white" href="javascript:;" data-hs-unfold-options='{
                       "target": "#actionsDropdown",
                       "type": "css-animation"
                     }'>
                  Actions <i class="tio-chevron-down"></i>
                </a>

                <div id="actionsDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu mt-1">
                  <a class="dropdown-item" href="#">
                    <i class="tio-email-outlined dropdown-item-icon"></i> Email
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-call dropdown-item-icon"></i> Call
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="tio-sync dropdown-item-icon"></i> Merge
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-danger" href="#">
                    <i class="tio-delete-outlined dropdown-item-icon text-danger"></i>
                    Delete
                  </a>
                </div>
              </div> */}
                {/* End Unfold */}
                {/* </div> */}
              </div>
              {/* End Media */}
              {/* <label class="input-label">Customer note</label> */}
              {/* Quill */}
              {/* <div class="quill-custom">
            <div id="toolbar-container">
              <ul class="list-inline ql-toolbar-list">
                <li class="list-inline-item">
                  <button class="ql-bold"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-italic"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-underline"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-strike"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-link"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-image"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-blockquote"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-code"></button>
                </li>
                <li class="list-inline-item">
                  <button class="ql-list" value="bullet"></button>
                </li>
              </ul>
            </div>

            <div class="js-quill" style="min-height: 10rem;" data-hs-quill-options='{
                      "placeholder": "Start typing to leave a note...",
                      "toolbarBottom": true,
                      "modules": {
                        "toolbar": "#toolbar-container"
                      }
                     }'>
            </div>
          </div> */}
              {/* End Quill */}
            </div>
            {/* Body */}
            {/* Footer */}
            {/* <div class="card-footer">
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-white mr-2">Discard</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div> */}
            {/* End Footer */}
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Header */}
            <div className="card-header">
              <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-sm mb-3 mb-sm-0">
                  <h4 className="card-header-title">Các đơn hàng đã đặt</h4>
                </div>
                <div className="col-sm-auto">
                  {/* Nav */}
                  {/* <ul class="js-tabs-to-dropdown nav nav-segment nav-fill nav-sm-down-break"
                data-hs-transform-tabs-to-btn-options='{
                      "transformResolution": "sm",
                      "btnClassNames": "btn btn-block btn-white dropdown-toggle justify-content-center"
                    }'>
                <li class="nav-item">
                  <a class="nav-link active" href="#">Tất cả đơn hàng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Open</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unfulfilled</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unpaid</a>
                </li>
              </ul> */}
                  {/* End Nav */}
                  {/* Datatable Info */}
                  <div id="datatableCounterInfo" style={{display: 'none'}}>
                    <div className="d-flex align-items-center">
                      <span className="font-size-sm mr-3">
                        Đã chọn
                        <span id="datatableCounter">0</span>
                        đơn hàng
                      </span>
                      <a className="btn btn-sm btn-outline-danger" href="javascript:;">
                        <i className="tio-delete-outlined" /> Xóa
                      </a>
                    </div>
                  </div>
                  {/* End Datatable Info */}
                </div>
              </div>
              {/* End Row */}
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="card-body">
              {/* Input Group */}
              <div className="input-group input-group-merge">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="tio-search" />
                  </span>
                </div>
                <input id="datatableSearch" type="search" className="form-control" placeholder="Tìm đơn hàng" aria-label="Search orders" />
              </div>
              {/* End Input Group */}
            </div>
            {/* End Body */}
            {/* Table */}
            <div className="table-responsive datatable-custom">
              <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                     &quot;columnDefs&quot;: [{
                        &quot;targets&quot;: [0, 5],
                        &quot;orderable&quot;: false
                      }],
                     &quot;order&quot;: [],
                     &quot;info&quot;: {
                       &quot;totalQty&quot;: &quot;#datatableWithPaginationInfoTotalQty&quot;
                     },
                     &quot;search&quot;: &quot;#datatableSearch&quot;,
                     &quot;entries&quot;: &quot;#datatableEntries&quot;,
                     &quot;pageLength&quot;: 12,
                     &quot;isResponsive&quot;: false,
                     &quot;isShowPaging&quot;: false,
                     &quot;pagination&quot;: &quot;datatablePagination&quot;
                   }">
                <thead className="thead-light">
                  <tr>
                    <th scope="col" className="table-column-pr-0">
                      <div className="custom-control custom-checkbox">
                        <input id="datatableCheckAll" type="checkbox" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="datatableCheckAll" />
                      </div>
                    </th>
                    <th className="table-column-pl-0">Đơn hàng</th>
                    <th>Ngày đặt</th>
                    <th>Trạng thái thanh toán</th>
                    <th>Tổng tiền</th>
                    <th>Hóa đơn</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    listDetail.map((order,index)=>{
                    return   <tr key={index}>
                      <td className="table-column-pr-0">
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="ordersCheck1" />
                          <label className="custom-control-label" htmlFor="ordersCheck1" />
                        </div>
                      </td>
                      <td className="table-column-pl-0">
                        {/* <a >{order.id}</a> */}
                        <Link to={`${order.id}`}>{order.id}</Link>
                      </td>
                      <td>{order.dateCreated}</td>
                      <td>
                        <span className="badge badge-soft-success">
                          <span className="legend-indicator bg-success" />Paid
                        </span>
                      </td>
                      <td>{order.totalPriceOrder}</td>
                      <td>
                        <a className="btn btn-sm btn-white" href="javascript:;" data-toggle="modal" data-target="#invoiceReceiptModal">
                          <i className="tio-receipt-outlined mr-1" /> Hóa đơn
                        </a>
                      </td>
                    </tr>
                    })
                  }
                 
           
                </tbody>
              </table>
            </div>
            {/* End Table */}
            {/* Footer */}
            <div className="card-footer">
              {/* Pagination */}
              <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                    <span className="mr-2">Hiển thị </span>
                    {/* Select */}
                    <select id="datatableEntries" className="js-select2-custom" data-hs-select2-options="{
                            &quot;minimumResultsForSearch&quot;: &quot;Infinity&quot;,
                            &quot;customClass&quot;: &quot;custom-select custom-select-sm custom-select-borderless&quot;,
                            &quot;dropdownAutoWidth&quot;: true,
                            &quot;width&quot;: true
                          }">
                      <option value={12} selected>12</option>
                      <option value={14}>14</option>
                      <option value={16}>16</option>
                      <option value={18}>18</option>
                    </select>
                    {/* End Select */}
                    <span className="text-secondary mr-2">đơn hàng trong tổng </span>
                    {/* Pagination Quantity */}
                    <span id="datatableWithPaginationInfoTotalQty" />
                  </div>
                </div>
                <div className="col-sm-auto">
                  <div className="d-flex justify-content-center justify-content-sm-end">
                    {/* Pagination */}
                    <nav id="datatablePagination" aria-label="Activity pagination" />
                  </div>
                </div>
              </div>
              {/* End Pagination */}
            </div>
            {/* End Footer */}
          </div>
          {/* End Card */}
          {/* Card - Timeline */}
          {/* End Card - Timeline */}
          <div className="d-none d-lg-block">
            <button type="button" className="btn btn-danger">Xóa khách hàng</button>
            <button type="button" className="btn btn-primary">Tạm ngưng hoạt động</button>
          </div>
        </div>
        <div className="col-lg-4">
          {/* Card */}
          <div className="card mb-3 mb-lg-5">
            {/* Body */}
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h5>Thông tin liên lạc</h5>
                {/* <a class="link" href="javascript:;">Edit</a> */}
              </div>
              <ul className="list-unstyled list-unstyled-py-2">
                <li>
                  <i className="tio-online mr-2" />
                  anne@example.com
                </li>
                <li>
                  <i className="tio-android-phone-vs mr-2" />
                    03634666954
                </li>
              </ul>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5>Địa chỉ</h5>
                {/* <a class="link" href="javascript:;">Edit</a> */}
              </div>
              {/* Leaflet (Map) */}
              <div id="map" className="leaflet-custom rounded mt-1 mb-3" style={{minHeight: '10rem'}} data-hs-leaflet-options="{
                   &quot;map&quot;: {
                     &quot;scrollWheelZoom&quot;: false,
                     &quot;coords&quot;: [37.4040344, -122.0289704]
                   },
                   &quot;marker&quot;: [
                     {
                       &quot;coords&quot;: [10.815209, 106.680773],
                       &quot;icon&quot;: {
                         &quot;iconUrl&quot;: &quot;./assets/svg/components/map-pin.svg&quot;,
                         &quot;iconSize&quot;: [50, 45]
                       },
                       &quot;popup&quot;: {
                         &quot;text&quot;: &quot;153 Williamson Plaza, Maggieberg&quot;
                       }
                     }
                   ]
                  }" />
              {/* End Leaflet (Map) */}
              <span className="d-block">
                45 Phạm Văn Đồng<br />
                Phường 3<br />
                Quận Gò Vấp, Thành Phố Hồ Chí Minh.<br />
                {/* <img class="avatar avatar-xss avatar-circle ml-1" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg"
              alt="Great Britain Flag"> */}
              </span>
              <hr />
              {/* <div class="d-flex justify-content-between align-items-center">
            <h5>Billing address</h5>
            <a class="link" href="javascript:;">Edit</a>
          </div>

          <span class="d-block">
            45 Roker Terrace<br>
            Latheronwheel<br>
            KW5 8NW, London<br>
            UK <img class="avatar avatar-xss avatar-circle ml-1" src="assets\vendor\flag-icon-css\flags\1x1\gb.svg"
              alt="Great Britain Flag">
          </span> */}
              <div className="mt-3">
                <h5 className="mb-0">Thẻ thanh toán</h5>
                <span className="d-block">Số thẻ: ************4291</span>
              </div>
              <hr />
              <div className="mt-3">
                <h5 className="mb-0">Số ngày thanh toán</h5>
                <span className="d-block">Aug 17, 2020, 5:48 (ET)</span>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
          {/* Card */}
          {/* End Card */}
        </div>
      </div>
      {/* End Row */}
      <div className="d-lg-none">
        <button type="button" className="btn btn-danger">Xóa khách hàng</button>
      </div>
    </div>
    {/* End Content */}
    {/* Footer */}
    {/* End Footer */}
  </main>
        );
      }

export default DetailUser;