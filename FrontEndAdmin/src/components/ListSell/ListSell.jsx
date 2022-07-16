import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from 'classnames';
import "./ListSell.scss";
import { Modal } from "antd";
import { del, get } from "../../utils/api";

export const defaultValue = {

}

function ListSell() {

  return (
  
    <main id="content" role="main" className="main">
    {/* Content */}
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row align-items-center mb-3">
          <div className="col-sm mb-2 mb-sm-0">
            <h1 className="page-header-title">Kho chứa yêu cầu<span className="badge badge-soft-dark ml-2">72,031</span></h1>
            <div className="mt-2">
              <a className="text-body mr-3" href="javascript:;" data-toggle="modal" data-target="#exportProductsModal">
                <i className="tio-download-to mr-1" /> Xuất kho
              </a>
            </div>
          </div>
          {/* <div class="col-sm-auto">
          <a class="btn btn-primary" href="ecommerce-add-product.html">Check Request</a>
        </div> */}
        </div>
        {/* End Row */}
        {/* Nav Scroller */}
        <div className="js-nav-scroller hs-nav-scroller-horizontal">
          <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="tio-chevron-left" />
            </a>
          </span>
          <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
            <a className="hs-nav-scroller-arrow-link" href="javascript:;">
              <i className="tio-chevron-right" />
            </a>
          </span>
          {/* Nav */}
          <ul className="nav nav-tabs page-header-tabs" id="pageHeaderTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link" href="./sale-request-management.html">Yêu cầu đã duyệt</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./unchecked-sale-request.html" tabIndex={-1} aria-disabled="true">Yêu cầu chưa duyệt</a>
            </li>
            {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Publish</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Unpublish</a>
          </li> */}
          </ul>
          {/* End Nav */}
        </div>
        {/* End Nav Scroller */}
      </div>
      {/* End Page Header */}
      <div className="row justify-content-end mb-3">
        <div className="col-lg">
          {/* Datatable Info */}
          <div id="datatableCounterInfo" style={{display: 'none'}}>
            <div className="d-sm-flex justify-content-lg-end align-items-sm-center">
              <span className="d-block d-sm-inline-block font-size-sm mr-3 mb-2 mb-sm-0">
                Đã chọn
                <span id="datatableCounter">0</span>
                yêu cầu
              </span>
              <a className="btn btn-sm btn-outline-danger mb-2 mb-sm-0 mr-2" href="javascript:;">
                <i className="tio-delete-outlined" /> Xóa
              </a>
              {/* <a class="btn btn-sm btn-white mb-2 mb-sm-0 mr-2" href="javascript:;">
              <i class="tio-archive"></i> Archive
            </a> */}
              <a className="btn btn-sm btn-white mb-2 mb-sm-0 mr-2" href="javascript:;">
                <i className="tio-publish" /> Duyệt
              </a>
              {/* <a class="btn btn-sm btn-white mb-2 mb-sm-0" href="javascript:;">
              <i class="tio-clear"></i> Unchecked
            </a> */}
            </div>
          </div>
          {/* End Datatable Info */}
        </div>
      </div>
      {/* End Row */}
      {/* Card */}
      <div className="card">
        {/* Header */}
        <div className="card-header">
          <div className="row justify-content-between align-items-center flex-grow-1">
            <div className="col-md-4 mb-3 mb-md-0">
              <form>
                {/* Search */}
                <div className="input-group input-group-merge input-group-flush">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="tio-search" />
                    </div>
                  </div>
                  <input id="datatableSearch" type="search" className="form-control" placeholder="Search users" aria-label="Search users" />
                </div>
                {/* End Search */}
              </form>
            </div>
            <div className="col-auto">
              {/* Unfold */}
              <div className="hs-unfold mr-2">
                <a className="js-hs-unfold-invoker btn btn-white" href="javascript:;" data-hs-unfold-options="{
                  &quot;target&quot;: &quot;#datatableFilterSidebar&quot;,
                  &quot;type&quot;: &quot;css-animation&quot;,
                  &quot;animationIn&quot;: &quot;fadeInRight&quot;,
                  &quot;animationOut&quot;: &quot;fadeOutRight&quot;,
                  &quot;hasOverlay&quot;: true,
                  &quot;smartPositionOff&quot;: true
                 }">
                  <i className="tio-filter-list mr-1" /> Bộ lọc
                </a>
              </div>
              {/* End Unfold */}
              {/* Unfold */}
              <div className="hs-unfold">
                <a className="js-hs-unfold-invoker btn btn-white" href="javascript:;" data-hs-unfold-options="{
                   &quot;target&quot;: &quot;#showHideDropdown&quot;,
                   &quot;type&quot;: &quot;css-animation&quot;
                 }">
                  <i className="tio-table mr-1" /> Số cột <span className="badge badge-soft-dark rounded-circle ml-1">6</span>
                </a>
                <div id="showHideDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card" style={{width: '15rem'}}>
                  <div className="card card-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Yêu cầu bán</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_product">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_product" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Loại sản phẩm</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_category">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_category" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Thương hiệu</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_brand">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_brand" />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      {/* <div class="d-flex justify-content-between align-items-center mb-3">
                      <span class="mr-2">Duyệt</span> */}
                      {/* Checkbox Switch */}
                      {/* <label class="toggle-switch toggle-switch-sm" for="toggleColumn_stocks">
                        <input type="checkbox" class="toggle-switch-input" id="toggleColumn_stocks" checked="">
                        <span class="toggle-switch-label">
                          <span class="toggle-switch-indicator"></span>
                        </span>
                      </label> */}
                      {/* End Checkbox Switch */}
                      {/* </div> */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Mã yêu cầu</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_sku">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_sku" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Giá bán</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_price">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_price" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="mr-2">Số lượng</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_quantity">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_quantity" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="mr-2">Người bán</span>
                        {/* Checkbox Switch */}
                        <label className="toggle-switch toggle-switch-sm" htmlFor="toggleColumn_vendor">
                          <input type="checkbox" className="toggle-switch-input" id="toggleColumn_vendor" defaultChecked />
                          <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                          </span>
                        </label>
                        {/* End Checkbox Switch */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Unfold */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Header */}
        {/* Table */}
        <div className="table-responsive datatable-custom">
          <table id="datatable" className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table" data-hs-datatables-options="{
                 &quot;columnDefs&quot;: [{
                    &quot;targets&quot;: [0, 4, 9],
                    &quot;width&quot;: &quot;5%&quot;,
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
                <th className="table-column-pl-0">Yêu cầu</th>
                <th>Loại sản phẩm</th>
                <th>Thương hiệu</th>
                <th>Duyệt</th>
                <th>Mã yêu cầu</th>
                <th>Giá bán</th>
                <th>Số lượng</th>
                <th>Người bán</th>
                <th>Quản lý</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck1" />
                    <label className="custom-control-label" htmlFor="productsCheck1" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="./unchecked-sale-request-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img4.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Photive wireless speakers</h5>
                    </div>
                  </a>
                </td>
                <td>Electronics</td>
                <td>Google</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox1">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox1" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2384741241</td>
                <td>$65</td>
                <td>60</td>
                <td>$2</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="./unchecked-sale-request-details.html">
                      Kiểm tra
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown1&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown1" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Xóa
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-archive dropdown-item-icon"></i> Archive
                      </a> */}
                        <a className="dropdown-item" href="#">
                          <i className="tio-checkmark-circle-outlined dropdown-item-icon" /> Duyệt
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-clear dropdown-item-icon"></i> Unpublish
                      </a> */}
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck2" />
                    <label className="custom-control-label" htmlFor="productsCheck2" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="./unchecked-sale-request-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img26.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Topman shoe</h5>
                    </div>
                  </a>
                </td>
                <td>Shoes</td>
                <td>Topman</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox2">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox2" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>4124123847</td>
                <td>$21</td>
                <td>125</td>
                <td>$4</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="./unchecked-sale-request-details.html">
                      Kiểm tra
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown2&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown2" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Xóa
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-archive dropdown-item-icon"></i> Archive
                      </a> */}
                        <a className="dropdown-item" href="#">
                          <i className="tio-checkmark-circle-outlined dropdown-item-icon" /> Duyệt
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-clear dropdown-item-icon"></i> Unpublish
                      </a> */}
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck3" />
                    <label className="custom-control-label" htmlFor="productsCheck3" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="./unchecked-sale-request-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img25.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">RayBan black sunglasses</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>RayBan</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox3">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox3" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>8472341241</td>
                <td>$37</td>
                <td>42</td>
                <td>$1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="./unchecked-sale-request-details.html">
                      Kiểm tra
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown3&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown3" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Xóa
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-archive dropdown-item-icon"></i> Archive
                      </a> */}
                        <a className="dropdown-item" href="#">
                          <i className="tio-checkmark-circle-outlined dropdown-item-icon" /> Duyệt
                        </a>
                        {/* <a class="dropdown-item" href="#">
                        <i class="tio-clear dropdown-item-icon"></i> Unpublish
                      </a> */}
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck4" />
                    <label className="custom-control-label" htmlFor="productsCheck4" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img6.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Mango Women's shoe</h5>
                    </div>
                  </a>
                </td>
                <td>Shoes</td>
                <td>Mango</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox4">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox4" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2412384741</td>
                <td>$65</td>
                <td>76</td>
                <td>$3</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown4&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown4" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck5" />
                    <label className="custom-control-label" htmlFor="productsCheck5" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img3.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Calvin Klein t-shirts</h5>
                    </div>
                  </a>
                </td>
                <td>Clothing</td>
                <td>Calvin Klein</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox5">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox5" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>8234741241</td>
                <td>$89</td>
                <td>99</td>
                <td>$7</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown5&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown5" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck6" />
                    <label className="custom-control-label" htmlFor="productsCheck6" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img5.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Givenchy perfume</h5>
                    </div>
                  </a>
                </td>
                <td>Clothing</td>
                <td>Givenchy</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox6">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox6" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>9984741241</td>
                <td>$99</td>
                <td>50</td>
                <td>$1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown6&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown6" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck7" />
                    <label className="custom-control-label" htmlFor="productsCheck7" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img11.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Asos t-shirts</h5>
                    </div>
                  </a>
                </td>
                <td>Clothing</td>
                <td>Asos</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox7">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox7" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>7184741241</td>
                <td>$17</td>
                <td>422</td>
                <td>$4</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown7&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown7" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck8" />
                    <label className="custom-control-label" htmlFor="productsCheck8" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img12.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Apple AirPods 2</h5>
                    </div>
                  </a>
                </td>
                <td>Electronics</td>
                <td>Apple</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox8">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox8" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>1084741241</td>
                <td>$249</td>
                <td>1000</td>
                <td>$1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown8&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown8" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck9" />
                    <label className="custom-control-label" htmlFor="productsCheck9" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img13.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Timex Watch</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>Timex</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox9">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox9" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>4831441241</td>
                <td>$68</td>
                <td>15</td>
                <td>$2</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown9&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown9" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck10" />
                    <label className="custom-control-label" htmlFor="productsCheck10" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img14.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Air Jordan 1</h5>
                    </div>
                  </a>
                </td>
                <td>Shoes</td>
                <td>Nike Jordan</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox10">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox10" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>1223847441</td>
                <td>$139</td>
                <td>456</td>
                <td>$9</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown10&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown10" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck11" />
                    <label className="custom-control-label" htmlFor="productsCheck11" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img15.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">RayBan sunglasses</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>RayBan</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox11">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox11" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>1242384741</td>
                <td>$14</td>
                <td>83</td>
                <td>1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown11&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown11" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck12" />
                    <label className="custom-control-label" htmlFor="productsCheck12" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img17.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Gray and yellow cap</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>VA RVCA</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox12">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox12" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>8311741241</td>
                <td>$9</td>
                <td>522</td>
                <td>1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown12&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown12" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck13" />
                    <label className="custom-control-label" htmlFor="productsCheck13" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img16.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Apple iPad Pro 2020</h5>
                    </div>
                  </a>
                </td>
                <td>Electronics</td>
                <td>Apple</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox13">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox13" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2459741241</td>
                <td>$799</td>
                <td>450</td>
                <td>8</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown13&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown13" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck14" />
                    <label className="custom-control-label" htmlFor="productsCheck14" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img18.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Brown Hat</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>Mango</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox14">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox14" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2384994241</td>
                <td>$67</td>
                <td>32</td>
                <td>7</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown14&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown14" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck15" />
                    <label className="custom-control-label" htmlFor="productsCheck15" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img19.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Levis women's jeans</h5>
                    </div>
                  </a>
                </td>
                <td>Clothing</td>
                <td>Levis</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox15">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox15" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>1344761241</td>
                <td>$74</td>
                <td>121</td>
                <td>3</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown15&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown15" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck16" />
                    <label className="custom-control-label" htmlFor="productsCheck16" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img20.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Levis men's jeans jacket</h5>
                    </div>
                  </a>
                </td>
                <td>Clothing</td>
                <td>Levis</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox16">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox16" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>9904741241</td>
                <td>$61</td>
                <td>357</td>
                <td>1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown16&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown16" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck17" />
                    <label className="custom-control-label" htmlFor="productsCheck17" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img21.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Beats Headphones</h5>
                    </div>
                  </a>
                </td>
                <td>Electronics</td>
                <td>Beats</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox17">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox17" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>8812384741</td>
                <td>$499</td>
                <td>50</td>
                <td>4</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown17&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown17" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck18" />
                    <label className="custom-control-label" htmlFor="productsCheck18" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img22.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Office Notebook</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>-</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox18">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox18" defaultChecked />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>7134741241</td>
                <td>$9</td>
                <td>750</td>
                <td>1</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown18&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown18" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck19" />
                    <label className="custom-control-label" htmlFor="productsCheck19" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img23.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Colorful pens</h5>
                    </div>
                  </a>
                </td>
                <td>Accessories</td>
                <td>-</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox19">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox19" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2224741241</td>
                <td>$6</td>
                <td>750</td>
                <td>3</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown19&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown19" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="table-column-pr-0">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="productsCheck20" />
                    <label className="custom-control-label" htmlFor="productsCheck20" />
                  </div>
                </td>
                <td className="table-column-pl-0">
                  <a className="media align-items-center" href="ecommerce-product-details.html">
                    <img className="avatar avatar-lg mr-3" src="assets\img\400x400\img24.jpg" alt="Image Description" />
                    <div className="media-body">
                      <h5 className="text-hover-primary mb-0">Clarks shoes</h5>
                    </div>
                  </a>
                </td>
                <td>Shoes</td>
                <td>Clarks</td>
                <td>
                  <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox20">
                    <input type="checkbox" className="toggle-switch-input" id="stocksCheckbox20" />
                    <span className="toggle-switch-label">
                      <span className="toggle-switch-indicator" />
                    </span>
                  </label>
                </td>
                <td>2614741241</td>
                <td>$66</td>
                <td>982</td>
                <td>10</td>
                <td>
                  <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                      <i className="tio-edit" /> Edit
                    </a>
                    {/* Unfold */}
                    <div className="hs-unfold btn-group">
                      <a className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty" href="javascript:;" data-hs-unfold-options="{
                         &quot;target&quot;: &quot;#productsEditDropdown20&quot;,
                         &quot;type&quot;: &quot;css-animation&quot;,
                         &quot;smartPositionOffEl&quot;: &quot;#datatable&quot;
                       }" />
                      <div id="productsEditDropdown20" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <a className="dropdown-item" href="#">
                          <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-archive dropdown-item-icon" /> Archive
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-publish dropdown-item-icon" /> Publish
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="tio-clear dropdown-item-icon" /> Unpublish
                        </a>
                      </div>
                    </div>
                    {/* End Unfold */}
                  </div>
                </td>
              </tr>
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
                <span className="mr-2">Hiển thị</span>
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
                <span className="text-secondary mr-2"> yêu cầu trong tổng</span>
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
    </div>
    {/* End Content */}
    {/* Footer */}
    <div className="footer">
      <div className="row justify-content-between align-items-center">
        <div className="col">
          <p className="font-size-sm mb-0">© Front. <span className="d-none d-sm-inline-block">2020 Htmlstream.</span></p>
        </div>
        <div className="col-auto">
          <div className="d-flex justify-content-end">
            {/* List Dot */}
            <ul className="list-inline list-separator">
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">FAQ</a>
              </li>
              <li className="list-inline-item">
                <a className="list-separator-link" href="#">License</a>
              </li>
              <li className="list-inline-item">
                {/* Keyboard Shortcuts Toggle */}
                <div className="hs-unfold">
                  <a className="js-hs-unfold-invoker btn btn-icon btn-ghost-secondary rounded-circle" href="javascript:;" data-hs-unfold-options="{
                          &quot;target&quot;: &quot;#keyboardShortcutsSidebar&quot;,
                          &quot;type&quot;: &quot;css-animation&quot;,
                          &quot;animationIn&quot;: &quot;fadeInRight&quot;,
                          &quot;animationOut&quot;: &quot;fadeOutRight&quot;,
                          &quot;hasOverlay&quot;: true,
                          &quot;smartPositionOff&quot;: true
                         }">
                    <i className="tio-command-key" />
                  </a>
                </div>
                {/* End Keyboard Shortcuts Toggle */}
              </li>
            </ul>
            {/* End List Dot */}
          </div>
        </div>
      </div>
    </div>
    {/* End Footer */}
  </main>
  
  
  
  
        );
      }

export default ListSell;